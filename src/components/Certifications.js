import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCertificate,
  FaStar,
  FaExternalLinkAlt,
  FaFilter,
} from "react-icons/fa";
import { certificationsData, getTotalCertifications, getVerifiedCount, getAllCategories } from "../data/certificationsData";

const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState("all");

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

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Filter certifications by category
  const filteredCertifications = activeCategory === "all" 
    ? certificationsData 
    : certificationsData.filter(cert => cert.category === activeCategory);

  const categories = [
    { id: "all", label: "All Certificates", count: getTotalCertifications() },
    ...getAllCategories().map(cat => ({
      id: cat,
      label: cat,
      count: certificationsData.filter(c => c.category === cat).length
    }))
  ];

  return (
    <section id="certifications" className="w-full min-h-screen bg-white py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
      <div className="absolute top-20 right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl" />
      
      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* ============ HEADER SECTION ============ */}
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-6 px-4 py-2 bg-amber-100 rounded-full border border-amber-300">
            <FaCertificate className="text-amber-600" />
            <span className="text-amber-700 font-semibold">Professional Credentials</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            My <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">Certifications</span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Verified professional certifications and achievements showcasing my expertise in cloud services, automation, and modern technologies.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <motion.div
              variants={itemVariants}
              className="p-4 bg-amber-50 rounded-xl border border-amber-200 hover:border-amber-400 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-gray-600 text-sm mb-2">Total Certificates</p>
              <p className="text-3xl font-bold text-amber-600">{getTotalCertifications()}</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-4 bg-green-50 rounded-xl border border-green-200 hover:border-green-400 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-gray-600 text-sm mb-2">Verified</p>
              <p className="text-3xl font-bold text-green-600">{getVerifiedCount()}</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-4 bg-blue-50 rounded-xl border border-blue-200 hover:border-blue-400 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-gray-600 text-sm mb-2">Categories</p>
              <p className="text-3xl font-bold text-blue-600">{getAllCategories().length}</p>
            </motion.div>
          </div>
        </motion.div>

        {/* ============ FILTER SECTION ============ */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <FaFilter className="text-amber-600" />
            <span className="text-gray-900 font-semibold">Filter by Category</span>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-amber-600 to-orange-500 text-white shadow-lg shadow-amber-300/30"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat.label}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-bold ${
                  activeCategory === cat.id ? "bg-white/20" : "bg-gray-200"
                }`}>
                  {cat.count}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* ============ CERTIFICATIONS GRID ============ */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredCertifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              className="group rounded-2xl p-6 bg-amber-50 border border-amber-200 hover:border-amber-400 transition-all hover:shadow-lg hover:shadow-amber-200/40 cursor-pointer"
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Icon and Badge */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-500 rounded-xl flex items-center justify-center text-3xl shadow-lg group-hover:shadow-xl transition-all text-white">
                  {cert.icon}
                </div>
                {cert.verified && (
                  <motion.div
                    className="flex items-center gap-1 px-3 py-1.5 bg-green-100 rounded-full border border-green-300"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: idx * 0.1 + 0.3 }}
                  >
                    <FaStar className="text-green-600 text-xs" />
                    <span className="text-green-700 text-xs font-semibold">
                      Verified
                    </span>
                  </motion.div>
                )}
              </div>

              {/* Title and Issuer */}
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors line-clamp-2">
                {cert.title}
              </h3>
              <p className="text-gray-600 text-sm mb-1">
                <span className="font-semibold text-gray-700">Issued by:</span> {cert.issuer}
              </p>

              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1.5 bg-amber-100 text-amber-700 rounded-full text-xs font-semibold border border-amber-300">
                  {cert.category}
                </span>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-amber-200 to-orange-200 mb-4" />

              {/* Date and View Button */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600 font-medium">
                  📅 {cert.date}
                </span>
                <motion.a
                  href={cert.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-500 text-white text-xs font-semibold rounded-lg hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View
                  <FaExternalLinkAlt size={12} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ============ CATEGORIES BREAKDOWN ============ */}
        <motion.div
          variants={itemVariants}
          className="rounded-2xl bg-gradient-to-r from-amber-600 to-orange-500 p-1"
        >
          <div className="bg-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Certifications by Category
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getAllCategories().map((category, idx) => {
                const categoryCerts = certificationsData.filter(c => c.category === category);
                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 bg-amber-50 rounded-xl border border-amber-200 hover:border-amber-400 transition-all"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-amber-900">
                        {category}
                      </h3>
                      <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-bold">
                        {categoryCerts.length}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {categoryCerts.map(cert => (
                        <div key={cert.id} className="flex items-center gap-2">
                          <span className="text-amber-600">✓</span>
                          <span className="text-sm text-gray-700">{cert.title}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ============ CTA SECTION ============ */}
        <motion.div
          variants={itemVariants}
          className="mt-16 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-500 p-1"
        >
          <div className="bg-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Interested in My Qualifications?
            </h2>
            <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
              All my certifications are verified and up-to-date. Click on any certificate to view the credentials directly.
            </p>

            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Certifications;
