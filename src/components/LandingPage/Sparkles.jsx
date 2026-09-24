import { useMemo } from "react"
import { motion } from "framer-motion"

const ELEMENTS = ['🎈', '🎉', '✨', '🎀', '🛒', '💜', '🎂', '⭐', '🎊', '💫', '🌸', '🎁', '🍫', '👑', '🌟', '🎶', '🌙', '💕', '🎠' , '🍟' , '🍔' , '🍪' , '🍭' , '🍬' , '🪅']

export default function Sparkles() {
  const elements = useMemo(() => {
    return Array.from({ length: 35 }, (_, i) => ({
      id: i,
      emoji: ELEMENTS[i % ELEMENTS.length],
      x: Math.random() * 90 + 5,
      y: Math.random() * 90 + 5,
      size: Math.random() * 20 + 16,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 3,
    }))
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map(el => (
        <motion.div
          key={el.id}
          className="absolute select-none"
          style={{ left: `${el.x}%`, top: `${el.y}%`, fontSize: `${el.size}px` }}
          animate={{ y: [-10, 10, -10], opacity: [0.4, 1, 0.4], rotate: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: el.duration, delay: el.delay, ease: "easeInOut" }}
        >
          {el.emoji}
        </motion.div>
      ))}
    </div>
  )
}