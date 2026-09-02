import { useMemo } from "react"
import { motion } from "framer-motion"

export default function Sparkles() {

    const sparkles = useMemo(() => {
        const colors = ['#B58DB6', '#9A98B5', '#FFF5F5']

        return Array.from({ length: 100 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 8 + 2,
            duration: Math.random() * 4 + 2,
            delay: Math.random() * 3,
            color: colors[Math.floor(Math.random() * colors.length)]
        }))
    }, [])

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {sparkles.map(sparkle => (
                <motion.div
                    key={sparkle.id}
                    style={{
                        left: `${sparkle.x}%`,
                        top: `${sparkle.y}%`,
                        width: `${sparkle.size}px`,
                        height: `${sparkle.size}px`,
                        backgroundColor: sparkle.color
                    }}
                    animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
                    transition={{ repeat: Infinity, duration: sparkle.duration, delay: sparkle.delay }}
                    className="absolute rounded-full bg-[#B58DB6]  opacity: 0.6"
                />
            ))}
        </div>
    )

}