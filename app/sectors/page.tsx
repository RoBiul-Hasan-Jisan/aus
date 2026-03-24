'use client'

import HeroSection from '@/components/hero-section'
import { Shield, BarChart3, Zap } from 'lucide-react'

export default function SectorsPage() {
  const sectors = [
    {
      icon: Shield,
      title: 'Insurance & P&I',
      description: 'Specialized maritime consulting for the insurance and mutual insurance market.',
      services: [
        'Marine insurance surveys',
        'Claims investigation and assessment',
        'Pre-placement technical surveys',
        'Loss prevention consulting',
        'Expert witness services',
        'P&I club assistance',
      ],
      clients: 'Insurance companies, mutual associations, brokers, and loss adjusters',
    },
    {
      icon: BarChart3,
      title: 'Mining & Bulk Cargo',
      description: 'Comprehensive services for dry bulk shipping and specialized cargo operations.',
      services: [
        'Bulk carrier inspections',
        'Cargo hold surveys',
        'Loading and discharge supervision',
        'Cargo damage investigation',
        'Vessel fitness assessment',
        'Operational compliance support',
      ],
      clients: 'Mining operators, commodity traders, bulk shipping companies, and cargo interests',
    },
    {
      icon: Zap,
      title: 'Oil & Gas',
      description: 'Expert consulting for maritime energy operations and offshore activities.',
      services: [
        'Offshore vessel inspections',
        'Pipeline and installation surveys',
        'Spill response consulting',
        'Environmental compliance',
        'Incident investigation',
        'Regulatory compliance support',
      ],
      clients: 'Oil majors, energy companies, offshore contractors, and maritime operators',
    },
  ]

  return (
    <div className="w-full">
      {/* Hero */}
      <HeroSection
        title="Industry Sectors"
        subtitle="AUSPAC provides specialized maritime consulting services across key industry sectors."
      />

      {/* Sectors Detail */}
      <section className="w-full py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sectors.map((sector, index) => {
              const Icon = sector.icon
              return (
                <div
                  key={index}
                  className="rounded-lg border border-border bg-card overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-8 sm:p-12">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-4 rounded-lg bg-primary/10 flex-shrink-0">
                        <Icon size={32} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                          {sector.title}
                        </h3>
                        <p className="text-lg text-foreground/70">{sector.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                      <div>
                        <h4 className="font-bold text-foreground mb-4">Services Offered:</h4>
                        <ul className="space-y-2">
                          {sector.services.map((service, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                              <span className="text-foreground/80">{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                        <h4 className="font-bold text-foreground mb-2">Primary Clients:</h4>
                        <p className="text-foreground/70 leading-relaxed">
                          {sector.clients}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Specialization */}
      <section className="w-full py-16 sm:py-24 bg-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Sector Specialization?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Deep Knowledge',
                description: 'We understand the unique operational, regulatory, and commercial requirements of each sector.',
              },
              {
                title: 'Industry Standards',
                description: 'Our teams are familiar with sector-specific standards, practices, and regulatory frameworks.',
              },
              {
                title: 'Trusted Relationships',
                description: 'Years of experience within each sector have built trusted relationships with industry players.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-lg border border-border bg-card text-center"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 sm:py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Working in Your Sector?</h2>
          <p className="text-lg opacity-90 mb-8">Let's discuss how AUSPAC can support your operations.</p>
          <a
            href="/contact"
            className="inline-block bg-primary-foreground hover:bg-primary-foreground/90 text-primary px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Our Sector Experts
          </a>
        </div>
      </section>
    </div>
  )
}
