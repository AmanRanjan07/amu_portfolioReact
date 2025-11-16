import React from 'react';
import { motion } from 'framer-motion';
import { FaCuttlefish, FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt, FaLock, FaReact, FaCode, FaRocket, FaDatabase, FaTools } from "react-icons/fa";
import { SiDjango, SiMongodb, SiSpring, SiDocker, SiGit, SiFigma } from "react-icons/si";

const skillsData = [
  {
    category: "Programming Languages",
    icon: <FaCode />,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    skills: [
      { name: "C", icon: <FaCuttlefish />, level: 90 },
      { name: "C++", icon: <FaCuttlefish />, level: 88 },
      { name: "Java", icon: <FaJava />, level: 88 },
      { name: "Python", icon: <FaPython />, level: 92 },
    ]
  },
  {
    category: "Frontend Development",
    icon: <FaReact />,
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30",
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, level: 95 },
      { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
      { name: "JavaScript", icon: <FaJs />, level: 85 },
      { name: "React", icon: <FaReact />, level: 85 },
    ]
  },
  {
    category: "Backend & Frameworks",
    icon: <FaRocket />,
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    skills: [
      { name: "Django", icon: <SiDjango />, level: 80 },
      { name: "Spring Boot", icon: <SiSpring />, level: 82 },
      { name: "Node.js", icon: <FaJs />, level: 83 },
      { name: "RESTful APIs", icon: <FaRocket />, level: 87 },
    ]
  },
  {
    category: "Databases & Data",
    icon: <FaDatabase />,
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, level: 78 },
      { name: "MySQL", icon: <FaDatabase />, level: 85 },
      { name: "Firebase", icon: <FaDatabase />, level: 80 },
      { name: "SQL", icon: <FaDatabase />, level: 88 },
    ]
  },
  {
    category: "Tools & Technologies",
    icon: <FaTools />,
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    skills: [
      { name: "Git", icon: <SiGit />, level: 90 },
      { name: "Docker", icon: <SiDocker />, level: 75 },
      { name: "Figma", icon: <SiFigma />, level: 80 },
      { name: "VS Code", icon: <FaCode />, level: 92 },
    ]
  },
  {
    category: "Specializations",
    icon: <FaLock />,
    color: "from-red-500 to-pink-600",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
    skills: [
      { name: "DSA", icon: <FaCode />, level: 90 },
      { name: "Cybersecurity", icon: <FaLock />, level: 75 },
      { name: "Problem Solving", icon: <FaCode />, level: 92 },
      { name: "Web Security", icon: <FaLock />, level: 78 },
    ]
  },
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

export default function Skills() {
  return (
    <section id="skills" className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
      <div className="absolute top-40 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-40 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-pink-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6 mb-20">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-glow"
            >
              <FaCode className="text-2xl text-white" />
            </motion.div>
            
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading mb-4">
                Skills & <span className="gradient-text">Technologies</span>
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A comprehensive overview of my technical expertise across various domains. I'm proficient in modern development tools and frameworks.
              </p>
            </div>
          </motion.div>

          {/* Skills Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group rounded-2xl p-8 border transition-all duration-300 bg-gradient-to-br from-muted/40 to-muted/20 hover:from-muted/60 hover:to-muted/40 ${category.borderColor} hover:border-primary/50`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${category.color} rounded-xl text-white shadow-lg group-hover:shadow-glow transition-shadow`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold font-heading group-hover:text-primary transition-colors">
                    {category.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white text-sm`}>
                            {skill.icon}
                          </div>
                          <span className="font-semibold text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-xs font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full h-2 bg-muted/60 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3, duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info Section */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6 pt-12 border-t border-border/30"
          >
            {[
              {
                icon: "🎓",
                title: "Continuous Learning",
                description: "Always staying updated with the latest technologies and industry best practices"
              },
              {
                icon: "💡",
                title: "Problem Solver",
                description: "Passionate about solving complex technical challenges with innovative solutions"
              },
              {
                icon: "🚀",
                title: "Fast Learner",
                description: "Quick to adopt new technologies and frameworks to deliver better solutions"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-muted/40 to-muted/20 border border-border/30 hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-bold font-heading mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="mt-12 pt-12 border-t border-border/30"
          >
            <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-primary/20 rounded-3xl p-8 md:p-12 text-center space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold font-heading">
                Ready to collaborate?
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Let's work together to bring your ideas to life using the latest technologies and best practices.
              </p>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 btn-primary px-8 py-4 rounded-xl text-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 25px 35px -5px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <FaRocket />
                Start a Project
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
