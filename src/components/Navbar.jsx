import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Logo = () => (
  <Link to="/" className="flex items-center gap-3 group">
    {/* Geometric tile accent */}
    <div className="relative w-9 h-9 flex-shrink-0">
      <div className="absolute inset-0 bg-accent rotate-45 transform group-hover:rotate-[60deg] transition-transform duration-500" />
      <div className="absolute inset-[6px] bg-primary rotate-45 transform group-hover:rotate-[60deg] transition-transform duration-500" />
    </div>
    <div className="flex flex-col leading-none">
      <div className="flex items-baseline gap-0">
        <span className="text-[1.6rem] font-black text-white tracking-[0.08em] leading-none">XTREME</span>
        <span className="text-[1.6rem] font-black text-silver tracking-[0.08em] leading-none ml-2">TILE</span>
      </div>
      <span className="text-[0.55rem] text-silver/70 tracking-[0.25em] font-semibold leading-none mt-0.5">INC.</span>
    </div>
  </Link>
)

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-primary/97'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative text-sm font-bold tracking-widest uppercase transition-colors duration-200 pb-1 ${
                  isActive(link.to)
                    ? 'text-accent'
                    : 'text-white hover:text-accent'
                } after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-accent after:transition-transform after:duration-200 ${
                  isActive(link.to) ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 bg-accent hover:bg-accent-dark text-white font-black px-7 py-3 text-xs tracking-[0.15em] uppercase transition-all duration-200 hover:scale-105 shadow-lg shadow-accent/20"
            >
              FREE QUOTE
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden flex flex-col justify-center gap-[5px] w-10 h-10 items-center"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[2px] w-6 transition-all duration-300 ${
                menuOpen ? 'bg-accent rotate-45 translate-y-[7px]' : 'bg-white'
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-white transition-all duration-300 ${
                menuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-6 transition-all duration-300 ${
                menuOpen ? 'bg-accent -rotate-45 -translate-y-[7px]' : 'bg-white'
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-white/10 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-3 px-4 py-3.5 text-sm font-bold tracking-widest uppercase transition-all duration-200 ${
                  isActive(link.to)
                    ? 'text-accent bg-secondary border-l-2 border-accent'
                    : 'text-white hover:text-accent hover:bg-secondary hover:border-l-2 hover:border-accent border-l-2 border-transparent'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-3 pb-1">
              <Link
                to="/contact"
                className="block bg-accent hover:bg-accent-dark text-white font-black py-3 text-xs tracking-[0.15em] uppercase text-center transition-all duration-200"
              >
                GET FREE QUOTE
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
