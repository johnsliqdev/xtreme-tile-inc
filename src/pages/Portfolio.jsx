import { useState } from 'react'
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

const PageHero = () => (
  <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden pt-20">
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1920&q=80"
        alt="Portfolio"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/88" />
    </div>
    <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
      <div className="inline-flex items-center gap-3 mb-5">
        <span className="w-8 h-[1px] bg-accent" />
        <span className="text-accent text-xs font-black tracking-[0.3em] uppercase">Our Work</span>
        <span className="w-8 h-[1px] bg-accent" />
      </div>
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-none text-shadow-lg">
        Our Portfolio
      </h1>
      <p className="text-white/85 text-lg mt-5 max-w-xl mx-auto leading-relaxed">
        Browse our completed projects — each one a testament to our craftsmanship, attention to detail, and commitment to excellence.
      </p>
    </div>
  </section>
)

const categories = ['All', 'Residential', 'Commercial', 'Kitchen', 'Bathroom', 'Flooring']

const projects = [
  {
    id: 1,
    title: 'Luxury Master Bathroom',
    category: 'Bathroom',
    location: 'Beverly Hills, CA',
    description: 'Full bathroom renovation featuring floor-to-ceiling Calacatta marble tile, custom niche shelving, and a frameless walk-in shower.',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80',
    tags: ['Marble', 'Shower', 'Full Renovation'],
  },
  {
    id: 2,
    title: 'Gourmet Kitchen Backsplash',
    category: 'Kitchen',
    location: 'Bel Air, CA',
    description: 'Handcrafted Zellige tile backsplash in a rich emerald green, installed floor-to-ceiling with custom metallic grout lines.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
    tags: ['Zellige', 'Backsplash', 'Custom'],
  },
  {
    id: 3,
    title: 'Marble Entry Hall',
    category: 'Residential',
    location: 'Malibu, CA',
    description: 'Grand entry featuring large-format Bianco Carrara marble tiles in a classic offset pattern with brass inlay accents.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    tags: ['Marble', 'Large Format', 'Entry'],
  },
  {
    id: 4,
    title: 'Modern Spa Shower',
    category: 'Bathroom',
    location: 'Santa Monica, CA',
    description: 'Minimalist wet room with 60"x120" porcelain slabs, linear drain, and seamless glass enclosure for a true spa experience.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
    tags: ['Porcelain Slab', 'Wet Room', 'Modern'],
  },
  {
    id: 5,
    title: 'Corporate Headquarters',
    category: 'Commercial',
    location: 'Downtown LA',
    description: '8,000 sq ft of commercial-grade porcelain flooring installed across two floors with precision leveling and coordinated grout color.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    tags: ['Commercial', 'Large Scale', 'Porcelain'],
  },
  {
    id: 6,
    title: 'Mosaic Feature Wall',
    category: 'Residential',
    location: 'Venice Beach, CA',
    description: 'Hand-cut glass mosaic feature wall serving as the artistic centerpiece of a contemporary loft living room.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    tags: ['Mosaic', 'Feature Wall', 'Custom Art'],
  },
  {
    id: 7,
    title: 'Herringbone Hardwood-Look',
    category: 'Flooring',
    location: 'Pasadena, CA',
    description: 'Porcelain wood-look tile in a classic herringbone pattern spanning the entire ground floor of a craftsman bungalow.',
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=800&q=80',
    tags: ['Herringbone', 'Wood-Look', 'Flooring'],
  },
  {
    id: 8,
    title: 'Terracotta Patio & Pool Deck',
    category: 'Residential',
    location: 'Calabasas, CA',
    description: 'Authentic terracotta tile installation covering a 2,200 sq ft outdoor entertaining area including pool coping and fire pit surround.',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80',
    tags: ['Terracotta', 'Outdoor', 'Pool Deck'],
  },
  {
    id: 9,
    title: 'Subway Tile Café',
    category: 'Commercial',
    location: 'Silver Lake, CA',
    description: 'Floor-to-ceiling white subway tile with contrasting dark grout, creating a timeless aesthetic for this neighborhood coffee shop.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
    tags: ['Subway Tile', 'Commercial', 'Café'],
  },
]

const beforeAfter = [
  {
    before: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=700&q=80',
    after: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=700&q=80',
    title: 'Master Bathroom Renovation',
    description: 'Complete transformation from dated 1990s pink tile to a modern marble spa sanctuary.',
  },
  {
    before: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=700&q=80',
    after: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=700&q=80',
    title: 'Kitchen Backsplash Upgrade',
    description: 'Replacing plain painted drywall with a stunning custom tile backsplash that redefines the kitchen.',
  },
]

// ─── Project Card Component ────────────────────────────────────────────────────
const ProjectCard = ({ project, delay }) => {
  const [ref, visible] = useScrollAnimation()
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-600 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="group relative overflow-hidden bg-secondary cursor-pointer border border-white/5 hover:border-accent/50 transition-colors duration-300">
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

          {/* Category badge */}
          <div className="absolute top-4 left-4 bg-accent px-3 py-1 text-white text-[10px] font-black tracking-[0.15em] uppercase">
            {project.category}
          </div>

          {/* Hover content */}
          <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
            <p className="text-silver text-xs leading-relaxed">{project.description}</p>
            <div className="flex gap-2 mt-3 flex-wrap">
              {project.tags.map((tag) => (
                <span key={tag} className="bg-white/10 text-silver text-[10px] px-2 py-1 font-semibold tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Card footer */}
        <div className="p-5">
          <h3 className="text-white font-black text-base group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <svg className="w-3 h-3 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
            <span className="text-silver text-xs">{project.location}</span>
          </div>
        </div>

        {/* Red accent line on hover */}
        <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[3px] bg-accent transition-all duration-400" />
      </div>
    </div>
  )
}

// ─── Before/After Component ────────────────────────────────────────────────────
const BeforeAfterCard = ({ item, delay }) => {
  const [showAfter, setShowAfter] = useState(true)
  const [ref, visible] = useScrollAnimation()

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="bg-secondary border border-white/5 overflow-hidden">
        {/* Image with toggle */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={showAfter ? item.after : item.before}
            alt={showAfter ? 'After' : 'Before'}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-primary/20" />

          {/* Before / After toggle */}
          <div className="absolute top-4 left-4 flex">
            <button
              onClick={() => setShowAfter(false)}
              className={`px-4 py-2 text-xs font-black tracking-widest uppercase transition-all duration-200 ${
                !showAfter ? 'bg-accent text-white' : 'bg-primary/70 text-silver hover:text-white'
              }`}
            >
              Before
            </button>
            <button
              onClick={() => setShowAfter(true)}
              className={`px-4 py-2 text-xs font-black tracking-widest uppercase transition-all duration-200 ${
                showAfter ? 'bg-accent text-white' : 'bg-primary/70 text-silver hover:text-white'
              }`}
            >
              After
            </button>
          </div>

          <div className={`absolute bottom-4 right-4 px-3 py-1.5 text-[10px] font-black tracking-widest uppercase ${
            showAfter ? 'bg-accent text-white' : 'bg-secondary text-silver border border-white/20'
          }`}>
            {showAfter ? 'AFTER' : 'BEFORE'}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-white font-black text-lg">{item.title}</h3>
          <p className="text-silver text-sm mt-2 leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <div className="bg-primary">
      <PageHero />

      {/* ── PROJECT GALLERY ───────────────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <AnimatedSection>
            <SectionLabel>Gallery</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              Browse <span className="text-accent">All Projects</span>
            </h2>
          </AnimatedSection>
        </div>

        {/* Filter Buttons */}
        <AnimatedSection>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 text-xs font-black tracking-[0.15em] uppercase transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-accent text-white shadow-lg shadow-accent/30'
                    : 'bg-secondary border border-white/10 text-silver hover:border-accent/50 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 60} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-silver text-lg">No projects in this category yet.</p>
          </div>
        )}
      </section>

      {/* ── BEFORE & AFTER ────────────────────────────────────────────────── */}
      <section className="bg-secondary/30 border-y border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <AnimatedSection>
              <SectionLabel>Transformations</SectionLabel>
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                Before & <span className="text-accent">After</span>
              </h2>
              <p className="text-silver mt-4 max-w-lg mx-auto">
                Click the Before/After buttons to see the dramatic transformations we deliver for our clients.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beforeAfter.map((item, i) => (
              <BeforeAfterCard key={item.title} item={item} delay={i * 150} />
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '500+', label: 'Projects Completed', icon: '🏆' },
            { value: '15+', label: 'Years Experience', icon: '⚡' },
            { value: '50+', label: '5-Star Reviews', icon: '⭐' },
            { value: '3M+', label: 'Sq Ft Installed', icon: '📐' },
          ].map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 80}>
              <div className="bg-secondary border border-white/5 hover:border-accent/40 p-8 text-center transition-all duration-300 group">
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-4xl font-black text-accent group-hover:scale-110 transition-transform duration-300 inline-block">
                  {stat.value}
                </div>
                <div className="text-silver text-sm mt-2 font-semibold">{stat.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-accent py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              Love What You See?
            </h2>
            <p className="text-white/90 text-lg mt-4">
              Let's create something amazing for your space. Get your free quote today.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 mt-8 bg-white text-accent hover:bg-primary hover:text-white font-black px-10 py-4 text-sm tracking-[0.15em] uppercase transition-all duration-200 hover:scale-105 shadow-2xl"
            >
              Start Your Project
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
