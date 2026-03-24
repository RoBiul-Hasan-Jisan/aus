'use client'

import HeroSection from '@/components/hero-section'
import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      title: 'Marine Surveys & General Superintendence',
      details: [
        'Loading & Discharging Supervision',
        'Project Cargo Supervision',
        'Draft Surveys & Dispute Investigation',
        'On/Off-Hire Bunker & Condition Surveys',
        'Bunker Quantity Disputes',
        'Cargo Hatch Sealing',
        'Vessel Condition & Damage Assessment',
        'MO32 Container Vessel Inspections',
        'Container, Flat Rack & Reefer Surveys',
      ],
    },
    {
      title: 'P&I Survey & Casualty Response',
      details: [
        'Marine Casualty & Incident Investigation',
        'Cargo Damage & Shortage Claims',
        'Draft Survey Dispute Analysis',
        'Bunker Quantity & Quality Investigations',
        'Hatch Cover Integrity Inspections',
        'Terminal & Stevedore Damage Investigations',
        'Pre-Purchase & Condition Surveys',
      ],
    },
    {
      title: 'Bulk Commodities & Mining Logistics',
      details: [
        'Port Captaincy',
        'Moisture Monitoring & TML Oversight',
        'Liquefaction Risk Mitigation',
        'Draft Survey Verification',
        'Hold Fitness Advisory',
        'Loading Optimisation',
      ],
    },
    {
      title: 'Tanker, Terminal & Offshore Operations',
      details: [
        'Tanker Incident Investigation',
        'Assistant Mooring Master',
        'STS – POAC',
        'Cargo Sampling',
        'Expeditor Services',
      ],
    },
    {
      title: 'Audit, Safety & Regulatory Compliance',
      details: [
        'Lloyd’s Register Certified Auditors',
        'ISM, ISPS, MARPOL, STCW, MLC Audits',
        'Navigational & Operational Risk Audits',
        'PSC-Style Inspections (IMO Res. 1052, AMSA Checklist 36)',
        'AMSA, USCG & Paris MoU Readiness',
      ],
    },
    {
      title: 'Container & Specialised Cargo Inspections',
      details: [
        'Project Cargo & Heavy Lift',
        'Container, Flat Rack & Reefer Inspections',
        'Damage & Structural Condition Surveys',
        'MO32 Inspections',
      ],
    },
    {
      title: 'Grain & Agricultural Cargo Services',
      details: [
        'Grain Loading Supervision (Australian Standards)',
        'Charterer-Focused Loading Optimisation',
        'Cargo Hold Fitness Advisory',
        'FTL Hold Cleanliness Inspections',
        'Authorised Officer (A.O.) Bulk Grain Inspection',
        'Grain & Woodchip Sampling',
      ],
    },
  ]

  return (
    <div className="w-full bg-white text-slate-900 pb-16">
      {/* Compact Hero Section */}
      <HeroSection
        title="Services  Areas"
        subtitle="Independent, evidence-based reporting and technical advisory across seven core maritime disciplines."
        showImage={true}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
        
        {/* High-Density Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-slate-50 border border-slate-200 border-t-2 border-t-blue-800 p-6 sm:p-8"
              >
                <div className="flex items-start gap-4 mb-5 border-b border-slate-200 pb-4">
                  <span className="text-sm font-bold text-blue-800 mt-1">
                    0{index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">
                    {service.title}
                  </h3>
                </div>
                
                <ul className="space-y-2.5">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold text-lg leading-none mt-0.5">&bull;</span>
                      <span className="text-slate-700 text-sm leading-snug">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Operational Process - Compact Horizontal Row */}
        <section className="mb-16 border-t border-slate-200 pt-12">
          <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500 mb-8 text-center">
            Operational Process
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Engagement', desc: 'Scope & parameters definition.' },
              { step: '02', title: 'Assessment', desc: 'Rigorous on-site investigation.' },
              { step: '03', title: 'Reporting', desc: 'Evidence-based documentation.' },
              { step: '04', title: 'Advisory', desc: 'Ongoing technical support.' },
            ].map((item, index) => (
              <div key={index} className="text-center sm:text-left">
                <div className="text-2xl font-light text-slate-300 mb-2">{item.step}</div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Slim CTA Banner */}
         <section className="bg-blue-900 text bg-slate-500 flex flex-col md:flex-row items-center justify-between p-8 sm:p-12 rounded-lg">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-bold tracking-tight mb-2">Require Technical Advisory?</h2>
            <p className="text-sm text-slate-300 font-light">
              Contact AusPac to discuss your operational, compliance, or casualty response requirements.
            </p>
          </div>
          <Link
  href="/contact"
  className="shrink-0 bg-white text-blue-900 px-10 py-4 text-sm font-bold tracking-widest uppercase 
  rounded-md shadow-md hover:shadow-lg hover:bg-blue-900 hover:text-white 
  transition-all duration-300 ease-in-out"
>
  Contact AusPac
</Link>
        </section>

      </main>
    </div>
  )
}