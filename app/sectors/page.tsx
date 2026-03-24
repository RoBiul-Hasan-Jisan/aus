import HeroSection from '@/components/hero-section'
import Link from 'next/link'

export default function SectorsPage() {
  const sectors = [
    {
      title: 'P&I Clubs & Insurance Interests',
      subtitle: 'What We Provide',
      services: [
        'Marine Casualty & Incident Investigation',
        'Cargo Damage & Shortage Claims Assessment',
        'Draft Survey Disputes',
        'Bunker Quantity & Quality Investigations',
        'Hatch Integrity & Water Ingress Assessment',
        'Terminal & Stevedore Damage Investigations',
        'Vessel Condition & Pre-Delivery Risk Surveys',
      ],
      valueTitle: 'Our Value',
      valuePoints: [
        'Immediate mobilisation across Australia and the Pacific region.',
        'Independent technical reporting structured for arbitration, insurance review, and legal proceedings.',
        'Liability-sensitive, evidence-driven documentation protecting Member interests.',
      ]
    },
    {
      title: 'Mining & Resource Majors',
      subtitle: 'Port Captaincy & Loading Services',
      commodities: 'Nickel Ore, Iron Ore, Manganese, Spodumene, Copper Concentrate, Salt, and Paragoethite.',
      services: [
        'Port Captaincy & Loading Supervision',
        'Moisture Monitoring & TML Compliance Oversight',
        'Liquefaction Risk Mitigation',
        'Draft Survey Verification',
        'Vessel Suitability & Hold Fitness Advisory',
        'Loading Optimisation & Charter Party Protection',
      ],
      valueTitle: 'Strategic Value',
      valuePoints: [
        'Reduced shipment disruption risk.',
        'Protection against liquefaction exposure.',
        'Independent cargo compliance verification from stockpile to sailing.',
      ]
    },
    {
      title: 'Oil & Gas Terminals & Tankers',
      subtitle: 'Operational Capabilities',
      services: [
        'Tanker & Oil Cargo Incident Investigation',
        'Ship, Terminal & Laboratory Attendance',
        'Assistant Mooring Master – Offshore Operations',
        'STS Operations – POAC',
        'Cargo Sampling & Transfer Oversight',
        'Expeditor Services',
      ],
      valueTitle: 'Operational Advantage',
      valuePoints: [
        'Enhanced safety assurance during critical cargo transfer operations.',
        'Independent documentation for operational disputes and regulatory review.',
        'Protection of terminal integrity and operational continuity.',
      ]
    },
  ]

  return (
    <div className="w-full bg-white text-slate-900 pb-16">
      <HeroSection
        title="Sector Expertise"
        subtitle="Independent technical oversight and casualty response for the world's most critical maritime operations."
        showImage={true}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">

        {/* Sectors Grid
            Mobile:  2-col compact
            Desktop: 3-col full-size — exactly as original */}
        <section className="mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6 lg:gap-8 items-stretch">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 flex flex-col"
              >
                {/* Header & Services */}
                <div className="p-3 sm:p-8 grow">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-6 border-b border-slate-100 pb-2 sm:pb-4">
                    <span className="flex items-center justify-center w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-blue-50 text-blue-700 text-[10px] sm:text-xs font-bold shrink-0">
                      {index + 1}
                    </span>
                    <h3 className="text-[11px] sm:text-xl font-bold text-slate-900 leading-tight">
                      {sector.title}
                    </h3>
                  </div>

                  {/* Optional Commodities */}
                  {sector.commodities && (
                    <div className="mb-3 sm:mb-6 p-2 sm:p-4 bg-slate-50 border-l-4 border-blue-600">
                      <h4 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-1 sm:mb-2">
                        Commodities Supported
                      </h4>
                      <p className="text-[10px] sm:text-sm text-slate-700 leading-relaxed font-medium">
                        {sector.commodities}
                      </p>
                    </div>
                  )}

                  <h4 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-blue-800 mb-2 sm:mb-4">
                    {sector.subtitle}
                  </h4>
                  <ul className="space-y-1.5 sm:space-y-3">
                    {sector.services.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 sm:gap-3">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                        <span className="text-slate-700 text-[10px] sm:text-sm leading-snug">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Value Footer */}
                <div className="bg-slate-50 text-slate-900 p-3 sm:p-8 mt-auto border-t border-slate-200">
                  <h4 className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-2 sm:mb-4">
                    {sector.valueTitle}
                  </h4>
                  <ul className="space-y-1.5 sm:space-y-3">
                    {sector.valuePoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 sm:gap-3 text-[10px] sm:text-sm text-slate-600 leading-relaxed">
                        <span className="text-blue-600 font-bold mt-0.5 shrink-0">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner — unchanged */}
        <section className="bg-blue-900 text bg-slate-500 flex flex-col md:flex-row items-center justify-between p-8 sm:p-12 rounded-lg">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-tight mb-2">Discuss Your Operational Requirements</h2>
            <p className="text-blue-100/80 font-light">
              Mobilize our technical experts across Australia and the Pacific region.
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