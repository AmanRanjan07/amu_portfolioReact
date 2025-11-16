import React from "react";
import { motion } from "framer-motion";
import { FaCuttlefish, FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt, FaLock, FaReact, FaDownload, FaEye, FaUser, FaGraduationCap, FaCode, FaHeart, FaRocket, FaLightbulb, FaAward } from "react-icons/fa";
import { SiDjango, SiMongodb, SiSpring } from "react-icons/si";
import { resume } from "../data/dummyContent";

const skills = [
  { icon: <FaCuttlefish />, label: "C", color: "from-blue-500 to-blue-600", level: 90 },
  { icon: <FaJava />, label: "Java", color: "from-orange-500 to-orange-600", level: 88 },
  { icon: <FaPython />, label: "Python", color: "from-yellow-500 to-yellow-600", level: 92 },
  { icon: <FaJs />, label: "JavaScript", color: "from-yellow-400 to-yellow-500", level: 85 },
  { icon: <FaHtml5 />, label: "HTML5", color: "from-orange-500 to-orange-600", level: 95 },
  { icon: <FaCss3Alt />, label: "CSS3", color: "from-blue-500 to-blue-600", level: 90 },
  { icon: <FaReact />, label: "React", color: "from-cyan-500 to-cyan-600", level: 85 },
  { icon: <SiDjango />, label: "Django", color: "from-green-600 to-green-700", level: 80 },
  { icon: <SiSpring />, label: "Spring Boot", color: "from-green-500 to-green-600", level: 82 },
  { icon: <SiMongodb />, label: "MongoDB", color: "from-green-600 to-green-700", level: 78 },
  { icon: <FaLock />, label: "Cybersecurity", color: "from-red-500 to-red-600", level: 75 },
];

const stats = [
  { icon: <FaCode />, label: "Projects Completed", value: "50+", color: "from-blue-500 to-cyan-500" },
  { icon: <FaUser />, label: "Happy Clients", value: "25+", color: "from-purple-500 to-pink-500" },
  { icon: <FaGraduationCap />, label: "Years Experience", value: "2+", color: "from-green-500 to-emerald-500" },
  { icon: <FaAward />, label: "Certifications", value: "8+", color: "from-orange-500 to-yellow-500" },
];

const achievements = [
  {
    icon: <FaRocket />,
    title: "Open Source Contributor",
    description: "Active contributor to various open-source projects and communities",
    color: "from-blue-500 to-purple-500"
  },
  {
    icon: <FaLightbulb />,
    title: "Problem Solver",
    description: "Passionate about solving complex technical challenges with innovative solutions",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: <FaHeart />,
    title: "Community Builder",
    description: "Building and nurturing developer communities through knowledge sharing",
    color: "from-pink-500 to-red-500"
  }
];

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

export default function About() {
  const [showResume, setShowResume] = React.useState(false);
  const resumeUrl = resume?.url || null;

  React.useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setShowResume(false);
    }
    if (showResume) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showResume]);

  return (
    <section id="about" className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
      <div className="absolute top-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-pink-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-20"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-glow"
            >
              <span className="text-3xl">👋</span>
            </motion.div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading mb-6">
              <span className="gradient-text">About Me</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover my journey, experience, and the passion behind my work in creating amazing digital solutions.
            </p>
          </motion.div>

          {/* About Section */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Profile Image */}
              <motion.div 
                className="flex justify-center lg:justify-start order-2 lg:order-1"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl scale-110" />
                  <motion.img
                    src={require("../assets/DSC05867-Photoroom (1).jpg")}
                    alt="Aman Ranjan profile"
                    className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-3xl object-cover border-4 border-background shadow-2xl"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                  
                  {/* Floating elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    ✓ Available
                  </motion.div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div 
                className="space-y-8 order-1 lg:order-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="space-y-3">
                  <h3 className="text-3xl lg:text-4xl font-bold font-heading">
                    Hi, I'm <span className="gradient-text">Aman Ranjan</span>
                  </h3>
                  <p className="text-xl font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Computer Science Engineer & Full-Stack Developer
                  </p>
                </div>

                <div className="space-y-5 text-muted-foreground leading-relaxed text-base">
                  <p className="border-l-4 border-primary pl-4 py-2 bg-muted/30 rounded-r-lg">
                    Passionate about software development, problem-solving, and open-source contributions. I specialize in creating intelligent, user-friendly web solutions that make a real difference.
                  </p>
                  <p>
                    With expertise in modern web technologies including React, Node.js, Python, and cloud platforms, I transform complex problems into simple, beautiful designs that users love.
                  </p>
                  <p>
                    When I'm not coding, you'll find me contributing to open-source projects, writing technical blogs, or exploring the latest advancements in AI/ML technologies.
                  </p>
                </div>

                {/* Stats Mini */}
                <div className="grid grid-cols-3 gap-4 py-4 border-y border-border/50">
                  <div className="text-center">
                    <p className="text-2xl font-bold gradient-text">50+</p>
                    <p className="text-xs text-muted-foreground">Projects</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold gradient-text">2+</p>
                    <p className="text-xs text-muted-foreground">Years Exp</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold gradient-text">8+</p>
                    <p className="text-xs text-muted-foreground">Certs</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <motion.button
                    onClick={() => setShowResume(true)}
                    className="btn-primary flex items-center justify-center gap-2 px-6 py-3 rounded-xl"
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaEye className="text-lg" />
                    <span>View Resume</span>
                  </motion.button>
                  <motion.a
                    href="#contact"
                    className="btn-secondary flex items-center justify-center gap-2 px-6 py-3 rounded-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaRocket className="text-lg" />
                    <span>Let's Connect</span>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Achievements Section */}
          <motion.div variants={itemVariants} className="space-y-12 pt-12 border-t border-border/30">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4">
                <FaAward className="text-2xl text-white" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold font-heading">
                Key <span className="gradient-text">Achievements</span>
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Highlights of my professional journey and notable accomplishments
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="card-hover p-8 text-center group bg-gradient-to-br from-muted/40 to-muted/20 hover:from-muted/60 hover:to-muted/40 border border-border/30 hover:border-primary/30 transition-all duration-300 rounded-2xl"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl mb-6 text-white shadow-lg group-hover:shadow-glow transition-shadow`}>
                    {achievement.icon}
                  </div>
                  <h4 className="text-xl font-bold font-heading mb-3 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-12 border-t border-border/30">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="card-hover p-6 text-center group bg-gradient-to-br from-muted/40 to-muted/20 hover:from-muted/60 hover:to-muted/40 border border-border/30 hover:border-primary/30 transition-all duration-300 rounded-2xl"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl mb-4 text-white shadow-lg`}>
                  {stat.icon}
                </div>
                <h4 className="text-2xl md:text-3xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">
                  {stat.value}
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 pt-12 border-t border-border/30"
          >
            <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-primary/20 rounded-3xl p-8 md:p-12 text-center space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold font-heading">
                Ready to work together?
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Let's create something amazing together. Whether you need a website, web application, or technical consultation, I'm here to help.
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 btn-primary px-8 py-4 rounded-xl text-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 25px 35px -5px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <FaRocket />
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Resume Modal */}
      {showResume && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowResume(false)}
            aria-hidden="true"
          />

          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] bg-card rounded-xl shadow-large overflow-hidden"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="text-xl font-semibold font-heading">Resume — Aman Ranjan</h3>
              <div className="flex items-center gap-3">
                <motion.a
                  href="https://drive.google.com/uc?export=download&id=1xWxa6ILp8-i2aMHeuyzHXZNsyJd46SM1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm px-4 py-2 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload />
                  Download PDF
                </motion.a>
                <motion.button
                  onClick={() => setShowResume(false)}
                  className="btn-ghost text-sm px-4 py-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
              </div>
            </div>

            <div className="h-[70vh] bg-muted/20">
              <iframe
                src="https://drive.google.com/file/d/1xWxa6ILp8-i2aMHeuyzHXZNsyJd46SM1/preview"
                title="Aman Ranjan Resume"
                className="w-full h-full border-0"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
