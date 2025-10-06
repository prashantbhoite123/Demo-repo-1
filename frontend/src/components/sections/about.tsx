// import { motion } from 'framer-motion'
// import { Briefcase, GraduationCap, Code, Server, Database, Smartphone } from 'lucide-react'
// import { BorderBeam } from '../ui/border-beam'

// const skills = [
//   { name: 'Core', icon: Code, items: ['HTML', 'CSS', 'JavaScript'] },
//   { name: 'Frontend', icon: Code, items: ['React', 'Bootstrap'] },
//   { name: 'Backend', icon: Server, items: ['PHP', 'Java'] },
//   { name: 'Frameworks', icon: Server, items: ['CodeIgniter'] },
//   { name: 'Database', icon: Database, items: ['MySQL', 'PL/SQL'] },
// ]

// const experiences = [
//   {
//     role: 'Java & PHP Developer',
//     company: '—',
//     duration: '—',
//     description: 'Building applications with Java and PHP (CodeIgniter), crafting clean UI and performant backend APIs.',
//     icon: Briefcase,
//   },
//   {
//     role: 'Education',
//     company: '—',
//     duration: '—',
//     description: 'Core Java, PHP, web fundamentals, and relational databases (MySQL/PL/SQL).',
//     icon: GraduationCap,
//   },
// ]

// export function AboutSection() {
//   return (
//     <section id="about" className="py-20 bg-muted/40">
//       <div className="container mx-auto px-4 md:px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="max-w-4xl mx-auto text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
//           <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
//           <p className="text-foreground/80">
//             I&apos;m a passionate developer with over 5 years of experience in building modern web applications.
//             My journey in tech started with a simple &quot;Hello World&quot; and has evolved into creating complex,
//             scalable applications that solve real-world problems.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="lg:col-span-2"
//           >
//             <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//               {skills.map((skill, index) => (
//                 <BorderBeam key={skill.name} colorFrom="#00d4ff" colorTo="#0099ff">
//                   <motion.div
//                     key={skill.name}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.1 * index, duration: 0.5 }}
//                     className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
//                   >
//                     <div className="flex items-center mb-4">
//                       <div className="p-2 rounded-full bg-primary/10 text-primary mr-3">
//                         <skill.icon className="h-5 w-5" />
//                       </div>
//                       <h4 className="font-medium">{skill.name}</h4>
//                     </div>
//                     <ul className="space-y-2">
//                       {skill.items.map((item, i) => (
//                         <li key={i} className="flex items-center">
//                           <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
//                           <span className="text-foreground/80">{item}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </motion.div>
//                 </BorderBeam>
//               ))}
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h3 className="text-2xl font-semibold mb-6">Experience & Education</h3>
//             <div className="space-y-8 relative">
//               <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-foreground/10"></div>
//               {experiences.map((exp, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.1 * index, duration: 0.5 }}
//                   className="relative pl-12"
//                 >
//                   <div className="absolute left-5 top-1.5 w-3 h-3 rounded-full bg-primary"></div>
//                   <div className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
//                     <div className="flex items-center mb-2">
//                       <div className="p-1.5 rounded-md bg-primary/10 text-primary mr-3">
//                         <exp.icon className="h-4 w-4" />
//                       </div>
//                       <h4 className="font-medium">{exp.role}</h4>
//                     </div>
//                     <div className="pl-8">
//                       <p className="text-sm text-foreground/60 mb-2">{exp.company} • {exp.duration}</p>
//                       <p className="text-foreground/80">{exp.description}</p>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>


//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="mt-16 bg-gradient-to-r from-primary/5 to-primary/10 p-8 rounded-xl"
//         >
//           <div className="max-w-3xl mx-auto text-center">
//             <h3 className="text-2xl font-semibold mb-4">Why Work With Me?</h3>
//             <p className="text-foreground/80 mb-6">
//               I combine technical expertise with a passion for creating seamless user experiences.
//               My approach focuses on clean code, performance optimization, and attention to detail.
//             </p>
//             <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-8">
//               {[
//                 { value: '1+', label: 'Years Experience' },
//                 { value: '5+', label: 'Projects Completed' },
//               ].map((stat, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ scale: 0.9, opacity: 0 }}
//                   whileInView={{ scale: 1, opacity: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.1 * i, type: 'spring', stiffness: 100 }}
//                   className="relative p-[2px] rounded-lg overflow-hidden group"
//                 >
//                   {/* Rotating border gradient */}
//                   <motion.div
//                     className="absolute inset-0 rounded-lg"
//                     style={{
//                       background: 'conic-gradient(from 0deg, #00d4ff, #0099ff, #0066ff, #00d4ff)',
//                     }}
//                     animate={{
//                       rotate: [0, 360],
//                     }}
//                     transition={{
//                       duration: 3,
//                       repeat: Infinity,
//                       ease: 'linear',
//                       repeatType: 'loop',
//                     }}
//                   />

//                   {/* Glow effect */}
//                   <div className="absolute inset-0 rounded-lg blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300"
//                     style={{
//                       background: 'conic-gradient(from 0deg, #00d4ff, #0099ff, #0066ff, #00d4ff)',
//                     }}
//                   />

//                   {/* Content */}
//                   <div className="relative bg-background p-4 rounded-lg shadow-sm h-full flex flex-col items-center justify-center">
//                     <div className="text-2xl font-bold text-primary">{stat.value}</div>
//                     <div className="text-sm text-foreground/60">{stat.label}</div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }







import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Code, Server, Database, Smartphone } from 'lucide-react'
import { BorderBeam } from '../ui/border-beam'

const skills = [
  { name: 'Core', icon: Code, items: ['HTML', 'CSS', 'JavaScript'] },
  { name: 'Frontend', icon: Code, items: ['React', 'Bootstrap'] },
  { name: 'Backend', icon: Server, items: ['PHP', 'Java'] },
  { name: 'Frameworks', icon: Server, items: ['CodeIgniter'] },
  { name: 'Database', icon: Database, items: ['MySQL', 'PL/SQL'] },
]

const experiences = [
  {
    role: 'Java & PHP Developer',
    company: '—',
    duration: '—',
    description: 'Building applications with Java and PHP (CodeIgniter), crafting clean UI and performant backend APIs.',
    icon: Briefcase,
  },
  {
    role: 'Education',
    company: '—',
    duration: '—',
    description: 'Core Java, PHP, web fundamentals, and relational databases (MySQL/PL/SQL).',
    icon: GraduationCap,
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/40">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-foreground/80">
            I&apos;m a passionate developer with over 5 years of experience in building modern web applications.
            My journey in tech started with a simple &quot;Hello World&quot; and has evolved into creating complex,
            scalable applications that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="relative">
                  <BorderBeam
                    colorFrom="#00d4ff"
                    colorTo="#0099ff"
                    size={250}
                    duration={8}
                    delay={index * 0.5}
                    borderWidth={2}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-full bg-primary/10 text-primary mr-3">
                        <skill.icon className="h-5 w-5" />
                      </div>
                      <h4 className="font-medium">{skill.name}</h4>
                    </div>
                    <ul className="space-y-2">
                      {skill.items.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                          <span className="text-foreground/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Experience & Education</h3>
            <div className="space-y-8 relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-foreground/10"></div>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-5 top-1.5 w-3 h-3 rounded-full bg-primary"></div>
                  <div className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-2">
                      <div className="p-1.5 rounded-md bg-primary/10 text-primary mr-3">
                        <exp.icon className="h-4 w-4" />
                      </div>
                      <h4 className="font-medium">{exp.role}</h4>
                    </div>
                    <div className="pl-8">
                      <p className="text-sm text-foreground/60 mb-2">{exp.company} • {exp.duration}</p>
                      <p className="text-foreground/80">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 bg-gradient-to-r from-primary/5 to-primary/10 p-8 rounded-xl"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">Why Work With Me?</h3>
            <p className="text-foreground/80 mb-6">
              I combine technical expertise with a passion for creating seamless user experiences.
              My approach focuses on clean code, performance optimization, and attention to detail.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-8">
              {[
                { value: '1+', label: 'Years Experience' },
                { value: '5+', label: 'Projects Completed' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, type: 'spring', stiffness: 100 }}
                  className="relative p-[2px] rounded-lg overflow-hidden group"
                >
                  {/* Rotating border gradient */}
                  <motion.div
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: 'conic-gradient(from 0deg, #00d4ff, #0099ff, #0066ff, #00d4ff)',
                    }}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                      repeatType: 'loop',
                    }}
                  />

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-lg blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300"
                    style={{
                      background: 'conic-gradient(from 0deg, #00d4ff, #0099ff, #0066ff, #00d4ff)',
                    }}
                  />

                  {/* Content */}
                  <div className="relative bg-background p-4 rounded-lg shadow-sm h-full flex flex-col items-center justify-center">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-foreground/60">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}