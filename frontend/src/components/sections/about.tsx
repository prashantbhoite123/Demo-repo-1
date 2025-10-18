
import { motion } from 'framer-motion'
import { BorderBeam } from '../ui/border-beam'
import HobbiesSection from '../Myhobbies'


export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/40">
      <div className="container mx-auto px-4 md:px-6 ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-black 
                bg-gradient-to-r from-white via-sky-400 to-blue-600 
                bg-clip-text text-transparent mb-6 drop-shadow-[0_0_20px_#00bfff]"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ABOUT ME
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground">
            I&apos;m a passionate developer with over 5 years of experience in building modern web applications.
            My journey in tech started with a simple &quot;Hello World&quot; and has evolved into creating complex,
            scalable applications that solve real-world problems.
          </p>
        </motion.div>


        <div className="flex justify-center items-center">
          <HobbiesSection />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 bg-gradient-to-r from-primary/5 to-primary/10 p-8 rounded-xl relative"
        >
          <BorderBeam
            size={200}
            duration={10}
            colorFrom="#00d4ff"
            colorTo="#0099ff"
            borderWidth={3}
          />
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.h3 className="text-2xl md:text-4xl font-black 
             bg-gradient-to-r from-white via-sky-400 to-blue-600 
             bg-clip-text text-transparent mb-6 drop-shadow-[0_0_20px_#00bfff]"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}>Why Work With Me?</motion.h3>
            <p className="text-muted-foreground mb-6">
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


                  <div className="absolute inset-0 rounded-lg blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300"
                    style={{
                      background: 'conic-gradient(from 0deg, #00d4ff, #0099ff, #0066ff, #00d4ff)',
                    }}
                  />

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