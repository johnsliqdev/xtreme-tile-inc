import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

// ─── Reusable section label ───────────────────────────────────────────────────
const SectionLabel = ({ children, light = false }) => (
  <div className="flex items-center gap-3 mb-4">
    <span className="w-8 h-[2px] bg-accent" />
    <span className={`text-xs font-black tracking-[0.25em] uppercase ${light ? 'text-silver' : 'text-accent'}`}>
      {children}
    </span>
  </div>
)

// ─── Animated wrapper ─────────────────────────────────────────────────────────
const AnimatedSection = ({ children, delay = 0, className = '' }) => {
  const [ref, visible] = useScrollAnimation()
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  )
}

// ─── Service Card ─────────────────────────────────────────────────────────────
const ServiceCard = ({ icon, title, desc, delay }) => (
  <AnimatedSection delay={delay}>
    <div className="group bg-secondary border border-white/5 hover:border-accent/50 p-8 transition-all duration-300 hover:-translate-y-1">
      <div className="w-14 h-14 bg-accent/10 border border-accent/20 group-hover:bg-accent group-hover:border-accent flex items-center justify-center mb-6 transition-all duration-300">
        <div className="text-accent group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-white font-black text-lg mb-3 tracking-wide group-hover:text-accent transition-colors duration-300">{title}</h3>
      <p className="text-silver text-sm leading-relaxed">{desc}</p>
      <div className="mt-5 flex items-center gap-2 text-accent text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Learn More
        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  </AnimatedSection>
)

// ─── Project Card ─────────────────────────────────────────────────────────────
const ProjectCard = ({ image, title, category, delay }) => (
  <AnimatedSection delay={delay}>
    <div className="group relative overflow-hidden cursor-pointer">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-6">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
          <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">{category}</span>
          <h3 className="text-white font-black text-xl mt-1">{title}</h3>
          <div className="w-8 h-[2px] bg-accent mt-3" />
        </div>
      </div>
      {/* Red border on hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent transition-colors duration-400 pointer-events-none" />
    </div>
  </AnimatedSection>
)

// ─── Testimonial Card ─────────────────────────────────────────────────────────
const TestimonialCard = ({ quote, name, role, stars = 5, delay }) => (
  <AnimatedSection delay={delay}>
    <div className="bg-secondary border border-white/5 hover:border-accent/30 p-8 transition-all duration-300 relative">
      {/* Quote mark */}
      <div className="text-[6rem] leading-none text-accent/20 font-black absolute top-2 right-6 select-none">"</div>
      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {Array.from({ length: stars }).map((_, i) => (
          <svg key={i} className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
      <p className="text-white/90 text-sm leading-relaxed italic mb-6">"{quote}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-accent/20 border border-accent/30 flex items-center justify-center text-accent font-black text-sm">
          {name.charAt(0)}
        </div>
        <div>
          <div className="text-white font-bold text-sm">{name}</div>
          <div className="text-silver text-xs">{role}</div>
        </div>
      </div>
    </div>
  </AnimatedSection>
)

// ─── Icons ────────────────────────────────────────────────────────────────────
const icons = {
  home: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  building: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  kitchen: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  ),
  bath: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
      <line x1="10" x2="8" y1="5" y2="7" /><line x1="2" x2="22" y1="12" y2="12" />
      <line x1="7" x2="7" y1="19" y2="21" /><line x1="17" x2="17" y1="19" y2="21" />
    </svg>
  ),
  floor: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
    </svg>
  ),
  custom: (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
}

const services = [
  { icon: icons.home, title: 'Residential Tiling', desc: 'Complete tile solutions for your home — from elegant entryways to stunning living spaces that reflect your personal style.' },
  { icon: icons.building, title: 'Commercial Projects', desc: 'High-performance tile installations built to withstand heavy traffic while maintaining a professional, polished appearance.' },
  { icon: icons.kitchen, title: 'Kitchen Backsplashes', desc: 'Turn your kitchen into a showpiece with custom backsplash designs that combine beauty with practical durability.' },
  { icon: icons.bath, title: 'Bathroom Remodeling', desc: 'Transform ordinary bathrooms into spa-like retreats with precision tile work and premium materials.' },
  { icon: icons.floor, title: 'Floor Installation', desc: 'Expert floor tile installation — from porcelain and ceramic to natural stone — laid perfectly every time.' },
  { icon: icons.custom, title: 'Custom Tile Work', desc: 'Bespoke patterns, intricate mosaics, and signature designs that make your space completely one of a kind.' },
]

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1690603935238-b60582bcb273?auto=format&fit=crop&w=800&q=80',
    title: 'Luxury Master Bath',
    category: 'Bathroom',
  },
  {
    image: 'https://images.unsplash.com/photo-1756906838843-c80118e2416e?auto=format&fit=crop&w=800&q=80',
    title: 'Gourmet Kitchen Backsplash',
    category: 'Kitchen',
  },
  {
    image: 'https://images.unsplash.com/photo-1635247049885-0910fd28901b?auto=format&fit=crop&w=800&q=80',
    title: 'Marble Entry Floor',
    category: 'Flooring',
  },
  {
    image: 'https://images.unsplash.com/photo-1656646523907-97b094c7e63a?auto=format&fit=crop&w=800&q=80',
    title: 'Corporate Lobby',
    category: 'Commercial',
  },
]

const testimonials = [
  {
    quote: 'Xtreme Tile transformed our entire master bathroom with stunning marble tile work. The attention to detail was incredible — every grout line is perfect. Couldn\'t be happier with the result.',
    name: 'Sarah M.',
    role: 'Homeowner, Bel Air',
  },
  {
    quote: 'We hired Xtreme Tile for our restaurant renovation — 3,000 sq ft of commercial-grade flooring. Professional, punctual, and precise. Our kitchen and dining room look absolutely incredible.',
    name: 'James R.',
    role: 'Owner, Bistro 45',
  },
  {
    quote: 'Best tile contractor I\'ve worked with in 20 years of general contracting. The herringbone pattern flooring they installed in our client\'s home was flawless. Will absolutely use again.',
    name: 'Michael K.',
    role: 'General Contractor',
  },
]

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '15+', label: 'Years Experience' },
  { value: '100%', label: 'Satisfaction Rate' },
  { value: '50+', label: '5-Star Reviews' },
]

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="bg-primary">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1721564130772-c9ee561ab87b?auto=format&fit=crop&w=1920&q=80"
            alt="Luxury tiled bathroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="w-10 h-[1px] bg-accent" />
            <span className="text-accent text-xs font-black tracking-[0.3em] uppercase">Certified Tile Professionals</span>
            <span className="w-10 h-[1px] bg-accent" />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.95] tracking-tight text-shadow-lg mb-6">
            Transforming Spaces<br />
            <span className="text-accent">with Expert</span><br />
            Tile Installation
          </h1>

          <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mt-6 mb-10 text-shadow">
            Premium craftsmanship for residential and commercial projects.
            Your vision, delivered with precision and passion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-accent hover:bg-accent-dark text-white font-black px-10 py-4 text-sm tracking-[0.15em] uppercase transition-all duration-200 hover:scale-105 shadow-2xl shadow-accent/30"
            >
              Get Free Quote
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-white/70 hover:border-accent text-white hover:text-accent font-black px-10 py-4 text-sm tracking-[0.15em] uppercase transition-all duration-200 backdrop-blur-sm"
            >
              View Our Work
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-white/70 text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-white/70 to-transparent" />
          </div>
        </div>

        {/* Stats strip at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 bg-secondary/80 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {stats.map((stat) => (
                <div key={stat.label} className="py-5 px-6 text-center">
                  <div className="text-2xl sm:text-3xl font-black text-accent">{stat.value}</div>
                  <div className="text-silver text-xs tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ─────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedSection>
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              Expert Services for<br />
              <span className="text-accent">Every Space</span>
            </h2>
            <p className="text-silver text-base mt-5 max-w-xl mx-auto leading-relaxed">
              From intimate residential bathrooms to expansive commercial floors, we deliver flawless tile installations with unmatched precision.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 80} />
          ))}
        </div>

        <div className="text-center mt-12">
          <AnimatedSection>
            <Link
              to="/services"
              className="inline-flex items-center gap-3 border-2 border-accent text-accent hover:bg-accent hover:text-white font-black px-10 py-4 text-xs tracking-[0.15em] uppercase transition-all duration-200"
            >
              Explore All Services
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1547414857-c9f61632b250?auto=format&fit=crop&w=1920&q=80"
            alt="Premium ceramic tile texture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/92" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <SectionLabel>Why Choose Us</SectionLabel>
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Precision, Quality &<br />
                <span className="text-accent">Your Vision</span>
              </h2>
              <p className="text-white/85 mt-6 leading-relaxed">
                With over 15 years of hands-on experience, Xtreme Tile Inc. has built a reputation for exceptional craftsmanship and unwavering reliability. Every project is backed by our satisfaction guarantee.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  'Licensed & fully insured tile contractors',
                  'Premium materials from top manufacturers',
                  'On-time delivery, every project',
                  'Free consultation and detailed estimates',
                  '2-year workmanship warranty included',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-accent/10 border border-accent flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-white/90 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 mt-10 bg-accent hover:bg-accent-dark text-white font-black px-8 py-4 text-xs tracking-[0.15em] uppercase transition-all duration-200 hover:scale-105"
              >
                About Our Company
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </AnimatedSection>

            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '15+', label: 'Years in Business', sub: 'Since 2009' },
                { num: '500+', label: 'Projects Done', sub: 'Res. & Commercial' },
                { num: '98%', label: 'Client Retention', sub: 'Repeat customers' },
                { num: '2yr', label: 'Warranty', sub: 'On all work' },
              ].map((item, i) => (
                <AnimatedSection key={item.num} delay={i * 100}>
                  <div className="bg-secondary/80 border border-white/10 hover:border-accent/40 p-6 text-center transition-all duration-300 group">
                    <div className="text-4xl font-black text-accent group-hover:scale-110 transition-transform duration-300 inline-block">{item.num}</div>
                    <div className="text-white font-bold text-sm mt-2">{item.label}</div>
                    <div className="text-silver text-xs mt-1">{item.sub}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ─────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6">
          <AnimatedSection>
            <SectionLabel>Our Work</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              Featured <span className="text-accent">Projects</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <Link
              to="/portfolio"
              className="flex items-center gap-2 text-accent hover:text-white text-xs font-bold tracking-[0.2em] uppercase border-b border-accent pb-1 hover:border-white transition-all duration-200 whitespace-nowrap"
            >
              View All Projects
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} delay={i * 80} />
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
      <section className="bg-secondary/40 border-y border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <AnimatedSection>
              <SectionLabel>Client Reviews</SectionLabel>
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                What Our <span className="text-accent">Clients Say</span>
              </h2>
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} {...t} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-accent" />
        <div className="absolute inset-0 opacity-10">
          {/* Geometric tile pattern overlay */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
            backgroundSize: '40px 40px',
          }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Ready to Transform<br />Your Space?
            </h2>
            <p className="text-white/90 text-lg mt-5 leading-relaxed max-w-xl mx-auto">
              Get your free, no-obligation estimate today. We'll visit your site, discuss your vision, and deliver a detailed quote within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link
                to="/contact"
                className="bg-white text-accent hover:bg-primary hover:text-white font-black px-10 py-4 text-sm tracking-[0.15em] uppercase transition-all duration-200 hover:scale-105 shadow-2xl"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:+13235550147"
                className="border-2 border-white/70 hover:border-white text-white font-black px-10 py-4 text-sm tracking-[0.15em] uppercase transition-all duration-200"
              >
                Call (323) 555-0147
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
