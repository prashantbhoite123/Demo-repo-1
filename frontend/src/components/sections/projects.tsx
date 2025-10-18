'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { AnimatedButton } from '../ui/animated-button'
import Link from 'next/link'
import { toSlug } from '@/lib/slug'
import { Projects as DataProjects } from '@/data'
import { BorderBeam } from '../ui/border-beam'

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-24 bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white overflow-hidden"
    >
      {/* Electric background gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,150,255,0.15),transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold tracking-tight 
            bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-600 
            bg-clip-text text-transparent mb-6 drop-shadow-[0_0_15px_#00bfff]"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            My Projects
          </motion.h2>

          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-6"></div>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects — each one designed, developed, and crafted to
            deliver seamless performance and delightful user experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {DataProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-cyan-500/40 
                         bg-gradient-to-b from-gray-900/40 to-gray-800/20 backdrop-blur-sm 
                         shadow-[0_0_20px_rgba(0,200,255,0.1)] hover:shadow-[0_0_30px_rgba(0,200,255,0.4)] 
                         transition-all duration-500 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-56 w-full">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-60 transition-all duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>

                <p className="text-gray-400 mb-5">{project.desc}</p>

                {/* Features */}
                {project.features?.length ? (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.slice(0, 4).map((feat, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                ) : null}

                {/* View Project Button */}
                <Link href={`/projects/${toSlug(project.name)}`}>
                  <AnimatedButton
                    gradient="bluePurple"
                    size="sm"
                    className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                  >
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </AnimatedButton>
                </Link>
              </div>

              <BorderBeam />
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-20"
        >
          <AnimatedButton
            gradient="rainbow"
            className="group shadow-[0_0_25px_rgba(0,200,255,0.3)] hover:shadow-[0_0_40px_rgba(0,200,255,0.6)] transition-all duration-500"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  )
}