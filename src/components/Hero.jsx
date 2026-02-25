import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { HiArrowDown } from "react-icons/hi"
import { useState, useEffect } from "react"

const roles = [
  "Desarrollador Web Full Stack",
  "Desarrollador Android & iOS",
  "Apasionado del código limpio"
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2200)
    } else if (isDeleting && text === "") {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    } else {
      timeout = setTimeout(() => {
        setText(
          isDeleting
            ? current.substring(0, text.length - 1)
            : current.substring(0, text.length + 1)
        )
      }, isDeleting ? 40 : 80)
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  return (
    <section
      className="relative flex flex-col items-center justify-center text-center px-8"
      style={{ minHeight: "100vh", paddingTop: "120px", paddingBottom: "80px", position: "relative", zIndex: 1 }}
    >
      {/* Decorative gradient orbs */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle, rgba(34,211,238,0.07) 0%, rgba(129,140,248,0.04) 40%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: -1
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "10%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(129,140,248,0.06) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: -1,
          animation: "float 8s ease-in-out infinite"
        }}
      />

      {/* Typing role badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
        style={{ marginBottom: "60px" }}
      >
        <span
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide"
          style={{
            background: "rgba(34,211,238,0.08)",
            color: "#22d3ee",
            border: "1px solid rgba(34,211,238,0.2)",
            minWidth: "320px",
            minHeight: "42px",
            textAlign: "center"
          }}
        >
          <span>{text}</span>
          <span
            style={{
              display: "inline-block",
              width: "2px",
              height: "16px",
              background: "#22d3ee",
              marginLeft: "4px",
              verticalAlign: "middle",
              animation: "pulse-glow 1s infinite",
              flexShrink: 0
            }}
          />
        </span>
      </motion.div>

      {/* Main heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8"
        style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Hola, soy{" "}
        </motion.span>
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          style={{
            background: "linear-gradient(135deg, #22d3ee 0%, #818cf8 50%, #c084fc 100%)",
            backgroundSize: "200% 200%",
            animation: "shimmer 4s ease infinite",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Luis
        </motion.span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg sm:text-xl md:text-2xl max-w-3xl mb-14"
        style={{ color: "#94a3b8", lineHeight: 1.8 }}
      >
        Construyo aplicaciones web y móviles modernas, funcionales y con un diseño que marca la diferencia.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-wrap gap-6 justify-center items-center mb-16"
      >
        <motion.a
          href="#projects"
          className="btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Ver Proyectos
        </motion.a>
        <motion.a
          href="#contact"
          className="btn-secondary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Contacto
        </motion.a>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="flex gap-8"
        style={{ marginTop: "40px", marginBottom: "60px" }}
      >
        {[
          { icon: <FaGithub size={26} />, href: "https://github.com/Luisparrach22", label: "GitHub" },
          { icon: <FaLinkedin size={26} />, href: "https://linkedin.com", label: "LinkedIn" },
          { icon: <FaInstagram size={26} />, href: "https://instagram.com", label: "Instagram" }
        ].map((social) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4, scale: 1.15 }}
            className="p-3 rounded-xl transition-colors"
            style={{
              color: "#64748b",
              textDecoration: "none",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(148,163,184,0.1)"
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
            {social.icon}
          </motion.a>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12"
        style={{ textDecoration: "none", color: "#475569" }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
          <HiArrowDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  )
}