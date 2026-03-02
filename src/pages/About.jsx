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

const values = [
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Quality First',
    desc: 'We never cut corners. Every tile is set with precision, every grout joint is consistent, and every project meets our exacting quality standards.',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'On-Time Delivery',
    desc: 'We respect your time. Our projects are planned meticulously and delivered on schedule — because disruption to your life or business is always minimized.',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Client Partnership',
    desc: 'You\'re not just a client — you\'re a partner. We listen, collaborate, and communicate every step of the way to bring your exact vision to life.',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Integrity',
    desc: 'Transparent pricing, honest timelines, and no surprise charges. What we quote is what you pay — guaranteed.',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: 'Expert Craftsmanship',
    desc: 'Our installers are certified master tilers with decades of combined experience. We bring artisan-level skill to every single project.',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
    title: 'Premium Materials',
    desc: 'We source only top-tier tiles from the world\'s finest manufacturers, ensuring every installation is built to last a lifetime.',
  },
]

const team = [
  {
    name: 'Carlos Xtreme',
    role: 'Founder & Master Installer',
    bio: '20+ years of tile installation experience. Carlos founded Xtreme Tile with the vision of bringing world-class craftsmanship to Southern California.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80',
    cert: 'Certified Tile Council of America',
  },
  {
    name: 'Maria Rodriguez',
    role: 'Project Manager',
    bio: 'With a background in architecture and 12 years in construction management, Maria ensures every project runs smoothly from start to finish.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    cert: 'PMP Certified',
  },
  {
    name: 'David Chen',
    role: 'Lead Commercial Installer',
    bio: 'Specializing in large-scale commercial tile installations, David has completed over 200 commercial projects across Los Angeles County.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    cert: 'OSHA 30 Certified',
  },
  {
    name: 'Aisha Johnson',
    role: 'Design Consultant',
    bio: 'A trained interior designer with a passion for tile, Aisha helps clients navigate thousands of tile options to find the perfect combination.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    cert: 'NCIDQ Certified Designer',
  },
]

const milestones = [
  { year: '2009', event: 'Xtreme Tile Inc. founded in Los Angeles, CA' },
  { year: '2012', event: 'Expanded to full commercial tile division' },
  { year: '2015', event: 'Completed 200th project — an LA luxury hotel' },
  { year: '2018', event: 'Launched custom tile design consultation service' },
  { year: '2021', event: 'Awarded "Best Tile Contractor" — LA Business Journal' },
  { year: '2024', event: '500+ projects completed, growing team of 25' },
]

export default function About() {
  return (
    <div className="bg-primary">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
            alt="Professional tiler at work"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary/82" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-8 h-[1px] bg-accent" />
            <span className="text-accent text-xs font-black tracking-[0.3em] uppercase">Our Story</span>
            <span className="w-8 h-[1px] bg-accent" />
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-none text-shadow-lg">
            About Us
          </h1>
          <p className="text-silver text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            15 years of precision, passion, and craftsmanship — transforming spaces across Southern California one tile at a time.
          </p>
        </div>
      </section>

      {/* ── COMPANY STORY ─────────────────────────────────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <SectionLabel>Who We Are</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Built on Craft,<br />
              <span className="text-accent">Driven by Excellence</span>
            </h2>
            <div className="space-y-5 mt-8 text-silver leading-relaxed">
              <p>
                Xtreme Tile Inc. was founded in 2009 by master tiler Carlos with a singular mission: to bring world-class tile craftsmanship to every project, big or small. What started as a one-man operation out of a pickup truck has grown into one of Los Angeles County's most respected tile installation companies.
              </p>
              <p>
                Over the past 15 years, we've completed more than 500 projects ranging from intimate residential bathrooms to expansive commercial spaces. Our team of licensed, certified installers has laid over 3 million square feet of tile across Southern California.
              </p>
              <p>
                We believe tile installation is more than a trade — it's an art form. Every project we take on receives the same level of care, precision, and dedication, whether it's a small kitchen backsplash or a full hotel renovation. That philosophy has earned us a reputation that speaks for itself.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 mt-10 bg-accent hover:bg-accent-dark text-white font-black px-8 py-4 text-xs tracking-[0.15em] uppercase transition-all duration-200 hover:scale-105"
            >
              Work With Us
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80"
                  alt="Tile installation in progress"
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="flex flex-col gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80"
                    alt="Beautiful tile work"
                    className="w-full aspect-square object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=400&q=80"
                    alt="Luxury bathroom"
                    className="w-full aspect-square object-cover"
                  />
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-accent p-6 shadow-2xl">
                <div className="text-4xl font-black text-white">15+</div>
                <div className="text-white/80 text-sm font-bold tracking-wide">Years of<br />Excellence</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────────────────────────── */}
      <section className="bg-secondary/30 border-y border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection>
              <SectionLabel>What We Stand For</SectionLabel>
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                Our Core <span className="text-accent">Values</span>
              </h2>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, i) => (
              <AnimatedSection key={val.title} delay={i * 80}>
                <div className="group bg-secondary border border-white/5 hover:border-accent/40 p-8 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-accent/10 border border-accent/20 group-hover:bg-accent group-hover:border-accent flex items-center justify-center mb-6 transition-all duration-300 text-accent group-hover:text-white">
                    {val.icon}
                  </div>
                  <h3 className="text-white font-black text-lg mb-3 group-hover:text-accent transition-colors duration-300">
                    {val.title}
                  </h3>
                  <p className="text-silver text-sm leading-relaxed">{val.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ──────────────────────────────────────────────────────── */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimatedSection>
            <SectionLabel>Our Journey</SectionLabel>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              15 Years of <span className="text-accent">Milestones</span>
            </h2>
          </AnimatedSection>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-white/10" />

          <div className="space-y-10">
            {milestones.map((m, i) => (
              <AnimatedSection key={m.year} delay={i * 80}>
                <div className={`relative flex items-center gap-8 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className="absolute left-4 sm:left-1/2 w-4 h-4 bg-accent border-2 border-primary -translate-x-[7px] sm:-translate-x-1/2 z-10 flex-shrink-0" />

                  {/* Content */}
                  <div className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] bg-secondary border border-white/5 hover:border-accent/30 p-6 transition-all duration-300 group ${
                    i % 2 === 0 ? 'sm:mr-8 sm:text-right' : 'sm:ml-8'
                  }`}>
                    <div className="text-accent font-black text-2xl group-hover:scale-110 transition-transform duration-300 inline-block">
                      {m.year}
                    </div>
                    <p className="text-white/90 text-sm mt-1 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ──────────────────────────────────────────────────────────── */}
      <section className="bg-secondary/30 border-y border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection>
              <SectionLabel>The People</SectionLabel>
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                Meet Our <span className="text-accent">Team</span>
              </h2>
              <p className="text-silver mt-4 max-w-lg mx-auto">
                A dedicated crew of certified professionals who take pride in every project they touch.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 80}>
                <div className="group bg-secondary border border-white/5 hover:border-accent/40 overflow-hidden transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 relative">
                    <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[3px] bg-accent transition-all duration-400" />
                    <h3 className="text-white font-black text-base group-hover:text-accent transition-colors duration-300">
                      {member.name}
                    </h3>
                    <div className="text-accent text-xs font-bold tracking-wide mt-1 mb-3">{member.role}</div>
                    <p className="text-silver text-xs leading-relaxed mb-3">{member.bio}</p>
                    <div className="bg-accent/10 border border-accent/20 px-2 py-1 text-[10px] text-accent font-bold tracking-wider uppercase">
                      {member.cert}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS & PARTNERS ─────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12">
            <SectionLabel>Credentials</SectionLabel>
            <h2 className="text-4xl font-black text-white tracking-tight">
              Licensed, Insured & <span className="text-accent">Certified</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { name: 'TCNA Member', sub: 'Tile Council of North America' },
              { name: 'NTCA Member', sub: 'National Tile Contractors Assoc.' },
              { name: 'CA Licensed', sub: 'Contractor License #847201' },
              { name: '$2M Insured', sub: 'General Liability & Workers Comp' },
            ].map((cert, i) => (
              <AnimatedSection key={cert.name} delay={i * 80}>
                <div className="bg-secondary border border-white/5 hover:border-accent/30 p-6 text-center transition-all duration-300 group h-full">
                  <div className="w-12 h-12 bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                    <svg className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div className="text-white font-black text-sm">{cert.name}</div>
                  <div className="text-silver text-xs mt-1 leading-relaxed">{cert.sub}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden bg-accent">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
          backgroundSize: '40px 40px',
        }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <AnimatedSection>
            <h2 className="text-4xl sm:text-5xl font-black text-white">
              Let's Build Something<br />Beautiful Together
            </h2>
            <p className="text-white/80 text-lg mt-5 max-w-xl mx-auto">
              Ready to start your tile project? Contact us for a free, no-obligation consultation and estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link
                to="/contact"
                className="bg-white text-accent hover:bg-primary hover:text-white font-black px-10 py-4 text-sm tracking-[0.15em] uppercase transition-all duration-200 hover:scale-105 shadow-2xl"
              >
                Get Free Quote
              </Link>
              <Link
                to="/portfolio"
                className="border-2 border-white/70 hover:border-white text-white font-black px-10 py-4 text-sm tracking-[0.15em] uppercase transition-all duration-200"
              >
                View Our Work
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
