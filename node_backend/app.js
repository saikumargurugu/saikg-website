import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import { validationResult, check } from 'express-validator';
import dotenv from 'dotenv';


dotenv.config();


const app = express();
const port = process.env.PORT || 5001; // Change 5000 to another available port 

// CORS Configuration
const allowedOrigins = [process.env.FRONTEND_URL];
const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, origin);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
};


app.use(cors(corsOptions));
app.use(bodyParser.json());


// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
    },
});


// Route to handle contact form submissions
app.post(
    '/send-email',
    [
        // Validation rules (using express-validator)
        check('name').trim().notEmpty().withMessage('Name is required'),
        check('email').isEmail().withMessage('Invalid email address'),
        check('message').trim().notEmpty().withMessage('Message is required'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }


        const { name, email, message } = req.body;


        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.MY_EMAIL,
            subject: `New Contact Form Submission from ${name}`,
            text: `
  You have received a new message from your website contact form:
 

  Name: ${name}
  Email: ${email}
  Message: ${message}
  `,
        };


        try {
            await transporter.sendMail(mailOptions);
            console.log('Email sent successfully');
            res.send('Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        }
    }
);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});