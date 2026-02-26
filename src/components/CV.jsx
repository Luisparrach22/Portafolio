import { motion } from "framer-motion"
import cvFile from "../assets/CV Luis Parra.pdf.pdf"

export default function CV() {
  return (
    <section id="cv" className="text-center py-36">
      <h2 className="text-4xl font-bold mb-10">Curriculum</h2>

      <motion.a
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        href={cvFile}
        download="CV Luis Parra.pdf"
        className="bg-gradient-to-r from-cyan-400 to-blue-500 px-12 py-5 rounded-2xl text-black font-bold"
      >
        Descargar CV
      </motion.a>
    </section>
  )
}