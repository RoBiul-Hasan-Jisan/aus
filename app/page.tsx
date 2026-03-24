import HeroSection from '@/components/hero-section'
import Link from 'next/link'

export default function Home() {
  const services = [
    {
      title: 'Marine Surveys & General Superintendence',
      description: 'Comprehensive vessel inspections, condition surveys, and on-site supervision to ensure operational efficiency, compliance, and asset integrity.',
    },
    {
      title: 'P&I Survey & Casualty Response',
      description: 'Rapid response to maritime incidents, including damage assessment, liability investigations, and detailed reporting for Protection & Indemnity claims.',
    },
    {
      title: 'Bulk Commodities & Mining Logistics',
      description: 'Inspection, sampling, and supervision of bulk cargo handling, ensuring quantity, quality, and safe transportation of mining and commodity shipments.',
    },
    {
      title: 'Tanker, Terminal & Offshore Operations',
      description: 'Specialized support for tanker and offshore activities, including cargo operations monitoring, terminal inspections, and safety compliance checks.',
    },
    {
      title: 'Audit, Safety & Regulatory Compliance',
      description: 'Independent audits and safety assessments aligned with international maritime standards to ensure regulatory compliance and risk mitigation.',
    },
    {
      title: 'Container & Specialised Cargo Inspections',
      description: 'Detailed inspection of containerized and project cargo, ensuring proper handling, stowage, and compliance with transport regulations.',
    },
    {
      title: 'Grain & Agricultural Cargo Services',
      description: 'Supervision, inspection, and certification of grain and agricultural cargoes to ensure quality, weight accuracy, and adherence to trade standards.',
    },
  ];

  const sectors = [
    {
      title: 'P&I Clubs & Insurance Interests',
      description: 'Specialized marine surveying, loss assessment, and claims support services for insurers, underwriters, and Protection & Indemnity clubs.',
    },
    {
      title: 'Mining & Resource Majors',
      description: 'End-to-end inspection, supervision, and logistics support for bulk commodities, ensuring quality control and efficient supply chain operations.',
    },
    {
      title: 'Oil & Gas Terminals & Tanker Operators',
      description: 'Technical support and inspection services for tanker operations, terminal activities, and offshore energy projects, ensuring safety and regulatory compliance.',
    },
  ]

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <HeroSection
        title="Independent Maritime Consulting Excellence"
        subtitle="AUSPAC provides technical expertise in marine surveys, casualty investigation, and compliance for the global shipping industry."
        cta={{
          text: 'Contact',
          href: '/contact',
        }}
      />

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 border-b border-slate-200 pb-5">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Core Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col h-full border border-slate-200 border-t-2 border-t-blue-800 rounded-sm p-8 bg-white"
              >
                <h3 className="text-lg font-bold mb-3 text-slate-900">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm flex-grow">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 border-b border-slate-200 pb-5">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Industry Sectors
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <div key={index} className="flex flex-col h-full">
                <h3 className="text-lg font-bold mb-2 text-slate-900">
                  {sector.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-grow">
                  {sector.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Auspac Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-start">
          
          {/* Left Column */}
          <div className="pr-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-8">
              Why Choose AUSPAC?
            </h2>
            <ul className="space-y-4 text-slate-700">
              {[
                'Independent and impartial expertise',
                'Strong technical authority',
                'Commercial industry awareness',
                'Rapid response and reporting',
                'International compliance knowledge',
                'Expert witness capability',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 bg-blue-800 rounded-none shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/why-auspac"
              className="inline-flex items-center gap-2 mt-8 text-sm font-bold text-blue-800"
            >
              Learn more about our approach <span>&rarr;</span>
            </Link>
          </div>

          {/* Right Column (Values Grid) */}
          <div className="grid grid-cols-1 gap-6 bg-slate-50 p-8 sm:p-10 border border-slate-200 rounded-sm">
            <div className="border-b border-slate-200 pb-6 last:border-0 last:pb-0">
              <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-2">Expertise</h4>
              <p className="text-slate-600 text-sm">Decades of maritime consulting experience driving accurate assessments.</p>
            </div>
            <div className="border-b border-slate-200 pb-6 last:border-0 last:pb-0">
              <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-2">Reliability</h4>
              <p className="text-slate-600 text-sm">Trusted by insurers, vessel owners, and operators globally.</p>
            </div>
            <div className="pt-2">
              <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-2">Quality</h4>
              <p className="text-slate-600 text-sm">Clear, decisive reporting with highly practical recommendations.</p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">
              Ready to Engage?
            </h2>
            <p className="text-slate-300 text-sm max-w-xl">
              Contact AUSPAC Maritime Consultants for professional attendance and advisory services worldwide.
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
        </div>
      </section>

    </div>
  )
}