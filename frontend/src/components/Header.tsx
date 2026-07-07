import { useState, useEffect } from 'react'
import { Shield, Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Coverage', href: '#coverage' },
  { label: 'File a Claim', href: '#file-claim' },
  { label: 'Team', href: '#team' },
  { label: 'Resources', href: '#resources' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-md backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container-x">
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600 shadow-lg shadow-brand-600/30">
              <Shield className="h-6 w-6 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span className={`text-lg font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                MPG Consulting
              </span>
              <span className={`text-xs font-medium ${scrolled ? 'text-brand-600' : 'text-brand-200'}`}>
                Services LLC
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled ? 'text-slate-600 hover:text-brand-600' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:+18005550100"
              className={`flex items-center gap-1.5 text-sm font-medium ${
                scrolled ? 'text-slate-600 hover:text-brand-600' : 'text-white/80 hover:text-white'
              }`}
            >
              <Phone className="h-4 w-4" />
              (800) 555-0100
            </a>
            <a href="#contact" className="btn-primary !py-2.5">
              Get a Quote
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden ${scrolled ? 'text-slate-900' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-brand-50 hover:text-brand-600"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-primary mt-2">
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
