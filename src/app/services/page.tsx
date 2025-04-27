"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaCode, FaCloud, FaServer, FaMobileAlt } from 'react-icons/fa';
import PropTypes from 'prop-types'; // Import PropTypes

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  children: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 h-full flex flex-col justify-between items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-blue-600 dark:text-blue-400 mb-4 text-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-blue-700 dark:text-blue-200 mb-2 text-center">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
        {description}
      </p>
      <div
        className={`mt-4 overflow-hidden transition-all duration-500 ease-in-out ${isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {children}
      </div>
      <Link
        href="/contact"
        className="text-blue-500 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 hover:underline transition-colors duration-300 text-center mt-4"
      >
        Learn More
      </Link>
    </div>
  );
};

// Add PropTypes validation
ServiceCard.propTypes = {
  icon: PropTypes.node.isRequired,       // Icon can be any valid JSX (e.g., FaCode)
  title: PropTypes.string.isRequired,    // Title is a required string
  description: PropTypes.string.isRequired, // Description is a required string
  children: PropTypes.node.isRequired,  // Children can be any valid JSX (e.g., list items)
};

const ServicesPage = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-blue-700 dark:text-blue-200 mb-4">
            What I Can Do For You
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            I am good at development of web services designed to elevate your online presence and drive your business forward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<FaCode size={48} />}
            title="Web Development"
            description="Crafting responsive, fast, and scalable websites using the latest web technologies to deliver exceptional user experiences."
          >
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Next.js, React.js</li>
              <li>E-commerce Solutions</li>
              <li>CMS Development</li>
            </ul>
          </ServiceCard>

          <ServiceCard
            icon={<FaServer size={48} />}
            title="API Development"
            description="Building robust and efficient APIs that enable seamless communication and data exchange between applications."
          >
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>RESTful API Design</li>
              <li>Node.js, Express.js</li>
              <li>API Documentation</li>
            </ul>
          </ServiceCard>

          <ServiceCard
            icon={<FaCloud size={48} />}
            title="Cloud & DevOps"
            description="Leveraging cloud platforms and DevOps practices to deploy, scale, and automate your applications for optimal performance and reliability."
          >
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>AWS, Azure, GCP</li>
              <li>Docker, Kubernetes</li>
              <li>CI/CD Pipelines</li>
            </ul>
          </ServiceCard>

          <ServiceCard
            icon={<FaMobileAlt size={48} />}
            title="Mobile App Development"
            description="Developing cross-platform mobile applications that provide engaging and consistent user experiences across iOS and Android."
          >
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>React Native</li>
              <li>UI/UX Design</li>
              <li>App Store Deployment</li>
            </ul>
          </ServiceCard>
        </div>

        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 py-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-200 mb-4">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Let&apos;s discuss how my knowledge can help you achieve your business objectives.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
