import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa"
import { HiArrowUp } from "react-icons/hi"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid rgba(148,163,184,0.06)",
        padding: "50px 0"
      }}
    >
      <div className="section-container">
        {/* Back to top */}
        <motion.div
          className="flex justify-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#"
            whileHover={{ y: -4, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-xl"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(148,163,184,0.1)",
              color: "#64748b",
              textDecoration: "none",
              transition: "color 0.2s, border-color 0.2s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#22d3ee"
              e.currentTarget.style.borderColor = "rgba(34,211,238,0.3)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#64748b"
              e.currentTarget.style.borderColor = "rgba(148,163,184,0.1)"
            }}
          >
            <HiArrowUp size={20} />
          </motion.a>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <motion.p
            className="text-sm"
            style={{ color: "#64748b" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {year} LuisDev — Hecho con{" "}
            <motion.span
              style={{ display: "inline-block" }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaHeart
                size={13}
                style={{ display: "inline", color: "#ef4444", verticalAlign: "middle" }}
              />
            </motion.span>{" "}
            usando React + Tailwind
          </motion.p>

          <motion.div
            className="flex gap-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {[
              { icon: <FaGithub size={19} />, href: "https://github.com/Luisparrach22" },
              { icon: <FaLinkedin size={19} />, href: "https://linkedin.com" }
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.15 }}
                style={{
                  color: "#475569",
                  textDecoration: "none",
                  transition: "color 0.2s"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#22d3ee" }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#475569" }}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
