import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

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

const SectionLabel = ({ children }) => (
  <div className="flex items-center gap-3 mb-4">
    <span className="w-8 h-[2px] bg-accent" />
    <span className="text-accent text-xs font-black tracking-[0.25em] uppercase">{children}</span>
  </div>
)

// ─── Page Hero ────────────────────────────────────────────────────────────────
const PageHero = ({ title, subtitle, image }) => (
  <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden pt-20">
    <div className="absolute inset-0">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/88" />
    </div>
    <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
      <div className="inline-flex items-center gap-3 mb-5">
        <span className="w-8 h-[1px] bg-accent" />
        <span className="text-accent text-xs font-black tracking-[0.3em] uppercase">Xtreme Tile Inc.</span>
        <span className="w-8 h-[1px] bg-accent" />
      </div>
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-none text-shadow-lg">
        {title}
      </h1>
      {subtitle && (
        <p className="text-white/85 text-lg mt-5 max-w-xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </div>
  </section>
)

const services = [
  {
    id: 'residential',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Residential Tiling',
    subtitle: 'Beautiful tile work for your home',
    description:
      'Your home deserves the best. Our residential tiling service covers every room and surface — from welcoming entryways to relaxing master bathrooms. We work closely with homeowners to understand their vision, recommend the perfect tile selections, and deliver installations that exceed expectations.',
    features: [
      'Living rooms and entryways',
      'Bedrooms and hallways',
      'Kitchen floors and backsplashes',
      'Bathrooms and wet rooms',
      'Patios and outdoor spaces',
      'Laundry rooms and mudrooms',
    ],
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80',
    highlight: 'Most popular service',
  },
  {
    id: 'commercial',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: 'Commercial Projects',
    subtitle: 'Built for high-traffic, built to impress',
    description:
      'Commercial spaces demand tile that looks stunning and performs under heavy use. Whether you\'re outfitting a hotel lobby, restaurant, office building, or retail space, our commercial team delivers large-scale tile installations with minimal disruption to your operations.',
    features: [
      'Hotel lobbies and corridors',
      'Restaurant kitchens and dining areas',
      'Office buildings and boardrooms',
      'Retail and showroom floors',
      'Healthcare facilities',
      'Shopping centers and malls',
    ],
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=800&q=80',
    highlight: 'ADA compliant installations',
  },
  {
    id: 'kitchen',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" />
        <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
      </svg>
    ),
    title: 'Kitchen Backsplashes',
    subtitle: 'The focal point your kitchen deserves',
    description:
      'A kitchen backsplash is more than function — it\'s the design statement of your kitchen. Our specialists help you choose from subway tile classics, bold geometric patterns, handcrafted Zellige tiles, and custom mosaics that turn your kitchen into a culinary showpiece.',
    features: [
      'Subway tile and metro patterns',
      'Handcrafted Zellige and Moroccan tile',
      'Custom mosaic designs',
      'Large-format slabs',
      'Herringbone and stacked patterns',
      'Full-height backsplashes to ceiling',
    ],
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
    highlight: 'Free design consultation',
  },
  {
    id: 'bathroom',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
        <line x1="10" x2="8" y1="5" y2="7" /><line x1="2" x2="22" y1="12" y2="12" />
      </svg>
    ),
    title: 'Bathroom Remodeling',
    subtitle: 'Transform your bathroom into a sanctuary',
    description:
      'The bathroom is where your day begins and ends. Our bathroom tile specialists create spa-inspired spaces that combine luxury aesthetics with practical waterproofing and easy maintenance. From walk-in showers to freestanding tub surrounds, we handle every detail.',
    features: [
      'Complete shower enclosures',
      'Freestanding and built-in tub surrounds',
      'Floor-to-ceiling wall tile',
      'Heated floor tile systems',
      'Wet room installations',
      'Niche and feature wall design',
    ],
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
    highlight: 'Waterproofing guaranteed',
  },
  {
    id: 'flooring',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    title: 'Floor Installation',
    subtitle: 'The foundation of beautiful spaces',
    description:
      'Floor tile sets the tone for an entire space. Our floor tile specialists bring expert-level precision to every square inch — from proper substrate preparation and leveling to perfectly aligned grout joints. We work with porcelain, ceramic, natural stone, and large-format tiles.',
    features: [
      'Porcelain and ceramic tile',
      'Natural stone (marble, travertine, slate)',
      'Large-format tile (up to 60"x120")',
      'Heated radiant floor systems',
      'Exterior and outdoor paving',
      'Subfloor preparation and waterproofing',
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    highlight: 'Laser-leveled installations',
  },
  {
    id: 'custom',
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Custom Tile Work',
    subtitle: 'One-of-a-kind designs, flawlessly executed',
    description:
      'For clients who want something truly unique, our custom tile division creates bespoke installations that are genuinely one-of-a-kind. From intricate Moroccan-inspired mosaics to bold geometric feature walls and hand-painted tile murals, our artisans can bring any creative vision to life.',
    features: [
      'Hand-cut mosaic murals',
      'Custom pattern design service',
      'Medallions and feature inlays',
      'Hand-painted decorative tiles',
      'Geometric and 3D tile installations',
      'Outdoor art installations',
    ],
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    highlight: 'Fully bespoke designs',
  },
]

const processSteps = [
  {
    num: '01',
    title: 'Free Consultation',
    desc: 'We visit your space, discuss your vision, take precise measurements, and answer all your questions — at no cost to you.',
  },
  {
    num: '02',
    title: 'Design & Quote',
    desc: 'Our team prepares a detailed proposal with material options, layout designs, and a transparent, itemized quote within 24 hours.',
  },
  {
    num: '03',
    title: 'Expert Installation',
    desc: 'Our licensed installers execute every detail with precision, keeping your space clean and communicating progress throughout.',
  },
  {
    num: '04',
    title: 'Final Walkthrough',
    desc: 'We do a thorough walkthrough with you, address any final touches, and ensure you\'re 100% satisfied before we\'re done.',
  },
]

export default function Services() {
  return (
    <div className="bg-primary">
      <PageHero
        title="Our Services"
        subtitle="Comprehensive tile installation solutions for residential and commercial projects of any size."
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80"
      />

      {/* ── SERVICE DETAIL CARDS ──────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
        {services.map((service, i) => (
          <div
            key={service.id}
            id={service.id}
            className={`grid lg:grid-cols-2 gap-14 items-center ${
              i % 2 !== 0 ? 'lg:grid-flow-dense' : ''
            }`}
          >
            {/* Image side */}
            <AnimatedSection delay={0} className={i % 2 !== 0 ? 'lg:col-start-2' : ''}>
              <div className="relative group">
                <div className="absolute -inset-3 border border-accent/0 group-hover:border-accent/40 transition-all duration-500" />
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-all duration-500" />
                </div>
                {service.highlight && (
                  <div className="absolute bottom-5 right-5 bg-accent px-4 py-2 text-white text-xs font-black tracking-widest uppercase">
                    {service.highlight}
                  </div>
                )}
              </div>
            </AnimatedSection>

            {/* Content side */}
            <AnimatedSection delay={150} className={i % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}>
              <div className="text-accent mb-6">{service.icon}</div>
              <SectionLabel>Service {String(i + 1).padStart(2, '0')}</SectionLabel>
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                {service.title}
              </h2>
              <p className="text-accent font-bold text-sm tracking-wide mt-2 mb-5">{service.subtitle}</p>
              <p className="text-silver leading-relaxed">{service.description}</p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-accent/10 border border-accent/40 flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-white text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 mt-10 bg-accent hover:bg-accent-dark text-white font-black px-8 py-4 text-xs tracking-[0.15em] uppercase transition-all duration-200 hover:scale-105"
              >
                Get a Quote for This Service
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </AnimatedSection>
          </div>
        ))}
      </div>

      {/* ── PROCESS SECTION ───────────────────────────────────────────────── */}
      <section className="bg-secondary/40 border-y border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection>
              <SectionLabel>How We Work</SectionLabel>
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                Our Simple <span className="text-accent">4-Step Process</span>
              </h2>
              <p className="text-silver mt-4 max-w-lg mx-auto">
                From first call to final reveal, we make the entire process smooth, transparent, and stress-free.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 100}>
                <div className="relative bg-secondary border border-white/5 hover:border-accent/40 p-8 transition-all duration-300 group">
                  {/* Connector line */}
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-[3.75rem] left-full w-6 h-[2px] bg-accent/30 z-10" />
                  )}
                  <div className="text-5xl font-black text-accent/20 group-hover:text-accent/40 transition-colors duration-300 mb-4 leading-none">
                    {step.num}
                  </div>
                  <h3 className="text-white font-black text-lg mb-3 group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-silver text-sm leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── MATERIALS SECTION ─────────────────────────────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <SectionLabel>Premium Materials</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Only the Finest<br />
              <span className="text-accent">Materials</span>
            </h2>
            <p className="text-silver mt-6 leading-relaxed">
              We source tiles from the world's top manufacturers including Porcelanosa, Marazzi, Dal-Tile, MSI, and Ann Sacks. Our relationships with suppliers mean access to the latest designs and exclusive collections.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {['Porcelain', 'Ceramic', 'Marble', 'Travertine', 'Quartzite', 'Slate', 'Mosaic Glass', 'Zellige'].map((m) => (
                <div key={m} className="bg-secondary border border-white/5 px-4 py-3 flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent flex-shrink-0" />
                  <span className="text-white text-sm font-semibold">{m}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="grid grid-cols-2 gap-3">
              {[
                'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=400&q=80',
                'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=400&q=80',
                'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80',
                'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=400&q=80',
              ].map((img, i) => (
                <div key={i} className="overflow-hidden aspect-square group">
                  <img
                    src={img}
                    alt="Tile material"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden bg-accent">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
          backgroundSize: '40px 40px',
        }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 text-lg mt-4 max-w-xl mx-auto">
              Contact us today for your free consultation and estimate.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 mt-8 bg-white text-accent hover:bg-primary hover:text-white font-black px-10 py-4 text-sm tracking-[0.15em] uppercase transition-all duration-200 hover:scale-105 shadow-2xl"
            >
              Schedule Free Consultation
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
