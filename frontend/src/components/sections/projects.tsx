import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { AnimatedButton } from '../ui/animated-button';
import Link from 'next/link';
import { toSlug } from '@/lib/slug';
import { Projects as DataProjects } from '@/data';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/80">
            Here are some of my recent projects. Each project represents a unique challenge
            and an opportunity to learn and grow as a developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DataProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-r from-primary/10 to-primary/5 flex items-center justify-center">
                <div className="text-4xl font-bold text-foreground/10">
                  {project.name.split(' ').map(word => word[0]).join('')}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <div className="flex space-x-2">
                    <a 
                      href={project.url || '#'} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-primary transition-colors"
                      aria-label="View demo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                
                <p className="text-foreground/70 mb-4">{project.desc}</p>
                
                {project.features?.length ? (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.slice(0, 4).map((feat, i) => (
                      <span 
                        key={i}
                        className="text-xs px-2 py-1 bg-foreground/5 rounded-full text-foreground/70"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                ) : null}
                
                <div className="transition-opacity duration-300 group-hover:opacity-0">
                  <Link href={`/projects/${toSlug(project.name)}`}>
                    <AnimatedButton 
                      gradient="rainbow"
                      size="sm" 
                      className="group-hover:translate-x-1 transition-transform duration-300 relative z-10"
                    >
                      View Project
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
              
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-foreground/80 mb-4 line-clamp-2">{project.desc}</p>
                  <div className="pointer-events-auto">
                    <Link href={`/projects/${toSlug(project.name)}`}>
                      <Button size="sm">View Details</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16"
        >
          <AnimatedButton gradient="bluePurple" className="group">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  );
}
