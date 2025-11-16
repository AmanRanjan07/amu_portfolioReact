import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  const formVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission (replace with actual backend call)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Reset form and show success message
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setIsLoading(false);

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: "Email",
      value: "2300033544cse1@gmail.com",
      href: "mailto:2300033544cse1@gmail.com",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: <FaPhone className="text-2xl" />,
      label: "Phone",
      value: "+91 9334935195",
      href: "tel:+919334935195",
      color: "from-green-600 to-green-700",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      label: "Location",
      value: "Sonpur, India",
      href: "#",
      color: "from-purple-600 to-purple-700",
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="text-2xl" />,
      label: "GitHub",
      href: "https://github.com/ranjanaman007",
      color: "from-gray-700 to-gray-800",
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aman-ranjan-477534291/",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: <FaTwitter className="text-2xl" />,
      label: "Twitter",
      href: "https://twitter.com/yourusername",
      color: "from-sky-500 to-sky-600",
    },
  ];

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-white py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
      <div className="absolute top-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />

      <motion.div
        className="max-w-5xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* ============ HEADER SECTION ============ */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg mb-6">
            <FaPaperPlane className="text-2xl text-white" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Let's Get <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">In Touch</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'd love to hear from you! Whether you have a question, project proposal, or just want to say hello, feel free to reach out. I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* ============ CONTACT INFO SECTION ============ */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1 space-y-6"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="block group"
                >
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-gray-300 transition-all">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl text-white mb-4 group-hover:shadow-lg transition-shadow`}>
                      {info.icon}
                    </div>

                    <p className="text-sm text-gray-600 font-medium mb-2">
                      {info.label}
                    </p>
                    <p className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-8 border-t border-gray-200"
            >
              <p className="text-sm font-semibold text-gray-900 mb-4">
                Connect With Me
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 bg-gradient-to-r ${social.color} text-white rounded-xl shadow-md hover:shadow-lg transition-all`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-4 bg-blue-50 border border-blue-200 rounded-2xl"
            >
              <p className="text-sm text-blue-900">
                <span className="font-semibold">Response Time:</span> Usually within 24 hours
              </p>
            </motion.div>
          </motion.div>

          {/* ============ CONTACT FORM SECTION ============ */}
          <motion.div
            variants={formVariants}
            className="lg:col-span-2"
          >
            <div className="rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 p-8 md:p-12 shadow-xl">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <label className="block text-sm font-semibold text-gray-900 mb-3">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-900 placeholder-gray-500"
                    />
                  </motion.div>

                  {/* Email Input */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                  >
                    <label className="block text-sm font-semibold text-gray-900 mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-900 placeholder-gray-500"
                    />
                  </motion.div>

                  {/* Subject Input */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-sm font-semibold text-gray-900 mb-3">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Inquiry"
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-900 placeholder-gray-500"
                    />
                  </motion.div>

                  {/* Message Textarea */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 }}
                  >
                    <label className="block text-sm font-semibold text-gray-900 mb-3">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project or inquiry..."
                      rows="6"
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-gray-900 placeholder-gray-500 resize-none"
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="text-lg" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.div>

                  {/* Form Disclaimer */}
                  <p className="text-xs text-gray-600 text-center">
                    I'll respond to your message as soon as possible. Thank you for reaching out!
                  </p>
                </form>
              ) : (
                /* Success Message */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.6 }}
                  >
                    <FaCheckCircle className="text-6xl text-green-500 mx-auto" />
                  </motion.div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 max-w-sm mx-auto">
                      Thank you for reaching out. I'll review your message and get back to you shortly.
                    </p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="pt-4"
                  >
                    <p className="text-sm text-gray-500">
                      Expected response time: 24 hours
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* ============ CTA SECTION ============ */}
        <motion.div
          variants={itemVariants}
          className="mt-20 text-center"
        >
          <div className="rounded-3xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Prefer a direct conversation?
            </h3>
            <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
              Feel free to reach out via email or phone, or connect with me on social media. I'm always excited to discuss new opportunities and collaborations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:2300033544cse1@gmail.com"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:shadow-lg transition-all inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope />
                Send Email
              </motion.a>

              <motion.a
                href="tel:+919334935195"
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhone />
                Call Me
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
