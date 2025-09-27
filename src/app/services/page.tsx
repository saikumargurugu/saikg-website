"use client";
import React, { useState } from 'react';
import { THEME } from '../theme';
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
      className={`${THEME.cardBg} ${THEME.card} hover:shadow-2xl transition-shadow duration-300 p-6 h-full flex flex-col justify-between items-center border-2 border-green-900`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-4 text-center">
        {icon}
      </div>
      <h3 className={`text-xl font-bold font-display ${THEME.headingText} mb-2 text-center`}>
        {title}
      </h3>
      <p className={`${THEME.bodyText} mb-4 text-center`}>
        {description}
      </p>
      <div
        className={`mt-4 overflow-hidden transition-all duration-500 ease-in-out ${isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {children}
      </div>
      <Link
        href="/contact"
        className={`${THEME.link} text-center mt-4`}
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
  <section className={`py-20 ${THEME.mainBg} font-body`}>
  <div className={`${THEME.section} flex flex-col items-center`}>
    <div className="text-center mb-12">
      <h2 className={`text-4xl font-extrabold font-display ${THEME.headingText} mb-4`}>
        What I Can Do For You
      </h2>
      <p className={`text-xl ${THEME.bodyText} leading-relaxed`}>
        I am good at development of web services designed to elevate your online presence and drive your business forward.
      </p>
    </div>
  <div className="flex flex-col items-center w-full">
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center items-center w-fit mx-auto">
          <ServiceCard
            icon={<FaCode size={48} className="text-green-400 mb-4" />}
            title="Web Development"
            description="Crafting responsive, fast, and scalable websites using the latest web technologies to deliver exceptional user experiences."
          >
            <ul className="list-disc list-inside text-gray-300">
              <li>Next.js, React.js</li>
              <li>E-commerce Solutions</li>
              <li>CMS Development</li>
            </ul>
          </ServiceCard>

          <ServiceCard
            icon={<FaServer size={48} className="text-green-400 mb-4" />}
            title="API Development"
            description="Building robust and efficient APIs that enable seamless communication and data exchange between applications."
          >
            <ul className="list-disc list-inside text-gray-300">
              <li>RESTful API Design</li>
              <li>Node.js, Express.js</li>
              <li>API Documentation</li>
            </ul>
          </ServiceCard>

          <ServiceCard
            icon={<FaCloud size={48} className="text-green-400 mb-4" />}
            title="Cloud & DevOps"
            description="Leveraging cloud platforms and DevOps practices to deploy, scale, and automate your applications for optimal performance and reliability."
          >
            <ul className="list-disc list-inside text-gray-300">
              <li>AWS, Azure, GCP</li>
              <li>Docker, Kubernetes</li>
              <li>CI/CD Pipelines</li>
            </ul>
          </ServiceCard>

          <ServiceCard
            icon={<FaMobileAlt size={48} className="text-green-400 mb-4" />}
            title="Mobile App Development"
            description="Developing cross-platform mobile applications that provide engaging and consistent user experiences across iOS and Android."
          >
            <ul className="list-disc list-inside text-gray-300">
              <li>React Native</li>
              <li>UI/UX Design</li>
              <li>App Store Deployment</li>
            </ul>
          </ServiceCard>
        </div>
      </div>
        </div>

        <div className={`mt-12 border-t border-green-900 py-8`}>
          <div className="text-center">
            <h2 className={`text-3xl font-extrabold font-display ${THEME.headingText} mb-4 drop-shadow-xl`}>
              Ready to Transform Your Digital Presence?
            </h2>
            <p className={`text-lg ${THEME.bodyText} mb-6`}>
              Let&apos;s discuss how my knowledge can help you achieve your business objectives.
            </p>
            <Link
              href="/contact"
              className={`inline-block ${THEME.primaryBtn} font-bold py-3 px-8 rounded-full transition-all duration-500 shadow-lg`}
            >
              Get in Touch
            </Link>
          </div>
        </div>
    </section>
  );
};

export default ServicesPage;
