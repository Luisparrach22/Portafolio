import { motion } from "framer-motion"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import { HiLocationMarker } from "react-icons/hi"

const contactInfo = [
  {
    icon: <FaEnvelope size={24} />,
    label: "Email",
    value: "parra.chaconluis006@gmail.com",
    href: "mailto:parra.chaconluis006@gmail.com"
  },
  {
    icon: <FaGithub size={24} />,
    label: "GitHub",
    value: "Luisparrach22",
    href: "https://github.com/Luisparrach22"
  },
  {
    icon: <FaLinkedin size={24} />,
    label: "LinkedIn",
    value: "Luis Parra",
    href: "https://www.linkedin.com/in/luisparrach22/"
  },
  {
    icon: <HiLocationMarker size={24} />,
    label: "Ubicación",
    value: "España",
    href: null
  }
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
}

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        zIndex: 1,
        padding: "140px 0",
        background: "linear-gradient(180deg, rgba(2,6,23,1) 0%, rgba(15,23,42,0.4) 100%)"
      }}
    >
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contacto
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </motion.p>

        <motion.div
          className="grid sm:grid-cols-2 gap-6 w-full max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {contactInfo.map((item, i) => {
            const CardContent = (
              <>
                <motion.div
                  className="p-4 rounded-xl shrink-0"
                  style={{ background: "rgba(34,211,238,0.08)", color: "#22d3ee" }}
                  whileHover={{ rotate: 8, scale: 1.1 }}
                >
                  {item.icon}
                </motion.div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ color: "#64748b" }}>
                    {item.label}
                  </p>
                  <p className="text-base font-medium text-white group-hover:text-cyan-400 transition-colors">
                    {item.value}
                  </p>
                </div>
              </>
            )

            return (
              <motion.div key={i} variants={itemVariants}>
                {item.href ? (
                  <motion.a
                    href={item.href}
                    target={item.href.startsWith("mailto") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="glass-card p-7 flex items-center gap-5 group block"
                    style={{ textDecoration: "none", display: "flex" }}
                  >
                    {CardContent}
                  </motion.a>
                ) : (
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="glass-card p-7 flex items-center gap-5"
                    style={{ cursor: "default" }}
                  >
                    {CardContent}
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="mailto:parra.chaconluis006@gmail.com"
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Envíame un mensaje
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
