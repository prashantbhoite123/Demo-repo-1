import React, { useState } from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { SkillData } from '@/data'

interface SkillItem {
  name: string
  Image: string
  width: number
  height: number
  color?: string
}

const TechnicalTools = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)

  // ⬇️ Increased radius for more spacing between items
  const radius = 230
  const skillCount = SkillData.length

  const containerVariants: Variants = {
    animate: {
      rotate: 360,
      transition: { duration: 50, repeat: Infinity, ease: "linear" },
    },
  }

  const antiRotateVariants: Variants = {
    animate: {
      rotate: -360,
      transition: { duration: 50, repeat: Infinity, ease: "linear" },
    },
  }

  const pulseVariants: Variants = {
    animate: {
      boxShadow: [
        "0 0 0 0 rgba(251, 191, 36, 0.4)",
        "0 0 0 20px rgba(251, 191, 36, 0)",
      ],
      transition: { duration: 2, repeat: Infinity },
    },
  }

  const floatVariants: Variants = {
    animate: {
      y: [0, -15, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  }

  const particleVariants: Variants = {
    animate: (custom: number) => ({
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      x: Math.cos((custom / 12) * 2 * Math.PI) * 50,
      y: Math.sin((custom / 12) * 2 * Math.PI) * 50,
      transition: { duration: 1.5, repeat: Infinity, delay: custom * 0.1 },
    }),
  }

  const getSkillColor = (skill: SkillItem): string => {
    return skill.color || "#fbbf24"
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4 py-20 overflow-hidden">

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20"
          animate={{ x: [0, 50, -50, 0], y: [0, 50, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          style={{ top: "10%", left: "-10%" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-cyan-600 rounded-full blur-3xl opacity-20"
          animate={{ x: [0, -50, 50, 0], y: [0, -50, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          style={{ bottom: "10%", right: "-10%" }}
        />
      </div>

      <div className="w-full max-w-5xl relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-black 
             bg-gradient-to-r from-white via-sky-400 to-blue-600 
             bg-clip-text text-transparent mb-6 drop-shadow-[0_0_20px_#00bfff]"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            TECHNICAL TOOLS
          </motion.h2>


          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            I&apos;ve mastered cutting-edge technologies to build scalable, efficient applications.
            Each skill represents hours of dedication and real-world implementation.
          </motion.p>
        </motion.div>

        {/* Main Circular Skills Container */}
        <div className="relative w-full flex justify-center">
          <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center">

            {/* Animated SVG Circles */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
              <motion.circle
                cx="200" cy="200" r="100"
                fill="none" stroke="url(#grad1)" strokeWidth="2" opacity="0.4"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "200px 200px" }}
              />
              <motion.circle
                cx="200" cy="200" r="130"
                fill="none" stroke="url(#grad2)" strokeWidth="1.5" opacity="0.3"
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "200px 200px" }}
              />
              <motion.circle
                cx="200" cy="200" r="160"
                fill="none" stroke="url(#grad1)" strokeWidth="1" opacity="0.2"
                animate={{ rotate: 360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "200px 200px" }}
              />
              <motion.circle
                cx="200" cy="200" r="180"
                fill="none" stroke="url(#grad2)" strokeWidth="1" opacity="0.15"
                animate={{ rotate: -360 }}
                transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "200px 200px" }}
              />
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="50%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#fbbf24" />
                </linearGradient>
              </defs>
            </svg>

            {/* Center Circle */}
            <motion.div className="absolute z-20" variants={floatVariants} animate="animate">
              <motion.div
                variants={pulseVariants}
                animate="animate"
                className="w-40 h-40 rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-red-600 flex items-center justify-center shadow-2xl border-4 border-amber-200 relative"
              >
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-transparent border-t-amber-200 border-r-orange-300"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <div className="text-center relative z-10">
                  <motion.div
                    className="text-white font-black text-4xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    12+
                  </motion.div>
                  <div className="text-slate-900 text-sm font-bold mt-1">Technologies</div>
                </div>
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-amber-300 rounded-full"
                    custom={i}
                    variants={particleVariants}
                    animate="animate"
                    style={{
                      left: "50%", top: "50%", marginLeft: "-4px", marginTop: "-4px",
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Rotating Skills */}
            <motion.div className="absolute w-full h-full" variants={containerVariants} animate="animate">
              {SkillData.map((skill: SkillItem, index: number) => {
                const angle = (index / skillCount) * 2 * Math.PI - Math.PI / 2
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius
                const isHovered = hoveredSkill === index
                const skillColor = getSkillColor(skill)

                return (
                  <motion.div
                    key={index}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ x, y }}
                    onMouseEnter={() => setHoveredSkill(index)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <motion.div variants={antiRotateVariants} animate="animate" className="group cursor-pointer">
                      <motion.div
                        whileHover={{ scale: 1.35, filter: "brightness(1.3)" }}
                        whileTap={{ scale: 0.85 }}
                        className="w-24 h-24 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center shadow-xl border-3 border-slate-600 hover:border-transparent transition-all duration-300 group-hover:shadow-2xl relative overflow-hidden"
                        style={{
                          boxShadow: isHovered
                            ? `0 0 30px 10px ${skillColor}40, 0 0 60px 20px ${skillColor}20`
                            : undefined,
                        }}
                      >
                        <motion.div
                          className="absolute inset-0 rounded-full"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          style={{
                            background: `radial-gradient(circle, ${skillColor}20 0%, ${skillColor}05 100%)`,
                          }}
                        />
                        <motion.img
                          src={skill.Image}
                          alt={skill.name}
                          width={skill.width * 0.65}
                          height={skill.height * 0.65}
                          className="object-contain filter drop-shadow-lg relative z-10"
                          animate={isHovered ? { rotateY: 360 } : { rotateY: 0 }}
                          transition={{ duration: 0.6 }}
                        />
                      </motion.div>

                      {/* Tooltip */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        whileHover={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full mt-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-slate-900 to-slate-800 px-5 py-3 rounded-xl text-sm font-bold text-white whitespace-nowrap border-2 border-amber-400 shadow-2xl pointer-events-none z-50"
                        style={{
                          boxShadow: `0 0 20px ${skillColor}60`,
                        }}
                      >
                        <div className="text-amber-400">{skill.name}</div>
                      </motion.div>

                      {/* Hover Ring */}
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1.6, opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 rounded-full border-2 border-amber-400"
                      />
                    </motion.div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <a href="#projects">
            <motion.button
              whileHover={{ scale: 1.08, boxShadow: "0 20px 40px rgba(251, 191, 36, 0.4)" }}
              whileTap={{ scale: 0.92 }}
              className="px-10 py-4 bg-gradient-to-r from-amber-400 via-orange-400 to-red-500 text-slate-900 font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-red-500 to-amber-400 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">View My Work</span>
            </motion.button>
          </a>
        </motion.div>

        {/* Decorative Borders */}
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 border border-amber-400/10 rounded-full pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-40 h-40 border border-cyan-400/10 rounded-full pointer-events-none"
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  )
}

export default TechnicalTools