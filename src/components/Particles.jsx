import { useEffect, useRef, useCallback } from "react"

export default function Particles() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const particlesRef = useRef([])
  const animRef = useRef(null)

  const createParticles = useCallback((width, height) => {
    const particles = []
    const count = Math.min(Math.floor((width * height) / 12000), 120)
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseX: Math.random() * width,
        baseY: Math.random() * height,
        size: Math.random() * 2.5 + 0.8,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.5 + 0.2,
        color: i % 3 === 0 ? "129,140,248" : "34,211,238" // indigo or cyan
      })
    }
    return particles
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particlesRef.current = createParticles(canvas.width, canvas.height)
    }

    const handleMouse = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    resize()
    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", handleMouse)
    window.addEventListener("mouseleave", handleMouseLeave)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const mouse = mouseRef.current
      const particles = particlesRef.current
      const interactionRadius = 180

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Move particle
        p.baseX += p.speedX
        p.baseY += p.speedY

        // Bounce off edges
        if (p.baseX < 0 || p.baseX > canvas.width) p.speedX *= -1
        if (p.baseY < 0 || p.baseY > canvas.height) p.speedY *= -1

        // Mouse interaction - attract toward cursor
        const dx = mouse.x - p.baseX
        const dy = mouse.y - p.baseY
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < interactionRadius) {
          const force = (interactionRadius - dist) / interactionRadius
          const angle = Math.atan2(dy, dx)
          p.x = p.baseX + Math.cos(angle) * force * 50
          p.y = p.baseY + Math.sin(angle) * force * 50
        } else {
          p.x += (p.baseX - p.x) * 0.08
          p.y += (p.baseY - p.y) * 0.08
        }

        // Draw particle with glow
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`
        ctx.fill()

        // Draw connections between nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const d = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2)
          if (d < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(34,211,238, ${0.08 * (1 - d / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }

        // Connect to cursor if close
        if (dist < interactionRadius) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(34,211,238, ${0.15 * (1 - dist / interactionRadius)})`
          ctx.lineWidth = 0.8
          ctx.stroke()
        }
      }

      // Mouse glow
      if (mouse.x > 0 && mouse.y > 0) {
        const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 100)
        gradient.addColorStop(0, "rgba(34,211,238, 0.06)")
        gradient.addColorStop(1, "rgba(34,211,238, 0)")
        ctx.fillStyle = gradient
        ctx.fillRect(mouse.x - 100, mouse.y - 100, 200, 200)
      }

      animRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouse)
      window.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animRef.current)
    }
  }, [createParticles])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none"
      }}
    />
  )
}