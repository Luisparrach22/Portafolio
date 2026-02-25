import { motion } from "framer-motion"
import { FaCode, FaServer, FaMobileAlt, FaRocket } from "react-icons/fa"

const highlights = [
  {
    icon: <FaCode size={28} />,
    title: "Frontend",
    description: "Desarrollo interfaces modernas y responsivas con React, HTML5, CSS3 y JavaScript."
  },
  {
    icon: <FaServer size={28} />,
    title: "Backend",
    description: "Gestión de bases de datos MySQL y lógica del servidor con Java y APIs REST."
  },
  {
    icon: <FaMobileAlt size={28} />,
    title: "Apps Móviles",
    description: "Desarrollo de aplicaciones nativas para Android e iOS con Kotlin y React Native."
  },
  {
    icon: <FaRocket size={28} />,
    title: "Optimización",
    description: "Código limpio, rendimiento optimizado y mejores prácticas en cada proyecto."
  }
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, x: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

const textVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export default function About() {
  return (
    <section id="about" style={{ position: "relative", zIndex: 1, padding: "140px 0" }}>
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Sobre Mí
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Conociéndome un poco más como desarrollador
        </motion.p>

        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* Text side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <p
              className="text-lg mb-7"
              style={{ color: "#cbd5e1", lineHeight: 1.9 }}
            >
              Soy un desarrollador apasionado por crear soluciones digitales
              que combinan funcionalidad y diseño. Me especializo en desarrollo web
              y aplicaciones móviles para <strong style={{ color: "#22d3ee" }}>Android</strong> e{" "}
              <strong style={{ color: "#818cf8" }}>iOS</strong>.
            </p>
            <p
              className="text-lg mb-10"
              style={{ color: "#94a3b8", lineHeight: 1.9 }}
            >
              Con experiencia en frontend, backend y desarrollo móvil, busco siempre
              escribir código limpio, eficiente y mantenible. Mi objetivo es
              seguir creciendo profesionalmente y aportar valor en cada proyecto.
            </p>

            <motion.div
              className="flex flex-wrap gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05 } }
              }}
            >
              {["React", "JavaScript", "Java", "Kotlin", "React Native", "MySQL", "Tailwind CSS", "Git", "Android", "iOS"].map((tech) => (
                <motion.span
                  key={tech}
                  className="tech-tag"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Cards side */}
          <motion.div
            className="grid gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ x: 8, scale: 1.02 }}
                className="glass-card p-7 flex items-start gap-6"
                style={{ cursor: "default" }}
              >
                <motion.div
                  className="p-4 rounded-xl shrink-0"
                  style={{
                    background: "rgba(34,211,238,0.08)",
                    color: "#22d3ee"
                  }}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  {item.icon}
                </motion.div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.7 }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
