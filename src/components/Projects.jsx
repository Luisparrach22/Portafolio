import { motion } from "framer-motion"
import { projects } from "../data/projects"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ position: "relative", zIndex: 1, padding: "140px 0" }}
    >
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Proyectos
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Una selección de mis trabajos más recientes
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="glass-card overflow-hidden group"
              style={{ cursor: "pointer" }}
              onClick={() => project.link && project.link !== "#" && window.open(project.link, "_blank")}
            >
              {/* Project image/preview */}
              <div
                className="relative overflow-hidden"
                style={{ height: "220px" }}
              >
                <motion.div
                  className="w-full h-full flex items-center justify-center"
                  style={{
                    background: project.gradient || "linear-gradient(135deg, #0f172a, #1e293b)"
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.span
                    className="text-6xl"
                    whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.emoji}
                  </motion.span>
                </motion.div>

                {/* Overlay on hover */}
                <div
                  className="absolute inset-0 flex items-center justify-center gap-5 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ background: "rgba(2,6,23,0.85)", backdropFilter: "blur(4px)" }}
                >
                  {project.github && project.github !== "#" && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 rounded-xl transition-colors"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        color: "#e2e8f0",
                        textDecoration: "none",
                        border: "1px solid rgba(255,255,255,0.1)"
                      }}
                    >
                      <FaGithub size={22} />
                    </motion.a>
                  )}
                  {project.link && project.link !== "#" && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 rounded-xl transition-colors"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        color: "#e2e8f0",
                        textDecoration: "none",
                        border: "1px solid rgba(255,255,255,0.1)"
                      }}
                    >
                      <FaExternalLinkAlt size={20} />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p
                  className="mb-5 text-sm"
                  style={{ color: "#94a3b8", lineHeight: 1.7 }}
                >
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}