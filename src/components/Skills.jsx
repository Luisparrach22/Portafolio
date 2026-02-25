import { motion } from "framer-motion"
import { skills } from "../data/skills.jsx"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
}

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        position: "relative",
        zIndex: 1,
        padding: "140px 0",
        background: "linear-gradient(180deg, rgba(15,23,42,0.4) 0%, rgba(2,6,23,1) 100%)"
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
          Tecnologías
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Herramientas y tecnologías con las que trabajo día a día
        </motion.p>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="glass-card p-8 sm:p-10 text-center cursor-default"
            >
              <motion.div
                className="mb-5 flex justify-center"
                whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-widest">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}