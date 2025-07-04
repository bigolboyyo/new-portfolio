import React from "react"
import { motion } from "framer-motion"

// Customize size and colors here
export const RetroSpinner = ({ size = 48, color = "#00FFAA" }) => {
    const bars = new Array(8).fill(null)

    return (
        <div className="relative mb-4 ml-2" style={{ width: size, height: size }}>
            {bars.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-1 h-4 origin-center rounded-sm"
                    style={{
                        backgroundColor: color,
                        transform: `rotate(${i * 45}deg) translateY(-${size / 2.5}px)`,
                    }}
                    animate={{
                        opacity: [0.2, 1, 0.2],
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: "easeInOut",
                        delay: i * 0.1,
                    }}
                />
            ))}
        </div>
    )
}
export default RetroSpinner