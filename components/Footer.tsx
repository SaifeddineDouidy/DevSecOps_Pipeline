"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub} from "react-icons/fi";
import { SiMedium } from "react-icons/si";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");
      setMessage("");
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FiLinkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/saifeddine-douidy-87aa62251/",
      color: "hover:text-blue-500"
    },
    {
      name: "GitHub",
      icon: <FiGithub className="w-5 h-5" />,
      url: "https://github.com/SaifeddineDouidy",
      color: "hover:text-gray-300"
    },
    {
      name: "Medium",
      icon: <SiMedium className="w-5 h-5" />,
      url: "https://medium.com/@douidysaifeddine",
      color: "hover:text-green-500"
    },
  ];

  const footerLinks = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Contact Form */}
          <div className="md:col-span-5">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <FiMail className="mr-2 text-rose-500" />
              Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-rose-500 transition"
                  placeholder="Hello Saifeddine, I'd like to connect about..."
                  required
                ></textarea>
              </div>
              <div className="flex items-center">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`py-2 px-6 rounded-lg font-medium transition ${
                    isSubmitting 
                      ? "bg-gray-700 cursor-not-allowed" 
                      : "bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-500 hover:to-purple-500"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="ml-4 text-green-400 flex items-center"
                  >
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Message sent!
                  </motion.div>
                )}
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-rose-500/10 p-2 rounded-lg mr-3">
                  <FiMail className="w-5 h-5 text-rose-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a 
                    href="mailto:douidysaifeddine@gmail.com" 
                    className="hover:text-rose-400 transition-colors"
                  >
                    douidysaifeddine@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-rose-500/10 p-2 rounded-lg mr-3">
                  <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a 
                    href="tel:+1234567890" 
                    className="hover:text-rose-400 transition-colors"
                  >
                    +212 7 67 25 20 54
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-rose-500/10 p-2 rounded-lg mr-3">
                  <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p>Mohammedia, Morocco</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-4">
            <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {socialLinks.map((social, _index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 border border-gray-700 transition-colors ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {footerLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors py-1"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Saifeddine Douidy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;