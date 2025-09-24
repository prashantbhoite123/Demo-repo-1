// 'use client';

// import { motion } from 'framer-motion';
// import { Button } from '../ui/button';
// import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
// import Image from 'next/image';

// export function HeroSection() {
//   return (
//     <section id="home" className="relative w-full py-20 md:py-24 lg:py-32 overflow-hidden">
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 from-0% to-transparent to-70%" />
//       </div>

//       <div className="container mx-auto px-4 md:px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="space-y-6 text-center lg:text-left"
//           >
//             <motion.h1 
//               className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.5 }}
//             >
//              Vaishnavi Mane
//             </motion.h1>
            
//             <motion.h2 
//               className="text-2xl md:text-3xl font-bold text-foreground/80"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4, duration: 0.5 }}
//             >
//               Java Full Stack Developer | PHP Certified
//             </motion.h2>
            
//             <motion.p 
//               className="text-foreground/70 max-w-lg mx-auto lg:mx-0"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5, duration: 0.5 }}
//             >
//               I&apos;m a passionate Full Stack Developer with expertise in modern web technologies. 
//               I create beautiful, responsive, and user-friendly web applications.
//             </motion.p>
            
//             <motion.div 
//               className="flex flex-wrap gap-4 justify-center lg:justify-start"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6, duration: 0.5 }}
//             >
//               <Button className="group">
//                 View Projects
//                 <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//               </Button>
//               <Button variant="outline">Contact Me</Button>
//             </motion.div>

//             <motion.div 
//               className="flex items-center justify-center lg:justify-start space-x-4 pt-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.7, duration: 0.5 }}
//             >
//               <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
//                 <Github className="h-5 w-5" />
//               </a>
//               <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
//                 <Linkedin className="h-5 w-5" />
//               </a>
//               <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
//                 <Mail className="h-5 w-5" />
//               </a>
//             </motion.div>
//           </motion.div>

//           <motion.div 
//             className="relative hidden lg:block"
//             initial={{ opacity: 0, scale: 0.9, x: 50 }}
//             animate={{ opacity: 1, scale: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-primary/20">
//               <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full" />
//               <div className="absolute inset-4 bg-foreground/5 rounded-full" />
//               <div className="absolute inset-8 rounded-full overflow-hidden flex items-center justify-center">
//                 <Image
//                   src="/3dgirlpng2-removebg-preview.png"
//                   alt="3D Girl with Laptop"
//                   fill
//                   className="object-contain"
//                   priority
//                 />
//               </div>
              
//               {/* Animated elements */}
//               <motion.div 
//                 className="absolute top-1/4 -left-4 w-8 h-8 rounded-full bg-primary/20"
//                 animate={{
//                   y: [0, -15, 0],
//                   scale: [1, 1.1, 1],
//                 }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               />
              
//               <motion.div 
//                 className="absolute bottom-1/4 -right-4 w-6 h-6 rounded-full bg-blue-500/20"
//                 animate={{
//                   y: [0, 15, 0],
//                   scale: [1, 1.2, 1],
//                 }}
//                 transition={{
//                   duration: 5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                   delay: 0.5,
//                 }}
//               />
              
//               <motion.div 
//                 className="absolute top-1/2 -right-8 w-10 h-10 rounded-full bg-purple-500/20"
//                 animate={{
//                   x: [0, -10, 0],
//                   scale: [1, 1.1, 1],
//                 }}
//                 transition={{
//                   duration: 6,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                   delay: 1,
//                 }}
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       <motion.div 
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1, duration: 0.5 }}
//       >
//         <p className="text-sm text-foreground/60 mb-2">Scroll Down</p>
//         <motion.div
//           animate={{
//             y: [0, 10, 0],
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center p-1">
//             <motion.div 
//               className="w-1 h-2 bg-foreground/60 rounded-full"
//               animate={{
//                 y: [0, 4],
//                 opacity: [0.4, 1, 0.4],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//             />
//           </div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Button } from '../ui/button';
import { Github, Linkedin, Mail, ArrowRight, Download, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

export function HeroSection() {
  const containerRef = useRef(null);
  
  // Mouse position tracking for parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 300 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = event;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set((clientX - left) / width - 0.5);
    mouseY.set((clientY - top) / height - 0.5);
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      }
    })
  };

  const floatingElements = [
    { top: '20%', left: '10%', delay: 0, color: 'from-primary/30 to-blue-500/20' },
    { top: '70%', left: '85%', delay: 0.5, color: 'from-secondary/30 to-purple-500/20' },
    { top: '40%', left: '90%', delay: 1, color: 'from-green-500/30 to-teal-500/20' },
    { top: '80%', left: '15%', delay: 1.5, color: 'from-orange-500/30 to-red-500/20' },
  ];

  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen flex items-center justify-center py-20 md:py-24 lg:py-32 overflow-hidden"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      {/* Enhanced Background with Gradient Mesh */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />
        
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-secondary/20 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="space-y-8 text-center lg:text-left relative z-10"
          >
            {/* Animated Badge */}
            <motion.div
              custom={0}
              variants={textVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Full Stack Developer</span>
            </motion.div>

            <motion.h1 
              custom={1}
              variants={textVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-300% animate-gradient">
                Vaishnavi
              </span>
              <br />
              <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Mane
              </span>
            </motion.h1>
            
            <motion.h2 
              custom={2}
              variants={textVariants}
              className="text-xl md:text-2xl font-semibold text-foreground/80 bg-gradient-to-r from-foreground/80 to-foreground/60 bg-clip-text text-transparent"
            >
              Java Full Stack Developer • PHP Certified • Cloud Enthusiast
            </motion.h2>
            
            <motion.p 
              custom={3}
              variants={textVariants}
              className="text-lg text-foreground/70 max-w-2xl leading-relaxed"
            >
              Crafting digital experiences with cutting-edge technologies. 
              I specialize in building scalable, responsive, and user-centric web applications 
              that drive business success.
            </motion.p>
            
            {/* Enhanced CTA Buttons */}
            <motion.div 
              custom={4}
              variants={textVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <span className="relative z-10 flex items-center">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Button>
              
              <Button variant="outline" className="group border-2 relative overflow-hidden backdrop-blur-sm">
                <span className="relative z-10 flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </span>
                <div className="absolute inset-0 bg-primary/10 transform scale-0 group-hover:scale-100 transition-transform duration-300" />
              </Button>
            </motion.div>

            {/* Social Links with Hover Effects */}
            <motion.div 
              custom={5}
              variants={textVariants}
              className="flex items-center justify-center lg:justify-start space-x-6 pt-6"
            >
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#", label: "Email" }
              ].map(({ icon: Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  className="relative p-3 rounded-full bg-foreground/5 border border-foreground/10 hover:border-primary/30 transition-all duration-300 group hover:bg-primary/10 hover:scale-110 hover:shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-5 w-5 text-foreground/60 group-hover:text-primary transition-colors" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs bg-foreground/90 text-background px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {label}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* 3D Image Container with Enhanced Effects */}
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.8, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="relative w-full aspect-square">
              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-xl shadow-2xl transform-style-3d">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
                
                {/* Floating Tech Elements */}
                {floatingElements.map((element, index) => (
                  <motion.div
                    key={index}
                    className={`absolute w-12 h-12 rounded-full bg-gradient-to-r ${element.color} backdrop-blur-sm border border-white/10`}
                    style={{
                      top: element.top,
                      left: element.left,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, 10, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: element.delay,
                    }}
                  />
                ))}

                {/* Main Image */}
                <div className="absolute inset-8 rounded-2xl overflow-hidden flex items-center justify-center">
                  <Image
                    src="/3dgirlpng2-removebg-preview.png"
                    alt="Vaishnavi Mane - Full Stack Developer"
                    fill
                    className="object-contain transform scale-110 hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Background Decorative Elements */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-xl -z-10"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.p 
          className="text-sm text-foreground/60 mb-3 font-medium"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll to explore
        </motion.p>
        <motion.div
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center p-1 backdrop-blur-sm"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div 
            className="w-1 h-3 bg-gradient-to-b from-primary to-secondary rounded-full"
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
        </motion.div>
      </motion.div>
    </section>
  );
}