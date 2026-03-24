'use client'

import HeroSection from '@/components/hero-section'
import { Shield, AlertTriangle, BarChart3, Anchor, Waves, Zap } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: Shield,
      title: 'Marine Surveys & Inspections',
      description: 'Comprehensive vessel assessments covering structural condition, mechanical systems, and cargo suitability.',
      details: [
        'Pre-purchase and pre-sale surveys',
        'Condition surveys for insurance purposes',
        'Damage assessments',
        'Holds and tank inspections',
        'Equipment and machinery surveys',
      ],
    },
    {
      icon: AlertTriangle,
      title: 'Casualty Investigation',
      description: 'Expert investigation of maritime incidents with detailed analysis and comprehensive reporting.',
      details: [
        'Accident scene investigation',
        'Technical root cause analysis',
        'Detailed incident reporting',
        'Contributing factor identification',
        'Recommendations for prevention',
      ],
    },
    {
      icon: BarChart3,
      title: 'Claims Assessment',
      description: 'Professional evaluation of insurance claims and loss assessments with impartial technical expertise.',
      details: [
        'Claim investigation and analysis',
        'Damage quantification',
        'Liability determination',
        'Repair cost evaluation',
        'Settlement recommendations',
      ],
    },
    {
      icon: Anchor,
      title: 'Regulatory Compliance',
      description: 'Guidance on international maritime regulations and compliance with classification standards.',
      details: [
        'IMO regulation compliance',
        'Classification society requirements',
        'Flag state regulations',
        'Port state control issues',
        'Audit and certification support',
      ],
    },
    {
      icon: Waves,
      title: 'Risk Management',
      description: 'Strategic assessment and mitigation of maritime operational risks and vulnerabilities.',
      details: [
        'Risk identification and analysis',
        'Safety management review',
        'Environmental compliance',
        'Operational audits',
        'Risk reduction strategies',
      ],
    },
    {
      icon: Zap,
      title: 'Expert Witness Services',
      description: 'Qualified expert testimony for maritime disputes, insurance litigation, and legal proceedings.',
      details: [
        'Expert report preparation',
        'Court testimony',
        'Deposition services',
        'Independent technical assessment',
        'Professional expert opinion',
      ],
    },
  ]

  return (
    <div className="w-full">
      {/* Hero */}
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive maritime consulting services tailored to your specific needs."
      />

      {/* Services Detail */}
      <section className="w-full py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start pb-16 border-b border-border last:border-b-0 last:pb-0"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon size={28} className="text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-foreground/70 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-6 border border-border">
                    <h4 className="font-bold text-foreground mb-4">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-foreground/80 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-16 sm:py-24 bg-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Engagement',
                description: 'Initial consultation to understand your requirements and scope',
              },
              {
                step: '02',
                title: 'Assessment',
                description: 'Detailed technical analysis and investigation of the matter',
              },
              {
                step: '03',
                title: 'Documentation',
                description: 'Comprehensive reporting with findings and recommendations',
              },
              {
                step: '04',
                title: 'Support',
                description: 'Ongoing consultation and expert testimony as needed',
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="p-6 rounded-lg border border-border bg-card text-center">
                  <div className="text-4xl font-bold text-primary/20 mb-2">{item.step}</div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/70">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary/30 text-xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-16 sm:py-20 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Professional Maritime Services?</h2>
          <p className="text-lg opacity-90 mb-8">Contact us today for a consultation.</p>
          <a
            href="/contact"
            className="inline-block bg-primary-foreground hover:bg-primary-foreground/90 text-primary px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Request a Consultation
          </a>
        </div>
      </section>
    </div>
  )
}
