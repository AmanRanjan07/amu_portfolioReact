import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com/ranjanaman007", icon: <FaGithub />, label: "GitHub" },
  { href: "https://www.linkedin.com/in/aman-ranjan-477534291/", icon: <FaLinkedin />, label: "LinkedIn" },
  { href: "https://twitter.com/yourusername", icon: <FaTwitter />, label: "Twitter" },
];

// Premium Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
      ease: "easeInOut",
    },
  },
};

// Profile Image - Pop-up
const imageVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

// Title - Fade + Slide Up
const titleVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.1,
    },
  },
};

// Subtitle - Fade
const subtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Description - Soft Fade
const descriptionVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.4,
      ease: "easeOut",
    },
  },
};

// Social Container - Stagger
const socialContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delay: 0.5,
    },
  },
};

// Social Items - Individual
const socialItemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Buttons
const buttonContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delay: 0.6,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={require("../assets/amucode.png")}
          alt="Tech Background"
          className="w-full h-full object-cover object-top"
        />
        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/50 backdrop-blur-sm" />
        
        {/* Animated Overlay Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-600/15 via-blue-600/10 to-purple-600/15"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      {/* Floating Gradient Orbs with smooth animation */}
      <motion.div
        className="absolute top-20 right-10 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl z-5"
        animate={{ y: [0, 30, 0], x: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 left-10 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl z-5"
        animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image - Pop-up Animation with Glow Effect */}
        <motion.div
          variants={imageVariants}
          className="flex justify-center mb-12"
        >
          <motion.div
            className="relative"
            whileHover={{
              boxShadow: "0 0 40px rgba(59, 130, 246, 0.6), 0 0 80px rgba(6, 182, 212, 0.3)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/40 to-blue-600/40 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <motion.img
              src={require("../assets/DSC05867-Photoroom (1).jpg")}
              alt="Aman Ranjan"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full ring-4 ring-cyan-400/50 shadow-2xl object-cover relative z-10 backdrop-blur-md"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 40px rgba(59, 130, 246, 0.6), 0 0 80px rgba(6, 182, 212, 0.3)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            />
          </motion.div>
        </motion.div>

        {/* Name - Fade In + Slide Up with Glow */}
        <motion.div
          variants={titleVariants}
          className="text-center mb-4"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 drop-shadow-lg">
            Aman <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-pulse">Ranjan</span>
          </h1>
        </motion.div>

        {/* Typewriter Subtitle - Fade with Cyan Glow */}
        <motion.div
          variants={subtitleVariants}
          className="text-xl md:text-2xl font-medium text-cyan-200 text-center mb-6 min-h-10 drop-shadow-lg"
        >
          <ReactTyped
            strings={[
              "Full-Stack Developer",
              "Data Analytics Enthusiast",
              "Web Developer",
              "Frontend Innovator",
              "Tech Problem Solver"
            ]}
            typeSpeed={50}
            backSpeed={25}
            loop
          />
        </motion.div>

        {/* Description - Soft Fade with Light Text */}
        <motion.p
          variants={descriptionVariants}
          className="text-base md:text-lg text-gray-100 max-w-2xl mx-auto text-center mb-12 leading-relaxed drop-shadow-md"
        >
          Passionate about building beautiful web experiences and solving complex problems with modern technologies. Let's create something amazing together.
        </motion.p>

        {/* Social Links - Staggered with Glow */}
        <motion.div
          variants={socialContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center gap-6 mb-12"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={socialItemVariants}
              className="p-3 text-2xl text-cyan-300 bg-white/10 hover:bg-cyan-400/20 rounded-lg transition-all shadow-lg hover:shadow-cyan-400/50 backdrop-blur-md border border-cyan-400/30"
              whileHover={{
                scale: 1.2,
                y: -6,
                boxShadow: "0 0 25px rgba(34, 211, 238, 0.6)",
              }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Buttons - Staggered with Gradient Glow */}
        <motion.div
          variants={buttonContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
        >
          <motion.a
            href="#projects"
            variants={buttonVariants}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg text-center shadow-lg hover:shadow-cyan-400/50 backdrop-blur-md border border-cyan-400/50"
            whileHover={{
              scale: 1.05,
              y: -4,
              boxShadow: "0 0 30px rgba(34, 211, 238, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            View My Work
          </motion.a>

          <motion.a
            href="#contact"
            variants={buttonVariants}
            className="px-8 py-3 border-2 border-cyan-400 text-cyan-300 font-semibold rounded-lg hover:bg-cyan-400/10 text-center transition-all backdrop-blur-md shadow-lg hover:shadow-cyan-400/30"
            whileHover={{
              scale: 1.05,
              y: -4,
              boxShadow: "0 0 25px rgba(34, 211, 238, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
  