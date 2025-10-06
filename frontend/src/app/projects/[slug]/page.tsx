'use client';

import { useMemo } from 'react';
import { useParams, notFound } from 'next/navigation';
import { Projects } from '@/data';
import { toSlug } from '@/lib/slug';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { AnimatedButton } from '@/components/ui/animated-button';

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = String(params?.slug || '');

  const project = useMemo(() => {
    return Projects.find((p) => toSlug(p.name) === slug);
  }, [slug]);

  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="#" onClick={() => history.back()} className="inline-flex items-center text-foreground/70 hover:text-primary">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10"
        >
          <div className="lg:col-span-2 space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {project.name}
            </h1>
            <p className="text-foreground/80">
              {project.desc}
            </p>

            {project.features?.length ? (
              <div>
                <h2 className="text-xl font-semibold mb-3">Key Features</h2>
                <ul className="space-y-2 list-disc pl-5 text-foreground/80">
                  {project.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="flex flex-wrap gap-3 pt-2">
              {project.url ? (
                <AnimatedButton asChild gradient="bluePurple">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                    Live Site <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </AnimatedButton>
              ) : null}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="rounded-xl border border-foreground/10 p-6 bg-card shadow-sm">
              <h3 className="font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {/* Basic tech inference from features/desc; customize as needed */}
                {['HTML','CSS','JavaScript','PHP','Java','MySQL'].map((t) => (
                  <span key={t} className="text-xs px-2 py-1 bg-foreground/5 rounded-full text-foreground/70">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}





