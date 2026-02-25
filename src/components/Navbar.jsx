import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { label: "Sobre mí", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled
          ? "top-0 w-full glass py-5 shadow-lg shadow-black/30 border-b border-white/10"
          : "top-6 w-[95%] max-w-[1400px] glass py-7 rounded-3xl border border-white/5"
      }`}
    >
      <div className="section-container flex justify-between items-center w-full max-w-[1400px] px-12 md:px-20 mx-auto">
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="text-3xl font-black tracking-tighter"
          style={{ textDecoration: "none" }}
        >
          <span style={{ color: "#22d3ee" }}>Luis</span>
          <span style={{ color: "#94a3b8" }}>Dev</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12 px-2">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              whileHover={{ scale: 1.1, color: "#22d3ee" }}
              className="text-[13px] font-bold tracking-[0.2em] uppercase transition-all"
              style={{ color: "#94a3b8", textDecoration: "none" }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <motion.a
          href="/cv.pdf"
          download
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:inline-flex items-center justify-center rounded-full font-black uppercase transition-all shadow-[0_0_25px_rgba(34,211,238,0.25)] hover:shadow-[0_0_40px_rgba(34,211,238,0.45)] whitespace-nowrap"
          style={{
            background: "linear-gradient(135deg, #22d3ee, #818cf8)",
            color: "#020617",
            textDecoration: "none",
            fontSize: "12px",
            letterSpacing: "0.2em",
            padding: "15px 45px",
            minWidth: "210px",
            lineHeight: "1"
          }}
        >
          Descargar CV
        </motion.a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-slate-300"
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-slate-300"
            transition={{ duration: 0.2 }}
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-slate-300"
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-white/5"
          >
            <div className="section-container py-12 flex flex-col gap-8 items-center">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-slate-400 hover:text-cyan-400 transition-colors py-2 text-xl font-bold uppercase tracking-widest"
                  style={{ textDecoration: "none" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="/cv.pdf"
                download
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 }}
                className="btn-primary w-full max-w-sm text-center mt-4"
              >
                Descargar CV
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}