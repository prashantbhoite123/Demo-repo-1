'use client'

import { motion } from 'framer-motion'
import { Music, Book, Bike, Gamepad, Code, Tv } from 'lucide-react'
import { useState } from 'react'

const hobbies = [
    { name: 'Coding', icon: Code, color: '#00d4ff', bg: 'from-cyan-500 to-cyan-600' },
    { name: 'Reading', icon: Book, color: '#0099ff', bg: 'from-blue-500 to-blue-600' },
    { name: 'Bike Riding', icon: Bike, color: '#00bfff', bg: 'from-sky-500 to-sky-600' },
    { name: 'Cooking', icon: Gamepad, color: '#00a8e8', bg: 'from-indigo-500 to-indigo-600' },
    { name: 'Listening to Music', icon: Music, color: '#00d4ff', bg: 'from-purple-500 to-purple-600' },
    { name: 'Watching Cricket', icon: Tv, color: '#0099ff', bg: 'from-blue-600 to-blue-700' },
]

export default function HobbiesSection() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const [clickedIndex, setClickedIndex] = useState<number | null>(null)

    const radius = 200
    const angleSlice = 360 / hobbies.length

    const handleCardClick = (index: number) => {
        setClickedIndex(clickedIndex === index ? null : index)
    }

    return (
        <motion.div
            className="lg:col-span-1 w-full flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            {/* Title */}
            <div className="mb-12 text-center">
                <motion.h3
                    className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-white via-sky-400 to-blue-600 bg-clip-text text-transparent"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    My Hobbies
                </motion.h3>
                <motion.div
                    className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto"
                    animate={{ scaleX: [0.8, 1.2, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </div>

            {/* Hexagonal Wheel Container */}
            <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center">
                {/* Pulsing background orb */}
                <motion.div
                    className="absolute inset-0 rounded-full blur-3xl opacity-20"
                    style={{
                        background: 'radial-gradient(circle, #00d4ff, #0099ff)',
                    }}
                    animate={{
                        scale: [0.8, 1.1, 0.8],
                        opacity: [0.15, 0.35, 0.15],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Center Circle */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                >
                    {/* Rotating background */}
                    <motion.div
                        className="absolute inset-0"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    >
                        {/* Center Hexagon Background */}
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            style={{
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)',
                            }}
                        >
                            <motion.div
                                className="w-32 h-32 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border-2 flex items-center justify-center relative overflow-hidden"
                                style={{ borderColor: '#00d4ff' }}
                                animate={{
                                    boxShadow: [
                                        '0 0 20px rgba(0, 212, 255, 0.3), inset 0 0 20px rgba(0, 212, 255, 0.1)',
                                        '0 0 40px rgba(0, 212, 255, 0.6), inset 0 0 30px rgba(0, 212, 255, 0.2)',
                                        '0 0 20px rgba(0, 212, 255, 0.3), inset 0 0 20px rgba(0, 212, 255, 0.1)',
                                    ],
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                {/* Animated gradient overlay */}
                                <motion.div
                                    className="absolute inset-0 rounded-full opacity-30"
                                    style={{
                                        background: 'conic-gradient(from 0deg, #00d4ff, #0099ff, #00bfff, #00d4ff)',
                                    }}
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                                />

                                <div className="text-center relative z-10">
                                    <motion.p
                                        className="text-white text-sm font-semibold"
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        My
                                    </motion.p>
                                    <motion.p
                                        className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text font-black text-lg"
                                        animate={{
                                            textShadow: [
                                                '0 0 10px rgba(0, 212, 255, 0.5)',
                                                '0 0 20px rgba(0, 212, 255, 0.8)',
                                                '0 0 10px rgba(0, 212, 255, 0.5)',
                                            ],
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        HOBBIES
                                    </motion.p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Hexagon Items */}
                {hobbies.map((hobby, index) => {
                    const angle = (angleSlice * index - 90) * (Math.PI / 180)
                    const x = radius * Math.cos(angle)
                    const y = radius * Math.sin(angle)
                    const isHovered = hoveredIndex === index
                    const isClicked = clickedIndex === index

                    return (
                        <motion.div
                            key={`${hobby.name}-${index}`}
                            className="absolute"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                            style={{
                                left: '50%',
                                top: '50%',
                                x: x,
                                y: y,
                                marginLeft: -50,
                                marginTop: -50,
                            }}
                        >
                            <motion.div
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                                onClick={() => handleCardClick(index)}
                                animate={{
                                    scale: isClicked ? 1.25 : isHovered ? 1.15 : 1,
                                    rotate: isClicked ? [0, 5, -5, 0] : isHovered ? 10 : 0,
                                    zIndex: isClicked ? 50 : 10,
                                }}
                                transition={{
                                    duration: isClicked ? 0.6 : 0.3,
                                    type: 'spring',
                                    stiffness: 100,
                                    damping: 10,
                                }}
                                className="relative cursor-pointer group"
                            >
                                {/* Animated rotating border */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                                    style={{
                                        background: `conic-gradient(from 0deg, ${hobby.color}, #0066ff, ${hobby.color})`,
                                    }}
                                    animate={{
                                        rotate: isHovered || isClicked ? 360 : 0,
                                        opacity: isHovered || isClicked ? 1 : 0,
                                    }}
                                    transition={{
                                        rotate: {
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: 'linear',
                                        },
                                        opacity: { duration: 0.3 },
                                    }}
                                />

                                {/* Hexagon Background with gradient */}
                                <motion.div
                                    className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${hobby.bg} shadow-lg relative overflow-hidden`}
                                    animate={{
                                        y: isHovered || isClicked ? -10 : 0,
                                        boxShadow: isClicked
                                            ? [
                                                `0 20px 50px ${hobby.color}80`,
                                                `0 30px 70px ${hobby.color}60`,
                                                `0 20px 50px ${hobby.color}80`,
                                            ]
                                            : isHovered
                                                ? `0 20px 50px ${hobby.color}60`
                                                : '0 10px 25px rgba(0, 0, 0, 0.3)',
                                    }}
                                    transition={{
                                        duration: isClicked ? 1.5 : 0.3,
                                        repeat: isClicked ? Infinity : 0,
                                    }}
                                >
                                    {/* Animated border glow on hover */}
                                    <motion.div
                                        className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{ borderColor: hobby.color }}
                                        animate={{
                                            boxShadow:
                                                isHovered || isClicked
                                                    ? `inset 0 0 20px ${hobby.color}40, 0 0 30px ${hobby.color}60`
                                                    : 'none',
                                        }}
                                    />

                                    {/* Glow background */}
                                    <motion.div
                                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                                        style={{
                                            background: `radial-gradient(circle, ${hobby.color}30, transparent)`,
                                        }}
                                        animate={{
                                            opacity: isHovered || isClicked ? 1 : 0,
                                            scale: isClicked ? [1, 1.1, 1] : 1,
                                        }}
                                        transition={{
                                            opacity: { duration: 0.3 },
                                            scale: isClicked
                                                ? { duration: 0.8, repeat: Infinity }
                                                : undefined,
                                        }}
                                    />

                                    {/* Content */}
                                    <div className="relative w-full h-full flex flex-col items-center justify-center gap-3 p-4">
                                        {/* Icon with animation */}
                                        <motion.div
                                            animate={{
                                                y: isHovered || isClicked ? -8 : 0,
                                                scale: isClicked ? [1, 1.3, 1] : isHovered ? 1.2 : 1,
                                                rotateZ: isClicked ? [0, 10, -10, 0] : 0,
                                            }}
                                            transition={{
                                                duration: isClicked ? 0.8 : 0.3,
                                                repeat: isClicked ? Infinity : 0,
                                            }}
                                            className="relative"
                                        >
                                            {/* Icon glow */}
                                            <motion.div
                                                className="absolute inset-0 rounded-full blur-lg opacity-0"
                                                style={{ backgroundColor: hobby.color }}
                                                animate={{
                                                    opacity: isHovered || isClicked ? 0.6 : 0,
                                                    scale: isClicked ? [1, 1.2, 1] : 1,
                                                }}
                                                transition={{
                                                    duration: isClicked ? 0.8 : 0.3,
                                                    repeat: isClicked ? Infinity : 0,
                                                }}
                                            />
                                            <hobby.icon className="w-10 h-10 text-white relative z-10" />
                                        </motion.div>

                                        {/* Text with animation */}
                                        <motion.p
                                            className="text-white font-bold text-center text-sm leading-tight"
                                            animate={{
                                                color: isHovered || isClicked ? hobby.color : '#ffffff',
                                                textShadow:
                                                    isHovered || isClicked
                                                        ? `0 0 10px ${hobby.color}80`
                                                        : 'none',
                                                scale: isClicked ? [1, 1.1, 1] : 1,
                                            }}
                                            transition={{
                                                duration: isClicked ? 0.8 : 0.3,
                                                repeat: isClicked ? Infinity : 0,
                                            }}
                                        >
                                            {hobby.name}
                                        </motion.p>

                                        {/* Animated particles on hover and click */}
                                        {(isHovered || isClicked) && (
                                            <>
                                                {[0, 1, 2, ...(isClicked ? [3, 4] : [])].map((particle) => (
                                                    <motion.div
                                                        key={particle}
                                                        className="absolute w-2 h-2 rounded-full"
                                                        style={{ backgroundColor: hobby.color }}
                                                        initial={{
                                                            x: 0,
                                                            y: 0,
                                                            opacity: 1,
                                                        }}
                                                        animate={{
                                                            x: Math.cos((particle * 360) / (isClicked ? 5 : 3) * Math.PI / 180) * (isClicked ? 50 : 30),
                                                            y: Math.sin((particle * 360) / (isClicked ? 5 : 3) * Math.PI / 180) * (isClicked ? 50 : 30),
                                                            opacity: 0,
                                                        }}
                                                        transition={{
                                                            duration: isClicked ? 1.2 : 0.8,
                                                            ease: 'easeOut',
                                                        }}
                                                    />
                                                ))}
                                            </>
                                        )}
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )
                })}

                {/* Decorative rotating ring */}
                <motion.div
                    className="absolute inset-0 rounded-full border border-cyan-400/20"
                    style={{
                        width: radius * 2 + 60,
                        height: radius * 2 + 60,
                        left: '50%',
                        top: '50%',
                        marginLeft: -(radius + 30),
                        marginTop: -(radius + 30),
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                />

                {/* Pulsing second ring */}
                <motion.div
                    className="absolute inset-0 rounded-full border border-blue-400/10"
                    style={{
                        width: radius * 2 + 120,
                        height: radius * 2 + 120,
                        left: '50%',
                        top: '50%',
                        marginLeft: -(radius + 60),
                        marginTop: -(radius + 60),
                    }}
                    animate={{
                        rotate: -360,
                        opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                        rotate: { duration: 40, repeat: Infinity, ease: 'linear' },
                        opacity: { duration: 3, repeat: Infinity },
                    }}
                />

                {/* Third decorative ring with scale */}
                <motion.div
                    className="absolute inset-0 rounded-full border border-cyan-300/5"
                    style={{
                        width: radius * 2 + 180,
                        height: radius * 2 + 180,
                        left: '50%',
                        top: '50%',
                        marginLeft: -(radius + 90),
                        marginTop: -(radius + 90),
                    }}
                    animate={{
                        scale: [0.9, 1.1, 0.9],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
            </div>

            {/* Info text */}
            <motion.p
                className="mt-12 text-center text-muted-foreground text-sm"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
            >
                Hover to explore • Click for extra magic
            </motion.p>
        </motion.div>
    )
}