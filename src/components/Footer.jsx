import { Link } from 'react-router-dom'

const Logo = () => (
  <Link to="/" className="flex items-center gap-3 group">
    <div className="relative w-8 h-8 flex-shrink-0">
      <div className="absolute inset-0 bg-accent rotate-45" />
      <div className="absolute inset-[5px] bg-primary rotate-45" />
    </div>
    <div className="flex flex-col leading-none">
      <div className="flex items-baseline">
        <span className="text-xl font-black text-white tracking-[0.08em]">XTREME</span>
        <span className="text-xl font-black text-silver tracking-[0.08em] ml-2">TILE</span>
      </div>
      <span className="text-[0.5rem] text-silver tracking-[0.25em] font-semibold">INC.</span>
    </div>
  </Link>
)

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Our Portfolio' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
]

const services = [
  'Residential Tiling',
  'Commercial Projects',
  'Kitchen Backsplashes',
  'Bathroom Remodeling',
  'Floor Installation',
  'Custom Tile Work',
]

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-5 text-silver text-sm leading-relaxed">
              Transforming spaces with expert tile installation. Premium craftsmanship for residential and commercial projects since 2009.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {['FB', 'IG', 'YT', 'IN'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 bg-secondary hover:bg-accent border border-white/10 hover:border-accent flex items-center justify-center text-silver hover:text-white text-xs font-bold tracking-wider transition-all duration-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-black text-xs tracking-[0.2em] uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-accent" />
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-silver hover:text-accent text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-accent transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-black text-xs tracking-[0.2em] uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-accent" />
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-silver hover:text-accent text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-accent transition-all duration-200" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-black text-xs tracking-[0.2em] uppercase mb-5 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-accent" />
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#D32F2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span className="text-silver text-sm leading-relaxed">
                  1234 Tile Avenue, Suite 100<br />Los Angeles, CA 90001
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <div className="w-5 h-5 flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#D32F2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.58 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.7a16 16 0 0 0 5.85 5.85l.88-.88a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.28 16z" />
                  </svg>
                </div>
                <a href="tel:+13235550147" className="text-silver hover:text-accent text-sm transition-colors duration-200">
                  (323) 555-0147
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <div className="w-5 h-5 flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#D32F2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <a href="mailto:info@xtremetileinc.com" className="text-silver hover:text-accent text-sm transition-colors duration-200">
                  info@xtremetileinc.com
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#D32F2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <span className="text-silver text-sm leading-relaxed">
                  Mon–Fri: 7:00 AM – 6:00 PM<br />
                  Sat: 8:00 AM – 4:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-silver text-xs tracking-wide">
            © {new Date().getFullYear()} Xtreme Tile Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
              <a key={item} href="#" className="text-silver hover:text-accent text-xs tracking-wide transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
