import { motion } from "framer-motion"
import cvFile from "../assets/CV Luis Parra.pdf.pdf"

export default function CV() {
  return (
    <section id="cv" className="text-center py-36">
      <h2 className="text-4xl font-bold mb-10">Curriculum</h2>

      <motion.button
        className="bg-gray-600 px-12 py-5 rounded-2xl text-white font-bold cursor-not-allowed opacity-70"
        whileHover={{ scale: 1.05 }}
        disabled
      >
        Descargar CV (Mantenimiento)
      </motion.button>
    </section>
  )
}