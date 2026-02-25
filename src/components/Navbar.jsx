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

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    
    setTimeout(() => {
      const target = href === "body" ? document.body : document.querySelector(href)
      if (target) {
        const offset = 100 
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        })
      }
    }, 10)
  }

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
      <div className="section-container flex justify-between items-center w-full max-w-[1400px] px-6 md:px-20 mx-auto">
        <motion.a
          href="#"
          onClick={(e) => handleNavClick(e, "body")}
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
              onClick={(e) => handleNavClick(e, link.href)}
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

        {/* Mobile Toggle - Circular Minimalist Design */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
          className="md:hidden flex items-center justify-center w-12 h-12 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-md relative"
          style={{ cursor: "pointer", border: "1px solid rgba(34,211,238,0.2)" }}
        >
          <div className="flex flex-col gap-1.5 items-end">
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 4, width: "22px" } : { rotate: 0, y: 0, width: "22px" }}
              className="block h-0.5 bg-cyan-400 rounded-full"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -4, width: "22px" } : { rotate: 0, y: 0, width: "14px" }}
              className="block h-0.5 bg-cyan-400 rounded-full"
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.button>
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
            <div className="w-full flex flex-col items-center justify-center py-12 gap-8 px-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-slate-400 hover:text-cyan-400 transition-colors py-2 text-xl font-bold uppercase tracking-[0.2em] text-center"
                  style={{ textDecoration: "none" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="/cv.pdf"
                download
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
                style={{
                  padding: "16px 45px",
                  fontSize: "12px",
                  minWidth: "220px",
                  marginTop: "1.5rem",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
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