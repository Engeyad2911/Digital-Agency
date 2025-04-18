"use client"
import { motion } from "framer-motion"
import { useLanguage } from "./language-provider"

export function AnimatedCharacter1({ className }: { className?: string }) {
  const { isRtl } = useLanguage()

  return (
    <motion.div
      className={`absolute z-10 ${className}`}
      initial={{ y: 0 }}
      animate={{
        y: [0, -15, 0],
        rotate: isRtl ? [0, -3, 0] : [0, 3, 0],
      }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        duration: 4,
        ease: "easeInOut",
      }}
    >
      <svg width="120" height="180" viewBox="0 0 120 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Head */}
        <motion.circle
          cx="60"
          cy="50"
          r="40"
          fill="#00CC6A"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
        />

        {/* Eyes */}
        <motion.circle
          cx="45"
          cy="40"
          r="5"
          fill="white"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 0.1, 1] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, repeatDelay: 2 }}
        />
        <motion.circle
          cx="75"
          cy="40"
          r="5"
          fill="white"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 0.1, 1] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, repeatDelay: 2 }}
        />

        {/* Smile */}
        <motion.path
          d="M45 60 Q60 75 75 60"
          stroke="white"
          strokeWidth="3"
          fill="none"
          initial={{ d: "M45 60 Q60 75 75 60" }}
          animate={{ d: ["M45 60 Q60 75 75 60", "M45 65 Q60 80 75 65", "M45 60 Q60 75 75 60"] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }}
        />

        {/* Body */}
        <motion.rect
          x="40"
          y="90"
          width="40"
          height="60"
          rx="20"
          fill="#00CC6A"
          initial={{ y: 90 }}
          animate={{ y: [90, 95, 90] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Arms */}
        <motion.path
          d="M40 100 C20 110 10 130 15 150"
          stroke="#00CC6A"
          strokeWidth="10"
          strokeLinecap="round"
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, -5, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
          style={{ transformOrigin: "40px 100px" }}
        />
        <motion.path
          d="M80 100 C100 110 110 130 105 150"
          stroke="#00CC6A"
          strokeWidth="10"
          strokeLinecap="round"
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 5, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3.5, ease: "easeInOut" }}
          style={{ transformOrigin: "80px 100px" }}
        />

        {/* Legs */}
        <motion.path
          d="M50 150 L40 180"
          stroke="#00CC6A"
          strokeWidth="10"
          strokeLinecap="round"
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 5, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }}
          style={{ transformOrigin: "50px 150px" }}
        />
        <motion.path
          d="M70 150 L80 180"
          stroke="#00CC6A"
          strokeWidth="10"
          strokeLinecap="round"
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, -5, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut", delay: 0.5 }}
          style={{ transformOrigin: "70px 150px" }}
        />
      </svg>
    </motion.div>
  )
}

export function AnimatedCharacter2({ className }: { className?: string }) {
  const { isRtl } = useLanguage()

  return (
    <motion.div
      className={`absolute z-10 ${className}`}
      initial={{ y: 0 }}
      animate={{
        y: [0, -20, 0],
        rotate: isRtl ? [0, 5, 0] : [0, -5, 0],
      }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        duration: 5,
        ease: "easeInOut",
      }}
    >
      <svg width="140" height="200" viewBox="0 0 140 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Head */}
        <motion.rect
          x="40"
          y="20"
          width="60"
          height="60"
          rx="30"
          fill="#00FF85"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
        />

        {/* Eyes */}
        <motion.circle
          cx="55"
          cy="45"
          r="6"
          fill="black"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 0.1, 1] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, repeatDelay: 3 }}
        />
        <motion.circle
          cx="85"
          cy="45"
          r="6"
          fill="black"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 0.1, 1] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, repeatDelay: 3 }}
        />

        {/* Mouth */}
        <motion.rect
          x="60"
          y="65"
          width="20"
          height="5"
          rx="2.5"
          fill="black"
          initial={{ width: 20 }}
          animate={{ width: [20, 30, 20] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
        />

        {/* Antenna */}
        <motion.path
          d="M70 20 L70 5 C70 5 60 0 70 0 C80 0 70 5 70 5"
          stroke="#00FF85"
          strokeWidth="4"
          fill="#00FF85"
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
          style={{ transformOrigin: "70px 20px" }}
        />

        {/* Body */}
        <motion.path
          d="M40 80 L100 80 L90 140 L50 140 Z"
          fill="#00FF85"
          initial={{ y: 0 }}
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Arms */}
        <motion.path
          d="M40 90 C20 100 15 120 25 140"
          stroke="#00FF85"
          strokeWidth="12"
          strokeLinecap="round"
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, -10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }}
          style={{ transformOrigin: "40px 90px" }}
        />
        <motion.path
          d="M100 90 C120 100 125 120 115 140"
          stroke="#00FF85"
          strokeWidth="12"
          strokeLinecap="round"
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3.5, ease: "easeInOut" }}
          style={{ transformOrigin: "100px 90px" }}
        />

        {/* Legs */}
        <motion.path
          d="M60 140 L50 190"
          stroke="#00FF85"
          strokeWidth="12"
          strokeLinecap="round"
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 5, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }}
          style={{ transformOrigin: "60px 140px" }}
        />
        <motion.path
          d="M80 140 L90 190"
          stroke="#00FF85"
          strokeWidth="12"
          strokeLinecap="round"
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, -5, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut", delay: 0.5 }}
          style={{ transformOrigin: "80px 140px" }}
        />
      </svg>
    </motion.div>
  )
}
