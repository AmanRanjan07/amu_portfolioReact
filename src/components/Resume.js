import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaDownload,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaCode,
  FaStar,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { certificationsData, getTotalCertifications, getVerifiedCount, getAllCategories } from "../data/certificationsData";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const sectionVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const badgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  // Resume Data
  const resumeData = {
    personal: {
      name: "Aman Ranjan",
      title: "Full-Stack Developer & Data Analytics Enthusiast",
      email: "2300033544cse1@gmail.com",
      phone: "+91 9334935195",
      location: "Sonpur",
      links: {
        linkedin: "https://linkedin.com",
        github: "https://github.com/ranjanaman007",
        leetcode: "https://leetcode.com",
      },
    },
    objective:
      "Motivated Computer Science undergraduate skilled in SQL, MySQL, MongoDB, and spreadsheets. Adept at transforming raw data into actionable insights and building intuitive dashboards, seeking to contribute as a Data Analytics Apprentice at Google with strong problem-solving and teamwork skills.",
    education: [
      {
        id: 1,
        degree: "B.Tech in Computer Science & Engineering",
        institution: "Koneru Lakshmaiah Education Foundation",
        location: "Guntur",
        period: "2023 – 2027",
        cgpa: "9.20 / 10",
        highlights: ["Current Semester", "CGPA: 9.20/10"],
      },
    ],
    experience: [
      {
        id: 1,
        title: "Home Services Booking App Developer",
        company: "Personal Project",
        period: "Dec 2024 – Mar 2025",
        description:
          "Built a full-stack booking platform with secure login, real-time booking, and provider dashboards.",
        technologies: ["React", "Spring Boot", "MySQL"],
        achievements: [
          "Implemented secure authentication system",
          "Real-time booking updates",
          "Provider management dashboard",
        ],
      },
      {
        id: 2,
        title: "Full-Stack Developer",
        company: "Weather Forecast App",
        period: "Dec 2024 – Feb 2025",
        description:
          "Developed an interactive weather app with real-time forecasts, charts, and error handling.",
        technologies: ["MERN Stack", "OpenWeather API", "Chart.js"],
        achievements: [
          "Real-time weather data integration",
          "Interactive charts and visualizations",
          "Comprehensive error handling",
        ],
      },
      {
        id: 3,
        title: "Frontend Developer",
        company: "Special Foodie – Food Ordering Website",
        period: "Sep 2023 – Jan 2024",
        description:
          "Created a responsive food ordering platform with smooth navigation and mobile-friendly UI.",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        achievements: [
          "Responsive design across all devices",
          "Smooth navigation and animations",
          "Mobile-first approach",
        ],
      },
    ],
    skills: {
      "Data Analytics": [
        "SQL",
        "MySQL",
        "MongoDB",
        "Excel",
        "Google Sheets",
        "Data Visualization",
      ],
      Programming: ["JavaScript", "Java", "Node.js", "C", "React"],
      "Visualization & Tools": [
        "React Dashboards",
        "Chart.js",
        "Figma",
        "GitHub",
      ],
      "Soft Skills": [
        "Problem Solving",
        "Team Collaboration",
        "Communication (B2 English)",
        "Project Management",
      ],
    },
    certifications: [
      {
        id: 1,
        title: "Salesforce AI Associate",
        issuer: "Salesforce",
        date: "Oct 2024",
        icon: "🏆",
        verified: true,
      },
      {
        id: 2,
        title: "Automation Anywhere Essentials",
        issuer: "Automation Anywhere",
        date: "Jan 2025",
        icon: "🤖",
        verified: true,
      },
      {
        id: 3,
        title: "Aviatrix Multicloud Associate",
        issuer: "Aviatrix",
        date: "Aug 2024",
        icon: "☁️",
        verified: true,
      },
      {
        id: 4,
        title: "Linguaskill General (CEFR B2)",
        issuer: "Cambridge University",
        date: "Ongoing",
        icon: "📚",
        verified: true,
      },
    ],
  };

  // Resume Download Handler
  const handleDownloadResume = () => {
    // Create a simple resume PDF link
    const resumeLink = document.createElement("a");
    resumeLink.href =
      "https://drive.google.com/file/d/your-resume-link/view";
    resumeLink.download = "Aman-Ranjan-Resume.pdf";
    resumeLink.click();
  };

  return (
    <section id="resume" className="w-full min-h-screen bg-white py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
      <div className="absolute top-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
      
      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* ============ HERO SECTION ============ */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 p-1 mb-8">
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                  {resumeData.personal.name}
                </h1>
                <p className="text-lg md:text-xl text-blue-600 font-medium mb-6">
                  {resumeData.personal.title}
                </p>

                {/* Contact Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  <motion.a
                    href={`mailto:${resumeData.personal.email}`}
                    className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <FaEnvelope className="text-blue-600 text-lg" />
                    <span className="text-sm md:text-base">
                      {resumeData.personal.email}
                    </span>
                  </motion.a>

                  <motion.a
                    href={`tel:${resumeData.personal.phone}`}
                    className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <FaPhone className="text-blue-600 text-lg" />
                    <span className="text-sm md:text-base">
                      {resumeData.personal.phone}
                    </span>
                  </motion.a>

                  <motion.div
                    className="flex items-center gap-3 text-gray-700"
                    whileHover={{ x: 5 }}
                  >
                    <FaMapMarkerAlt className="text-blue-600 text-lg" />
                    <span className="text-sm md:text-base">
                      {resumeData.personal.location}
                    </span>
                  </motion.div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 mb-8">
                  <motion.a
                    href={resumeData.personal.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <FaLinkedin size={20} />
                  </motion.a>
                  <motion.a
                    href={resumeData.personal.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <FaGithub size={20} />
                  </motion.a>
                  <motion.a
                    href={resumeData.personal.links.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <SiLeetcode size={20} />
                  </motion.a>
                </div>

                {/* Download Button */}
                <motion.button
                  onClick={handleDownloadResume}
                  className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload size={18} />
                  Download Resume
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* ============ OBJECTIVE SECTION ============ */}
        <motion.div
          variants={sectionVariants}
          className="mb-12 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 p-1"
        >
          <div className="bg-white rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <FaBriefcase className="text-purple-600 text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Career Objective</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              {resumeData.objective}
            </p>
          </div>
        </motion.div>

        {/* ============ TAB NAVIGATION ============ */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex flex-wrap gap-2 md:gap-4 bg-gray-100 p-2 rounded-xl">
            {[
              { id: "overview", label: "Overview", icon: FaGraduationCap },
              { id: "experience", label: "Experience", icon: FaBriefcase },
              { id: "skills", label: "Skills", icon: FaCode },
              { id: "certifications", label: "Certifications", icon: FaCertificate },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-300/30"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tab.icon size={18} />
                <span className="hidden md:inline">{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* ============ EDUCATION SECTION (OVERVIEW) ============ */}
        {activeTab === "overview" && (
          <motion.div
            key="overview"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 p-1">
              <div className="bg-white rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <FaGraduationCap className="text-blue-600" />
                  Education
                </h2>

                <motion.div
                  className="space-y-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {resumeData.education.map((edu, idx) => (
                    <motion.div
                      key={edu.id}
                      variants={itemVariants}
                      className="border-l-4 border-blue-500 pl-6 py-2"
                    >
                      <h3 className="text-xl font-semibold text-blue-600 mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-gray-800 text-lg font-medium mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-3">
                        <span className="text-gray-600">
                          📍 {edu.location}
                        </span>
                        <span className="text-gray-600 font-semibold">
                          {edu.period}
                        </span>
                      </div>
                      <div className="inline-block px-4 py-2 bg-blue-100 rounded-lg">
                        <span className="text-blue-700 font-semibold">
                          CGPA: {edu.cgpa}
                        </span>
                      </div>

                      {/* Highlights */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, i) => (
                          <motion.span
                            key={i}
                            variants={badgeVariants}
                            className="px-3 py-1 bg-cyan-600/20 text-cyan-300 rounded-full text-sm font-medium"
                          >
                            ✓ {highlight}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ============ EXPERIENCE SECTION ============ */}
        {activeTab === "experience" && (
          <motion.div
            key="experience"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            <div className="rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 p-1">
              <div className="bg-white rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <FaBriefcase className="text-purple-600" />
                  Experience & Projects
                </h2>

                <motion.div
                  className="space-y-8"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {resumeData.experience.map((exp, idx) => (
                    <motion.div
                      key={exp.id}
                      variants={itemVariants}
                      className="border-2 border-purple-200 rounded-xl p-6 hover:border-purple-400 transition-all"
                    >
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-purple-700 mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-gray-600 font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-sm text-gray-600 whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-gray-700 mb-4">{exp.description}</p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            variants={badgeVariants}
                            className="px-3 py-1 bg-purple-600/30 text-purple-200 rounded-full text-xs font-semibold"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      {/* Achievements */}
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            className="flex gap-3 text-gray-300"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <span className="text-purple-400 font-bold">
                              ▸
                            </span>
                            <span>{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ============ SKILLS SECTION ============ */}
        {activeTab === "skills" && (
          <motion.div
            key="skills"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            <div className="rounded-2xl bg-gradient-to-r from-green-600 to-emerald-600 p-1">
              <div className="bg-white rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <FaCode className="text-green-600" />
                  Technical Skills
                </h2>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {Object.entries(resumeData.skills).map(
                    ([category, skills]) => (
                      <motion.div
                        key={category}
                        variants={itemVariants}
                        className="group"
                      >
                        <h3 className="text-lg font-bold text-green-700 mb-4">
                          {category}
                        </h3>

                        <div className="flex flex-wrap gap-3">
                          {skills.map((skill, idx) => (
                            <motion.span
                              key={idx}
                              variants={badgeVariants}
                              className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold border border-green-300 hover:border-green-500 transition-all cursor-pointer"
                              whileHover={{ scale: 1.1, y: -3 }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    )
                  )}
                </motion.div>

                {/* Skill Proficiency Summary */}
                <motion.div
                  variants={itemVariants}
                  className="mt-12 pt-8 border-t border-green-500/30"
                >
                  <h3 className="text-lg font-bold text-green-300 mb-6">
                    Core Competencies
                  </h3>
                  <div className="space-y-4">
                    {[
                      { skill: "Database Management", level: 90 },
                      { skill: "Full-Stack Development", level: 85 },
                      { skill: "Problem Solving", level: 95 },
                      { skill: "UI/UX Implementation", level: 80 },
                    ].map((comp, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300 font-medium">
                            {comp.skill}
                          </span>
                          <span className="text-green-400 font-bold">
                            {comp.level}%
                          </span>
                        </div>
                        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-green-600 to-emerald-600"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${comp.level}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ============ CERTIFICATIONS SECTION ============ */}
        {activeTab === "certifications" && (
          <motion.div
            key="certifications"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Main Certifications Header & Grid */}
            <div className="rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 p-1">
              <div className="bg-white rounded-2xl p-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                      <FaCertificate className="text-amber-600" />
                      Professional Certifications
                    </h2>
                    <p className="text-gray-600">Verified credentials and professional achievements</p>
                  </div>
                  <div className="hidden md:flex items-center gap-4">
                    <div className="p-4 bg-amber-100 rounded-xl border border-amber-300">
                      <p className="text-sm text-gray-600 mb-1">Total Certificates</p>
                      <p className="text-2xl font-bold text-amber-700">{getTotalCertifications()}</p>
                    </div>
                    <div className="p-4 bg-green-100 rounded-xl border border-green-300">
                      <p className="text-sm text-gray-600 mb-1">Verified</p>
                      <p className="text-2xl font-bold text-green-700">{getVerifiedCount()}</p>
                    </div>
                  </div>
                </div>

                {/* Certifications Grid */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {certificationsData.map((cert, idx) => (
                    <motion.div
                      key={cert.id}
                      variants={itemVariants}
                      className="group rounded-2xl p-6 bg-amber-50 border border-amber-200 hover:border-amber-400 transition-all hover:shadow-lg hover:shadow-amber-200/40"
                      whileHover={{ y: -8, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Icon and Badge */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-amber-600 to-orange-500 rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:shadow-xl transition-all text-white">
                          {cert.icon}
                        </div>
                        {cert.verified && (
                          <motion.div
                            className="flex items-center gap-1 px-3 py-1 bg-green-100 rounded-full border border-green-300"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: idx * 0.1 + 0.3 }}
                          >
                            <FaStar className="text-green-600 text-xs" />
                            <span className="text-green-700 text-xs font-semibold">
                              Verified
                            </span>
                          </motion.div>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors line-clamp-2">
                        {cert.title}
                      </h3>

                      {/* Issuer */}
                      <p className="text-gray-600 text-sm mb-3">
                        <span className="font-semibold">Issued by:</span> {cert.issuer}
                      </p>

                      {/* Category Badge and Date */}
                      <div className="flex items-center justify-between pt-4 border-t border-amber-200">
                        <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold border border-amber-300">
                          {cert.category}
                        </span>
                        <span className="text-xs text-gray-600">
                          📅 {cert.date}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Certifications by Category Section */}
                <motion.div
                  variants={itemVariants}
                  className="mt-12 pt-8 border-t border-amber-200"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Certifications by Category
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {getAllCategories().map((category, idx) => {
                      const categoryCerts = certificationsData.filter(c => c.category === category);
                      return (
                        <motion.div
                          key={category}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="p-4 bg-amber-50 rounded-xl border border-amber-200 hover:border-amber-400 transition-all"
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-semibold text-amber-800">
                              {category}
                            </h4>
                            <span className="px-3 py-1 bg-amber-600/30 text-amber-300 rounded-full text-xs font-bold">
                              {categoryCerts.length}
                            </span>
                          </div>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {categoryCerts.map(cert => (
                              <span key={cert.id} className="text-xs text-gray-400 px-2 py-1 bg-slate-800/50 rounded">
                                {cert.title.split(' ')[0]}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Statistics Summary */}
                <motion.div
                  variants={itemVariants}
                  className="mt-10 p-6 rounded-xl bg-amber-50 border border-amber-200"
                >
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Total Certificates</p>
                      <p className="text-2xl font-bold text-amber-700">{getTotalCertifications()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Verified</p>
                      <p className="text-2xl font-bold text-green-700">{getVerifiedCount()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Categories</p>
                      <p className="text-2xl font-bold text-blue-700">{getAllCategories().length}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}

        {/* ============ CTA SECTION ============ */}
        <motion.div
          variants={itemVariants}
          className="mt-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 p-1"
        >
          <div className="bg-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Let's collaborate on exciting projects and create something
              amazing!
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-4">
              <motion.button
                onClick={handleDownloadResume}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-300/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center gap-2">
                  <FaDownload size={18} />
                  Download Resume
                </span>
              </motion.button>

              <motion.a
                href="mailto:2300033544cse1@gmail.com"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center gap-2">
                  <FaEnvelope size={18} />
                  Get in Touch
                </span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Resume;