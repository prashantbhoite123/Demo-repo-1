'use client'

import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Glowing gradient line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"></div>

      <div className="relative container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand and social */}
          <div className="space-y-3">
            <h3 className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Vaishnavi Mane
            </h3>
            <div className="flex space-x-3">
              {[
                { icon: Github, label: 'GitHub', url: 'https://github.com/VaishnaviMane2929' },
                { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/vaishnavi-mane-a415a633a/' },
                { icon: Twitter, label: 'Twitter', url: '#' },
                { icon: Mail, label: 'Email', url: 'mailto:vaishnavimane991@gmail.com' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-600 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 text-gray-300 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Horizontal */}
          <div className="flex space-x-6 text-sm text-gray-400">
            {[
              { name: 'Home', href: '#home' },
              { name: 'About', href: '#about' },
              { name: 'Projects', href: '#projects' },
              { name: 'Contact', href: '#contact' },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="hover:text-white transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact - Horizontal */}
          <div className="flex space-x-4 text-sm text-gray-400">
            <a href="mailto:vaishnavimane991@gmail.com" className="hover:text-white transition-colors">
              Email
            </a>
            <span className="text-gray-600">•</span>
            <a href="tel:+1234567890" className="hover:text-white transition-colors">
              vaishnavimane991@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="border-t border-gray-800 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>
            © {currentYear} <span className="text-cyan-400">Vaishnavi Mane</span>. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-600"></div>
    </footer>
  )
}