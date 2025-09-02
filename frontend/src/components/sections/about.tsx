import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code, Server, Database, Smartphone } from 'lucide-react';

const skills = [
  { name: 'Frontend', icon: Code, items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'] },
  { name: 'Backend', icon: Server, items: ['Node.js', 'Express', 'NestJS', 'Django', 'Flask'] },
  { name: 'Database', icon: Database, items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis'] },
  { name: 'Mobile', icon: Smartphone, items: ['React Native', 'Flutter', 'Swift', 'Kotlin'] },
];

const experiences = [
  {
    role: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    duration: '2021 - Present',
    description: 'Leading frontend development for enterprise applications using React and Next.js.',
    icon: Briefcase,
  },
  {
    role: 'Full Stack Developer',
    company: 'WebSolutions Ltd.',
    duration: '2019 - 2021',
    description: 'Developed and maintained full-stack applications using MERN stack.',
    icon: Briefcase,
  },
  {
    role: 'Computer Science',
    company: 'Tech University',
    duration: '2015 - 2019',
    description: 'Bachelor of Science in Computer Science with honors.',
    icon: GraduationCap,
  },
];

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
            I'm a passionate developer with over 5 years of experience in building modern web applications.
            My journey in tech started with a simple "Hello World" and has evolved into creating complex,
            scalable applications that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {[
                { value: '5+', label: 'Years Experience' },
                { value: '50+', label: 'Projects Completed' },
                { value: '95%', label: 'Client Satisfaction' },
                { value: '24/7', label: 'Support' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, type: 'spring', stiffness: 100 }}
                  className="bg-background p-4 rounded-lg shadow-sm"
                >
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-foreground/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
