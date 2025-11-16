import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaEye,
  FaHeart,
  FaFire,
  FaCode,
  FaArrowRight,
} from "react-icons/fa";
import { projectsData, projectCategories, getProjectsByCategory } from "../data/projectsData";

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

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);

  // Get projects based on selected category
  const filteredProjects = useMemo(() => {
    return getProjectsByCategory(activeCategory);
  }, [activeCategory]);

  // Get category count
  const getCategoryCount = (categoryId) => {
    if (categoryId === "all") return projectsData.length;
    return projectsData.filter(
      (p) => p.category.toLowerCase() === categoryId.replace("-", " ").toLowerCase()
    ).length;
  };

  return (
    <section
      id="projects"
      className="w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-muted/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
      <div className="absolute top-40 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-40 left-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-pink-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
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
                Featured <span className="gradient-text">Projects</span>
              </h2>

              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Explore my latest work showcasing expertise in full-stack development, modern UI/UX design, and scalable solutions.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center justify-center gap-8 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">{projectsData.length}</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">
                  {projectsData.reduce((sum, p) => sum + parseInt(p.stats.views), 0).toLocaleString()}+
                </p>
                <p className="text-sm text-muted-foreground">Total Views</p>
              </div>
            </div>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div variants={itemVariants} className="flex justify-center overflow-x-auto pb-4">
            <div className="inline-flex gap-3 bg-muted/50 backdrop-blur-sm rounded-2xl p-2 border border-border/50">
              {projectCategories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground shadow-soft"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.label}
                  <span
                    className={`px-2 py-1 rounded-lg text-xs font-bold ${
                      activeCategory === category.id
                        ? "bg-primary-foreground/20"
                        : "bg-muted"
                    }`}
                  >
                    {getCategoryCount(category.id)}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ delay: index * 0.05 }}
                  onHoverStart={() => setHoveredCard(project.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="h-full"
                >
                  <div className="group relative h-full rounded-2xl overflow-hidden bg-gradient-to-br from-muted/40 to-muted/20 border border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col">
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 z-10 flex items-center gap-1 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        <FaFire className="text-xs" />
                        Featured
                      </div>
                    )}

                    {/* Image Container */}
                    <div className="relative h-48 md:h-56 overflow-hidden bg-muted">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                      {/* Year Badge */}
                      <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                        {project.year}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      {/* Category Tag */}
                      <div className="inline-flex items-center gap-2 mb-3 w-fit">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>

                      {/* Title and Description */}
                      <div className="mb-4 space-y-3">
                        <h3 className="text-xl lg:text-2xl font-bold font-heading group-hover:text-primary transition-colors line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {project.shortDescription}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="mb-4 space-y-3">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <motion.div
                              key={tech.name}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.05 }}
                              className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold bg-gradient-to-r ${tech.color} text-white shadow-sm`}
                            >
                              {tech.name}
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between py-3 border-t border-border/30 mb-4">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <FaEye className="text-xs" />
                            <span className="font-semibold">{project.stats.views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FaHeart className="text-xs text-red-500" />
                            <span className="font-semibold">{project.stats.likes}</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <motion.a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg group/btn"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaExternalLinkAlt className="text-sm" />
                          <span>View Demo</span>
                        </motion.a>

                        {project.sourceLink && (
                          <motion.a
                            href={project.sourceLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center px-4 py-3 bg-muted/50 hover:bg-muted text-foreground font-semibold rounded-xl transition-all duration-300 border border-border/50 hover:border-primary/50"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            title="View Source Code"
                          >
                            <FaGithub className="text-lg" />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 rounded-2xl"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              variants={itemVariants}
              className="text-center py-12"
            >
              <p className="text-muted-foreground text-lg">
                No projects found in this category.
              </p>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-16 border-t border-border/30"
          >
            <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-primary/20 rounded-3xl p-8 md:p-12 text-center space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold font-heading">
                Want to see more?
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                I'm constantly working on new projects and improving existing ones. Check back soon for updates, or let's collaborate on something amazing!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 btn-primary px-8 py-4 rounded-xl text-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0 25px 35px -5px rgba(59, 130, 246, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Let's Collaborate</span>
                  <FaArrowRight className="text-sm" />
                </motion.a>
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-secondary px-8 py-4 rounded-xl text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="text-lg" />
                  <span>View GitHub</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
