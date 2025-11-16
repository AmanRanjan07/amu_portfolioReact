import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaCode } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { href: "https://github.com/yourusername", icon: <FaGithub />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/aman-ranjan-477534291/", icon: <FaLinkedin />, label: "LinkedIn" },
  { href: "https://twitter.com/yourusername", icon: <FaTwitter />, label: "Twitter" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-gray-900/60 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <a href="#hero" className="flex items-center gap-3 font-bold text-lg md:text-xl text-blue-600 dark:text-pink-400 hover:scale-105 transition-transform duration-200">
          <FaCode className="text-2xl" /> <span>Aman Ranjan</span>
        </a>

        <ul className="hidden md:flex gap-6 md:gap-8 text-sm md:text-base font-medium items-center">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="px-3 py-2 rounded-md hover:text-blue-600 dark:hover:text-pink-300 transition-colors duration-200 hover:bg-white/20 dark:hover:bg-gray-700/20"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-3 md:gap-4 items-center">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-lg text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-pink-300 transition-colors duration-200 p-1 rounded-lg hover:bg-white/20 dark:hover:bg-gray-700/20"
            >
              {link.icon}
            </a>
          ))}
          <a href="#contact" className="ml-2 px-3 md:px-4 py-2 md:py-3 rounded-md bg-blue-600 text-white dark:bg-pink-500 dark:text-white font-semibold shadow hover:scale-105 hover:shadow-lg transition-all duration-200 text-sm md:text-base">
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
