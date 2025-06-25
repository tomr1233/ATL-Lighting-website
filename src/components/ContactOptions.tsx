// src/components/ContactOptions.tsx

import React from 'react';
// We'll use react-icons for social media logos
import { FaLinkedin, FaTiktok, FaInstagram } from 'react-icons/fa';

interface ContactMethod {
  title: string;
  value: string;
  imageSrc: string;
  href: string;
}

const contactMethods: ContactMethod[] = [
  {
    title: "Email Us",
    value: "Get in touch via email",
    imageSrc: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
    href: "mailto:contact@atlvisual.com"
  },
  {
    title: "Call Us",
    value: "+64 21 1914 524",
    imageSrc: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
    href: "tel:+64211914524"
  },
  {
    title: "WhatsApp",
    value: "Scan to chat with us",
    imageSrc: "https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=https://wa.me/15551234567", // Example QR Code
    href: "https://wa.me/64211914524" // Update with your WhatsApp number
  },
  {
    title: "YouTube Channel",
    value: "See our products in action",
    imageSrc: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
    href: "https://www.youtube.com" // Update with your YouTube channel link
  }
];

const SocialLink: React.FC<{ href: string, icon: React.ReactNode, 'aria-label': string }> = ({ href, icon, 'aria-label': ariaLabel }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="p-3 bg-slate-800/60 rounded-full text-slate-300 hover:bg-sky-500 hover:text-white transition-all duration-300"
  >
    {icon}
  </a>
);

export default function ContactOptions() {
  return (
    <div className="bg-slate-900 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Get In Touch</h2>
          <p className="text-xl text-slate-300 mt-4 max-w-2xl mx-auto">
            We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {contactMethods.map((method) => (
            <a
              key={method.title}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-6 p-4 rounded-lg hover:bg-slate-800/50 transition-colors duration-300"
            >
              <img 
                src={method.imageSrc} 
                alt={method.title} 
                className="h-28 w-28 md:h-32 md:w-32 rounded-lg object-cover flex-shrink-0"
              />
              <div>
                <h3 className="text-xl font-semibold text-white group-hover:text-sky-400 transition-colors duration-300">
                  {method.title}
                </h3>
                <p className="text-slate-300 mt-1">{method.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="mt-16 pt-12 border-t border-slate-700/50 flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-white mb-6">Follow Us</h3>
          <div className="flex items-center gap-5">
            <SocialLink href="#" icon={<FaLinkedin size={22} />} aria-label="LinkedIn" />
            <SocialLink href="#" icon={<FaTiktok size={22} />} aria-label="TikTok" />
            <SocialLink href="#" icon={<FaInstagram size={22} />} aria-label="Instagram" />
          </div>
        </div>

      </div>
    </div>
  );
}