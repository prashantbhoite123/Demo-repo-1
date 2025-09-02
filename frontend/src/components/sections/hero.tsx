'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section id="home" className="relative w-full py-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 from-0% to-transparent to-70%" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Prashant Bhoite
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-foreground/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              MERN Stack Developer | Docker & AWS Certified
            </motion.h2>
            
            <motion.p 
              className="text-foreground/70 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              I&apos;m a passionate Full Stack Developer with expertise in modern web technologies. 
              I create beautiful, responsive, and user-friendly web applications.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Button className="group">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline">Contact Me</Button>
            </motion.div>

            <motion.div 
              className="flex items-center justify-center lg:justify-start space-x-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full" />
              <div className="absolute inset-4 bg-foreground/5 rounded-full" />
              <div className="absolute inset-8 rounded-full overflow-hidden flex items-center justify-center">
                <Image
                  src="/3d-boy-laptop.png"
                  alt="3D Boy with Laptop"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              {/* Animated elements */}
              <motion.div 
                className="absolute top-1/4 -left-4 w-8 h-8 rounded-full bg-primary/20"
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <motion.div 
                className="absolute bottom-1/4 -right-4 w-6 h-6 rounded-full bg-blue-500/20"
                animate={{
                  y: [0, 15, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              
              <motion.div 
                className="absolute top-1/2 -right-8 w-10 h-10 rounded-full bg-purple-500/20"
                animate={{
                  x: [0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <p className="text-sm text-foreground/60 mb-2">Scroll Down</p>
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center p-1">
            <motion.div 
              className="w-1 h-2 bg-foreground/60 rounded-full"
              animate={{
                y: [0, 4],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
