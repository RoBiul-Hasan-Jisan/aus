'use client'

import HeroSection from '@/components/hero-section'
import { CheckCircle2, Award, Users, Globe, Zap, BarChart3 } from 'lucide-react'

export default function WhyAusPacPage() {
  const reasons = [
    {
      icon: Award,
      title: 'Technical Authority',
      description: 'Decades of combined maritime industry experience with deep technical expertise across all vessel types and operations.',
    },
    {
      icon: CheckCircle2,
      title: 'Independence',
      description: 'Completely independent consultancy free from commercial conflicts of interest, ensuring impartial expert opinions.',
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Worldwide service capability with local presence and knowledge of international maritime regulations and practices.',
    },
    {
      icon: Zap,
      title: 'Rapid Response',
      description: 'Quick mobilization and immediate availability for urgent assessments, investigations, and emergency situations.',
    },
    {
      icon: BarChart3,
      title: 'Commercial Awareness',
      description: 'Deep understanding of shipping industry economics and commercial pressures affecting maritime operations.',
    },
    {
      icon: Users,
      title: 'Trusted Partner',
      description: 'Recognized by leading insurers, operators, and legal firms as a reliable and professional service provider.',
    },
  ]

  const testimonials = [
    {
      quote: 'AUSPAC provided thorough and impartial assessment that helped us understand the true cause of the incident.',
      source: 'P&I Club Manager',
    },
    {
      quote: 'Their rapid response capabilities and technical expertise made all the difference in our time-sensitive claim.',
      source: 'Insurance Director',
    },
    {
      quote: 'Highly professional team with excellent understanding of our operational requirements and regulatory environment.',
      source: 'Shipping Company Operations Manager',
    },
  ]

  return (
    <div className="w-full">
      {/* Hero */}
      <HeroSection
        title="Why Choose AUSPAC?"
        subtitle="Discover what makes us the preferred maritime consulting partner for leading companies worldwide."
      />

      {/* Key Reasons */}
      <section className="w-full py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <div
                  key={index}
                  className="p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-all group"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Competitive Positioning */}
      <section className="w-full py-16 sm:py-24 bg-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6">Our Approach</h3>
              <ul className="space-y-4">
                {[
                  'Thorough, meticulous analysis',
                  'Clear, professional documentation',
                  'Practical, actionable recommendations',
                  'Responsive client communication',
                  'Expert testimony when required',
                  'Long-term relationship building',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary/5 rounded-lg p-8 border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-6">Client Benefits</h3>
              <ul className="space-y-4">
                {[
                  'Reduced liability exposure',
                  'Better loss control',
                  'Improved decision making',
                  'Compliance assurance',
                  'Industry best practices',
                  'Peace of mind',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="w-full py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Track Record</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                metric: '15+',
                label: 'Years of Maritime Experience',
              },
              {
                metric: '500+',
                label: 'Successful Engagements',
              },
              {
                metric: '100+',
                label: 'Vessels Surveyed Annually',
              },
              {
                metric: '40+',
                label: 'Countries Served',
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-border bg-card text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.metric}</div>
                <p className="text-foreground/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 sm:py-24 bg-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">What Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-lg border border-border bg-card"
              >
                <p className="text-foreground/70 mb-4 italic">"{testimonial.quote}"</p>
                <p className="text-sm font-semibold text-primary">
                  {testimonial.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 sm:py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner with AUSPAC?</h2>
          <p className="text-lg opacity-90 mb-8">Contact us to discuss how we can support your maritime needs.</p>
          <a
            href="/contact"
            className="inline-block bg-primary-foreground hover:bg-primary-foreground/90 text-primary px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}
