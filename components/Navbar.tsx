'use client'

import { useEffect, useState } from 'react'
import { Menu, X, FileText } from 'lucide-react'

const links = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Research', href: '#research' },
  { name: 'Competition', href: '#competition' },
  { name: 'Experience', href: '#ipt' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      const total =
        document.documentElement.scrollHeight - window.innerHeight
      const current = window.scrollY
      setProgress(total > 0 ? (current / total) * 100 : 0)
    }

    window.addEventListener('scroll', onScroll)
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Scroll progress */}
      <div className="fixed left-0 top-0 z-[60] h-[2px] w-full bg-transparent">
        <div
          className="h-full bg-[#8FA8C7] transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <header className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 py-4">
        <nav
          className={`flex w-full max-w-6xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-300 ${
            scrolled
              ? 'border-white/15 bg-[#14181D]/85 shadow-2xl backdrop-blur-xl'
              : 'border-white/10 bg-[#14181D]/55 backdrop-blur-lg'
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            className="text-sm font-semibold tracking-[0.3em] text-[#F5F3EE]"
          >
            KM
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm text-[#B8BCC6] transition-colors hover:text-[#F5F3EE]"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#8FA8C7] transition-all duration-300 hover:w-full" />
              </a>
            ))}
          </div>

          {/* Resume button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full border border-[#8FA8C7]/30 bg-[#8FA8C7]/10 px-4 py-2 text-sm text-[#8FA8C7] transition-all hover:border-[#8FA8C7] hover:bg-[#8FA8C7]/20 md:inline-flex"
          >
            <FileText size={16} />
            Resume
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="text-[#F5F3EE] md:hidden"
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-[#0F1115]/96 backdrop-blur-xl md:hidden">
          <div className="flex h-full flex-col items-center justify-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-2xl text-[#F5F3EE] transition-colors hover:text-[#8FA8C7]"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#8FA8C7] px-6 py-3 font-medium text-[#0F1115]"
            >
              <FileText size={18} />
              View Resume
            </a>
          </div>
        </div>
      )}
    </>
  )
}
