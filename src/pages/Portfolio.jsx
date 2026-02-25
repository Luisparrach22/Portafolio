import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Particles from "../components/Particles"

export default function Portfolio() {
  return (
    <div style={{ background: "#020617", color: "#e2e8f0", minHeight: "100vh", position: "relative" }}>
      <Particles />
      <Navbar />
      <main>
        <Hero />
        <hr className="gradient-divider" />
        <About />
        <Skills />
        <hr className="gradient-divider" />
        <Projects />
        <hr className="gradient-divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}