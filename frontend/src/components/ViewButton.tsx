import React from 'react'
import { motion } from "framer-motion"

const ViewButton = () => {
    return (
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
                    <span className="relative z-10">View Projects</span>
                </motion.button>
            </a>
        </motion.div>
    )
}

export default ViewButton