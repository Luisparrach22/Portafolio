import { image } from "framer-motion/client"
import laPreviaImg from "../assets/images/la_previa.png"
import queenLingerieImg from "../assets/images/queenlingerie.png"

export const projects = [
  {
    title: "La Previa",
    description: "Plataforma web de juegos interactivos con temática de terror. Sistema de puntuación, leaderboard global y panel de administración.",
    tech: ["HTML", "CSS", "JavaScript", "Python","MySQL"],
    image: laPreviaImg,
    gradient: "linear-gradient(135deg, #1a0a2e, #3d1f5c)",
    link: "https://la-previa-maldita.vercel.app/",
    github: "https://github.com/Luisparrach22/La_Previa_Maldita"
  },
  {
    title: "Queen Lingerie",
    description: "E-commerce premium de pijamas y lencería. Cuenta con panel de administración, diseño responsive y sistema de filtros optimizado.",
    tech: ["React", "Vite", "Tailwind", "Node.js", "MySQL"],
    image: queenLingerieImg,
    gradient: "linear-gradient(135deg, #E4A3C3, #b87c9a)",
    link: "https://queen-lingerie.vercel.app/",
    github: "https://github.com/Luisparrach22"
  }
]