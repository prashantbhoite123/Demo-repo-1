'use client'

import { useMemo } from 'react'
import { useParams, notFound } from 'next/navigation'
import { Projects } from '@/data'
import { toSlug } from '@/lib/slug'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { AnimatedButton } from '@/components/ui/animated-button'

export default function ProjectDetailPage() {
  const params = useParams()
  const slug = String(params?.slug || '')

  const project = useMemo(() => {
    return Projects.find((p) => toSlug(p.name) === slug)
  }, [slug])

  if (!project) return notFound()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-4 md:px-6 py-24"
      >
        <Link
          href="#"
          onClick={() => history.back()}
          className="inline-flex items-center text-white/70 hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Back
        </Link>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold mt-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          {project.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl mt-6 text-lg text-white/70 leading-relaxed"
        >
          {project.desc}
        </motion.p>
      </motion.div>

      {/* Image Section */}
      {project.image && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full max-w-5xl mx-auto px-4 md:px-0 mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 150 }}
            className="overflow-hidden rounded-2xl shadow-lg border border-white/10"
          >
            <Image
              src={project.image}
              alt={project.name}
              width={1200}
              height={700}
              className="object-cover w-full h-[400px] md:h-[500px]"
            />
          </motion.div>
        </motion.div>
      )}

      {/* Details Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 md:px-6 pb-24 grid grid-cols-1 lg:grid-cols-3 gap-12"
      >
        {/* Left content */}
        <div className="lg:col-span-2 space-y-8">
          {project.features?.length ? (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">
                ✨ Key Features
              </h2>
              <ul className="space-y-3 list-disc pl-5 text-white/80">
                {project.features.map((f, i) => (
                  <li
                    key={i}
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ) : null}

          {/* Live link button */}
          {project.url && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AnimatedButton asChild gradient="bluePurple">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Visit Live Site <ExternalLink className="h-4 w-4" />
                </a>
              </AnimatedButton>
            </motion.div>
          )}
        </div>

        {/* Right sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 shadow-md"
        >
          <h3 className="text-xl font-semibold mb-4 text-blue-300">
            🧠 Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {(['React', 'Node.js', 'MongoDB']).map((t) => (
              <motion.span
                key={t}
                whileHover={{ scale: 1.1 }}
                className="text-xs px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
