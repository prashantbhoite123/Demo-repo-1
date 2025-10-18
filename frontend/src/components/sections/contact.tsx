'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react'
import { AnimatedButton } from '../ui/animated-button'

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState<string>('')

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-black overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,191,255,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-sky-400 to-blue-600 bg-clip-text text-transparent mb-6 drop-shadow-[0_0_25px_#00eaff]"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Get In Touch
          </motion.h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-sky-400 to-blue-600 rounded-full shadow-[0_0_10px_#00eaff]" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project idea or want to collaborate? Let&lsquo;s connect and make something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Contact Information</h3>
              <p className="text-gray-400">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to collaborate.
              </p>
            </div>

            
            <div className="space-y-6 text-gray-300">
              {[
                { Icon: Mail, title: 'Email Me', info: 'vaishnavimane991@gmail.com', link: 'mailto:vaishnavimane991@gmail.com' },
                { Icon: Phone, title: 'Call Me', info: '+1 (234) 567-890', link: 'tel:+1234567890' },
                { Icon: MapPin, title: 'Location', info: 'Maharastra, Chh.Sambhajinagar, Paithan' },
              ].map(({ Icon, title, info, link }, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-sky-500/10 text-sky-400 shadow-[0_0_10px_#00eaff50]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">{title}</h4>
                    {link ? (
                      <a href={link} className="text-gray-400 hover:text-sky-400 transition-colors">
                        {info}
                      </a>
                    ) : (
                      <p>{info}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            
            <div className="pt-4">
              <h4 className="font-medium text-white mb-4">Follow Me</h4>
              <div className="flex space-x-5">
                {[
                  { name: 'GitHub', url: 'https://github.com/VaishnaviMane2929', Icon: Github },
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/vaishnavi-mane-a415a633a/', Icon: Linkedin },
                  { name: 'Twitter', url: '#', Icon: Twitter },
                ].map(({ name, url, Icon }, i) => (
                  <motion.a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:text-sky-400 hover:shadow-[0_0_20px_#00eaff80] transition-all"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={name}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Section - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 shadow-[0_0_25px_#00eaff20]"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
            <form
              className="space-y-6"
              onSubmit={async (e) => {
                e.preventDefault()
                const form = e.currentTarget as HTMLFormElement
                const formData = new FormData(form)
                const payload = {
                  name: String(formData.get('name') || ''),
                  email: String(formData.get('email') || ''),
                  subject: String(formData.get('subject') || ''),
                  message: String(formData.get('message') || ''),
                }
                try {
                  setStatus('sending')
                  setMessage('')
                  const res = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                  })
                  const data = await res.json()
                  if (data?.ok) {
                    setStatus('success')
                    setMessage('✅ Message sent successfully!')
                    form.reset()
                  } else {
                    setStatus('error')
                    setMessage(`❌ Failed to send: ${data?.error || 'Unknown error'}`)
                  }
                } catch (error) {
                  setStatus('error')
                  setMessage('⚠️ Something went wrong. Please try again later.')
                  console.log(error)
                } finally {
                  setTimeout(() => setStatus('idle'), 2000)
                }
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Your Name" name="name" placeholder="John Doe" />
                <Input label="Email Address" name="email" placeholder="you@example.com" type="email" />
              </div>
              <Input label="Subject" name="subject" placeholder="How can I help you?" />
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  name="message"
                  className="w-full px-4 py-3 border border-white/10 rounded-md bg-transparent text-white placeholder-gray-500 focus:ring-2 focus:ring-sky-500/50 focus:border-transparent"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <div className="pt-4 space-y-3">
                <AnimatedButton
                  gradient="neon"
                  className="group w-full sm:w-auto"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </AnimatedButton>

                {message && (
                  <p
                    className={
                      'text-sm ' + (status === 'success' ? 'text-green-400' : 'text-red-400')
                    }
                  >
                    {message}
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ✅ Reusable Input Field */
interface InputProps {
  label: string
  name: string
  type?: string
  placeholder: string
}

function Input({ label, name, type = 'text', placeholder }: InputProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-2">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="w-full px-4 py-3 border border-white/10 rounded-md bg-transparent text-white placeholder-gray-500 focus:ring-2 focus:ring-sky-500/50 focus:border-transparent"
        placeholder={placeholder}
      />
    </div>
  )
}