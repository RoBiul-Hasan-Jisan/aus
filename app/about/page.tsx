'use client'

import HeroSection from '@/components/hero-section'
import { CheckCircle2 } from 'lucide-react'

export default function AboutPage() {
  const expertise = [
    'Marine Survey & Inspections',
    'Casualty & Incident Investigation',
    'Risk Assessment & Management',
    'Regulatory Compliance',
    'Claims Evaluation',
    'Expert Witness Services',
    'Port State Control Issues',
    'Classification Society Matters',
  ]

  return (
    <div className="w-full">
      {/* Hero */}
      <HeroSection
        title="About AUSPAC"
        subtitle="Industry-leading maritime consultants with decades of combined expertise serving the global shipping community."
      />

      {/* Company Story */}
      <section className="w-full py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                AUSPAC Maritime Consultants was founded with a singular mission: to provide independent, technically rigorous maritime consulting services to the global shipping industry.
              </p>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                Drawing from our team's extensive experience in vessel operations, maritime law, insurance, and regulatory compliance, we deliver comprehensive solutions tailored to our clients' specific needs.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Today, AUSPAC is recognized as a trusted partner by leading shipping companies, insurance providers, P&I clubs, and maritime authorities worldwide.
              </p>
            </div>
            <div className="rounded-lg bg-primary/10 p-8 border border-primary/20">
              <h3 className="font-bold text-lg text-foreground mb-4">Key Milestones</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-foreground/80">Founded with maritime industry experts</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-foreground/80">Expanded global service network</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-foreground/80">Pioneered rapid response capabilities</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-foreground/80">Recognized for expert witness services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="w-full py-16 sm:py-24 bg-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {expertise.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card">
                <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                <span className="text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="w-full py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Independence',
                description: 'We provide impartial advice based on technical expertise, free from commercial conflicts of interest.',
              },
              {
                title: 'Integrity',
                description: 'Our reputation is built on honest, transparent reporting and ethical conduct in all engagements.',
              },
              {
                title: 'Excellence',
                description: 'We maintain the highest standards in technical analysis, documentation, and professional service delivery.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-lg border border-border bg-card text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
