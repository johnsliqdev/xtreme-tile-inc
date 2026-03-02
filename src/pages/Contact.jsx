import { useState } from 'react'
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

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.58 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.7a16 16 0 0 0 5.85 5.85l.88-.88a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.28 16z" />
      </svg>
    ),
    label: 'Phone',
    value: '(323) 555-0147',
    href: 'tel:+13235550147',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Email',
    value: 'info@xtremetileinc.com',
    href: 'mailto:info@xtremetileinc.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Address',
    value: '1234 Tile Avenue, Suite 100\nLos Angeles, CA 90001',
    href: 'https://maps.google.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: 'Hours',
    value: 'Mon–Fri: 7:00 AM – 6:00 PM\nSat: 8:00 AM – 4:00 PM',
    href: null,
  },
]

const projectTypes = [
  { value: '', label: 'Select Project Type' },
  { value: 'kitchen', label: 'Kitchen Backsplash' },
  { value: 'bathroom', label: 'Bathroom Remodeling' },
  { value: 'flooring', label: 'Floor Installation' },
  { value: 'commercial', label: 'Commercial Project' },
  { value: 'residential', label: 'Full Residential' },
  { value: 'custom', label: 'Custom Tile Work' },
  { value: 'other', label: 'Other / Not Sure' },
]

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Name is required'
  if (!form.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address'
  }
  if (!form.projectType) errors.projectType = 'Please select a project type'
  if (!form.message.trim()) {
    errors.message = 'Message is required'
  } else if (form.message.trim().length < 20) {
    errors.message = 'Please provide a bit more detail (at least 20 characters)'
  }
  return errors
}

const InputField = ({ label, id, error, required, children }) => (
  <div>
    <label htmlFor={id} className="block text-xs font-black tracking-[0.15em] uppercase text-silver mb-2">
      {label}{required && <span className="text-accent ml-1">*</span>}
    </label>
    {children}
    {error && (
      <div className="flex items-center gap-1.5 mt-1.5">
        <svg className="w-3 h-3 text-accent flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        <p className="text-accent text-xs font-semibold">{error}</p>
      </div>
    )}
  </div>
)

const inputClass = (error) =>
  `w-full bg-secondary border ${
    error ? 'border-accent' : 'border-white/10 focus:border-accent'
  } text-white placeholder-silver/40 px-4 py-3.5 text-sm outline-none transition-colors duration-200 focus:bg-secondary/80`

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      // Scroll to first error
      const firstError = document.querySelector('[data-error="true"]')
      if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    setSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setSubmitting(false)
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', projectType: '', message: '' })
    setErrors({})
  }

  return (
    <div className="bg-primary">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[55vh] min-h-[380px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1920&q=80"
            alt="Terracotta tile floor"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/88" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-8 h-[1px] bg-accent" />
            <span className="text-accent text-xs font-black tracking-[0.3em] uppercase">Get In Touch</span>
            <span className="w-8 h-[1px] bg-accent" />
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-none text-shadow-lg">
            Contact Us
          </h1>
          <p className="text-white/85 text-lg mt-5 max-w-xl mx-auto leading-relaxed">
            Ready to start your project? Get your free, no-obligation estimate. We respond within 24 hours.
          </p>
        </div>
      </section>

      {/* ── QUICK CONTACT STRIP ───────────────────────────────────────────── */}
      <div className="bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
            <a href="tel:+13235550147" className="flex items-center gap-4 py-5 px-6 hover:bg-accent-dark transition-colors duration-200 group">
              <svg className="w-5 h-5 text-white/70 group-hover:text-white flex-shrink-0 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.58 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.7a16 16 0 0 0 5.85 5.85l.88-.88a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.28 16z" />
              </svg>
              <div>
                <div className="text-white/90 text-[10px] font-bold tracking-widest uppercase">Call Us</div>
                <div className="text-white font-black text-sm">(323) 555-0147</div>
              </div>
            </a>
            <a href="mailto:info@xtremetileinc.com" className="flex items-center gap-4 py-5 px-6 hover:bg-accent-dark transition-colors duration-200 group">
              <svg className="w-5 h-5 text-white/70 group-hover:text-white flex-shrink-0 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <div>
                <div className="text-white/90 text-[10px] font-bold tracking-widest uppercase">Email Us</div>
                <div className="text-white font-black text-sm">info@xtremetileinc.com</div>
              </div>
            </a>
            <div className="flex items-center gap-4 py-5 px-6">
              <svg className="w-5 h-5 text-white/70 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
              <div>
                <div className="text-white/90 text-[10px] font-bold tracking-widest uppercase">Hours</div>
                <div className="text-white font-black text-sm">Mon–Sat, 7AM–6PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ──────────────────────────────────────────────────── */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* ── FORM COLUMN ── */}
          <div className="lg:col-span-3">
            <AnimatedSection>
              <SectionLabel>Free Estimate</SectionLabel>
              <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-2">
                Get Your Free <span className="text-accent">Quote</span>
              </h2>
              <p className="text-silver text-sm mb-10">
                Fill out the form below and we'll get back to you within 24 hours with a detailed estimate.
              </p>

              {submitted ? (
                <div className="bg-secondary border border-accent/30 p-10 text-center">
                  <div className="w-16 h-16 bg-accent/10 border border-accent flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-white font-black text-2xl mb-3">Message Sent!</h3>
                  <p className="text-silver leading-relaxed max-w-md mx-auto">
                    Thank you for reaching out! We've received your request and will contact you within 24 hours with a detailed estimate.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 bg-accent hover:bg-accent-dark text-white font-black px-8 py-3 text-xs tracking-[0.15em] uppercase transition-all duration-200 hover:scale-105"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <InputField label="Full Name" id="name" error={errors.name} required>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        data-error={!!errors.name}
                        className={inputClass(errors.name)}
                      />
                    </InputField>

                    <InputField label="Email Address" id="email" error={errors.email} required>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        data-error={!!errors.email}
                        className={inputClass(errors.email)}
                      />
                    </InputField>
                  </div>

                  {/* Phone + Project Type */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <InputField label="Phone Number" id="phone" error={errors.phone}>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(323) 555-0000"
                        className={inputClass(errors.phone)}
                      />
                    </InputField>

                    <InputField label="Project Type" id="projectType" error={errors.projectType} required>
                      <select
                        id="projectType"
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        data-error={!!errors.projectType}
                        className={`${inputClass(errors.projectType)} appearance-none cursor-pointer`}
                      >
                        {projectTypes.map((opt) => (
                          <option key={opt.value} value={opt.value} disabled={!opt.value} className="bg-secondary text-white">
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </InputField>
                  </div>

                  {/* Message */}
                  <InputField label="Project Details" id="message" error={errors.message} required>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your project — location, approximate square footage, tile preferences, timeline, and any other details that would help us prepare your estimate..."
                      data-error={!!errors.message}
                      className={`${inputClass(errors.message)} resize-none`}
                    />
                  </InputField>

                  {/* How did you hear */}
                  <InputField label="How Did You Hear About Us?" id="referral" error={null}>
                    <select
                      id="referral"
                      name="referral"
                      className={inputClass(null) + ' appearance-none cursor-pointer'}
                    >
                      <option value="" className="bg-secondary">Select an option</option>
                      {['Google Search', 'Social Media', 'Friend/Family Referral', 'Yelp', 'Houzz', 'Contractor Referral', 'Drove By / Saw Our Work', 'Other'].map((o) => (
                        <option key={o} value={o} className="bg-secondary">{o}</option>
                      ))}
                    </select>
                  </InputField>

                  {/* Privacy note */}
                  <p className="text-silver text-xs leading-relaxed">
                    By submitting this form, you agree to be contacted by Xtreme Tile Inc. regarding your project. We never share your information with third parties.
                  </p>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className={`w-full bg-accent hover:bg-accent-dark text-white font-black py-4 text-sm tracking-[0.15em] uppercase transition-all duration-200 flex items-center justify-center gap-3 ${
                      submitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02] shadow-lg shadow-accent/20'
                    }`}
                  >
                    {submitting ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" strokeLinecap="round" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send My Quote Request
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>

          {/* ── INFO COLUMN ── */}
          <div className="lg:col-span-2 space-y-8">
            <AnimatedSection delay={150}>
              <SectionLabel>Contact Info</SectionLabel>
              <h2 className="text-3xl font-black text-white tracking-tight mb-8">
                Reach Us <span className="text-accent">Directly</span>
              </h2>

              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="group bg-secondary border border-white/5 hover:border-accent/30 p-5 transition-all duration-300 flex gap-4">
                    <div className="w-10 h-10 bg-accent/10 border border-accent/20 group-hover:bg-accent group-hover:border-accent flex items-center justify-center flex-shrink-0 transition-all duration-300 text-accent group-hover:text-white">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-silver text-[10px] font-black tracking-[0.2em] uppercase mb-1">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white font-semibold text-sm hover:text-accent transition-colors duration-200 whitespace-pre-line"
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel="noreferrer"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-white font-semibold text-sm whitespace-pre-line">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Why choose us for quote */}
            <AnimatedSection delay={250}>
              <div className="bg-secondary border border-white/5 p-6">
                <h3 className="text-white font-black text-base mb-4">Why Get a Quote from Us?</h3>
                <div className="space-y-3">
                  {[
                    'Free, no-obligation estimate',
                    'On-site visit to assess your space',
                    'Detailed itemized proposal',
                    'Multiple material options',
                    'Response within 24 hours',
                    '2-year workmanship warranty',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-accent/10 border border-accent/40 flex items-center justify-center flex-shrink-0">
                        <svg className="w-2.5 h-2.5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-silver text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Emergency contact */}
            <AnimatedSection delay={300}>
              <div className="bg-accent/10 border border-accent/30 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 bg-accent" />
                  <span className="text-accent text-xs font-black tracking-[0.2em] uppercase">Quick Response</span>
                </div>
                <p className="text-white/90 text-sm leading-relaxed">
                  Need urgent service? Call us directly at{' '}
                  <a href="tel:+13235550147" className="text-accent font-black hover:underline">
                    (323) 555-0147
                  </a>{' '}
                  and we'll prioritize your project.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── MAP SECTION ───────────────────────────────────────────────────── */}
      <section className="border-t border-white/5">
        <div className="relative h-80 bg-secondary overflow-hidden">
          {/* Decorative map placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(42,42,46,0.95) 0%, rgba(42,42,46,0.95) 100%),
                repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.03) 39px, rgba(255,255,255,0.03) 40px),
                repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.03) 39px, rgba(255,255,255,0.03) 40px)
              `,
              backgroundSize: '100% 100%, 40px 40px, 40px 40px',
            }}>
              {/* Map pin and label */}
              <div className="flex flex-col items-center justify-center h-full gap-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-accent flex items-center justify-center shadow-2xl shadow-accent/40 animate-bounce">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-accent rotate-45 -z-10" />
                </div>
                <div className="text-center">
                  <div className="text-white font-black text-lg">Xtreme Tile Inc.</div>
                  <div className="text-silver text-sm">1234 Tile Avenue, Los Angeles, CA 90001</div>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white text-xs font-black px-5 py-2.5 tracking-widest uppercase transition-all duration-200"
                  >
                    Open in Maps
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" strokeLinecap="round" strokeLinejoin="round" />
                      <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <AnimatedSection>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-4xl font-black text-white tracking-tight">
              Common <span className="text-accent">Questions</span>
            </h2>
          </AnimatedSection>
        </div>

        <div className="space-y-4">
          {[
            {
              q: 'How long does a tile installation take?',
              a: 'Most residential projects take 1–5 days depending on scope. A kitchen backsplash can be done in 1–2 days, while a full bathroom renovation may take 3–5 days. We\'ll give you a precise timeline in your estimate.',
            },
            {
              q: 'Do I need to purchase the tile before contacting you?',
              a: 'Not at all! We can help you select tile from our supplier network, or we can work with tiles you\'ve already purchased. Our design consultant is available to assist with material selection at no additional cost.',
            },
            {
              q: 'What\'s included in the free estimate?',
              a: 'Your free estimate includes an on-site visit, precise measurements, material recommendations, a detailed scope of work, and an itemized quote with no hidden fees.',
            },
            {
              q: 'Are you licensed and insured?',
              a: 'Yes. Xtreme Tile Inc. holds a California Contractor\'s License (#847201) and carries $2 million in general liability insurance plus full workers\' compensation coverage.',
            },
            {
              q: 'What warranty do you offer?',
              a: 'All our installations come with a 2-year workmanship warranty. If anything is wrong with our work, we\'ll fix it — free of charge. We also help navigate manufacturer warranties on materials.',
            },
          ].map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} delay={i * 60} />
          ))}
        </div>
      </section>
    </div>
  )
}

function FAQItem({ question, answer, delay }) {
  const [open, setOpen] = useState(false)
  const [ref, visible] = useScrollAnimation()

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className={`bg-secondary border transition-all duration-300 ${open ? 'border-accent/50' : 'border-white/5 hover:border-white/20'}`}>
        <button
          onClick={() => setOpen((o) => !o)}
          className="w-full flex items-center justify-between p-6 text-left gap-4"
        >
          <span className={`font-black text-sm sm:text-base tracking-wide transition-colors duration-200 ${open ? 'text-accent' : 'text-white'}`}>
            {question}
          </span>
          <div className={`w-8 h-8 bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open ? 'bg-accent border-accent rotate-45' : ''}`}>
            <svg className={`w-4 h-4 transition-colors duration-300 ${open ? 'text-white' : 'text-accent'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="12" y1="5" x2="12" y2="19" strokeLinecap="round" />
              <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" />
            </svg>
          </div>
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40' : 'max-h-0'}`}>
          <p className="text-silver text-sm leading-relaxed px-6 pb-6">{answer}</p>
        </div>
      </div>
    </div>
  )
}
