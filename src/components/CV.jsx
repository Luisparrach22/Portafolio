import { motion } from "framer-motion"
import cvFile from "../assets/CV Luis Parra.pdf.pdf"

export default function CV() {
  return (
    <section id="cv" className="text-center py-36">
      <h2 className="text-4xl font-bold mb-10">Curriculum</h2>

      <motion.a
        href={cvFile}
        download="CV Luis Parra.pdf"
        className="inline-flex items-center justify-center bg-cyan-500 px-12 py-5 rounded-2xl text-white font-bold transition-all hover:bg-cyan-400"
        whileHover={{ scale: 1.05 }}
        style={{ textDecoration: "none" }}
      >
        Descargar CV
      </motion.a>
    </section>
  )
}