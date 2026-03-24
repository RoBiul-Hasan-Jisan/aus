import HeroSection from '@/components/hero-section'
import Link from 'next/link'

type Item = {
  title: string
  description: string
}


const SERVICES: Item[] = [
  {
    title: 'Marine Surveys & General Superintendence',
    description:
      'Comprehensive vessel inspections, condition surveys, and on-site supervision to ensure operational efficiency, compliance, and asset integrity.',
  },
  {
    title: 'P&I Survey & Casualty Response',
    description:
      'Rapid response to maritime incidents, including damage assessment, liability investigations, and detailed reporting for Protection & Indemnity claims.',
  },
  {
    title: 'Bulk Commodities & Mining Logistics',
    description:
      'Inspection, sampling, and supervision of bulk cargo handling, ensuring quantity, quality, and safe transportation of mining and commodity shipments.',
  },
  {
    title: 'Tanker, Terminal & Offshore Operations',
    description:
      'Specialized support for tanker and offshore activities, including cargo operations monitoring, terminal inspections, and safety compliance checks.',
  },
  {
    title: 'Audit, Safety & Regulatory Compliance',
    description:
      'Independent audits and safety assessments aligned with international maritime standards to ensure regulatory compliance and risk mitigation.',
  },
  {
    title: 'Container & Specialised Cargo Inspections',
    description:
      'Detailed inspection of containerized and project cargo, ensuring proper handling, stowage, and compliance with transport regulations.',
  },
  {
    title: 'Grain & Agricultural Cargo Services',
    description:
      'Supervision, inspection, and certification of grain and agricultural cargoes to ensure quality, weight accuracy, and adherence to trade standards.',
  },
 

]

const SECTORS: Item[] = [
  {
    title: 'P&I Clubs & Insurance Interests',
    description:
      'Specialized marine surveying, loss assessment, and claims support services for insurers, underwriters, and Protection & Indemnity clubs.',
  },
  {
    title: 'Mining & Resource Majors',
    description:
      'End-to-end inspection, supervision, and logistics support for bulk commodities, ensuring quality control and efficient supply chain operations.',
  },
  {
    title: 'Oil & Gas Terminals & Tanker Operators',
    description:
      'Technical support and inspection services for tanker operations, terminal activities, and offshore energy projects, ensuring safety and regulatory compliance.',
  },
]

const WHY_ITEMS = [
  'Independent and impartial expertise',
  'Strong technical authority',
  'Commercial industry awareness',
  'Rapid response and reporting',
  'International compliance knowledge',
  'Expert witness capability',
]

export default function Home() {
  const visibleServices = SERVICES.slice(0, 6)

  return (
    <main className="w-full bg-white">
      {/* Hero */}
      <HeroSection
        title="Independent Maritime Consulting Excellence"
        subtitle="AUSPAC provides technical expertise in marine surveys, casualty investigation, and compliance for the global shipping industry."
        
      />

      {/* Services */}
      <Section title="Core Services">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map((service) => (
            <Card key={service.title} {...service} />
          ))}
        </div>

        <div className="mt-6">
          <Link
            href="/services"
            className="text-sm font-semibold text-blue-700 hover:underline"
          >
            View all services →
          </Link>
        </div>
      </Section>

      {/* Sectors */}
      <Section title="Industry Sectors" muted>
        <div className="grid gap-6 md:grid-cols-3">
          {SECTORS.map((sector) => (
            <SimpleCard key={sector.title} {...sector} />
          ))}
        </div>
                <div className="mt-6">
          <Link
            href="/sectors"
            className="text-sm font-semibold text-blue-700 hover:underline"
          >
            View all sectors →
          </Link>
        </div>
      </Section>

      {/* Why Section */}
      <section className="py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="mb-6 text-2xl font-bold text-slate-900">
              Why Choose AUSPAC?
            </h2>

            <ul className="space-y-3 text-sm text-slate-700">
              {WHY_ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 bg-blue-800" />
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/why-auspac"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-800 hover:underline"
            >
              Learn more →
            </Link>
          </div>

          <div className="grid gap-4 rounded-sm border border-slate-200 bg-slate-50 p-6">
            <ValueBlock
              title="Expertise"
              description="Decades of maritime consulting experience driving accurate assessments."
            />
            <ValueBlock
              title="Reliability"
              description="Trusted by insurers, vessel owners, and operators globally."
            />
            <ValueBlock
              title="Quality"
              description="Clear, decisive reporting with highly practical recommendations."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-400 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row lg:px-8">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold">Ready to Engage?</h2>
            <p className="text-sm text-slate-300">
              Contact AUSPAC Maritime Consultants for professional advisory services worldwide.
            </p>
          </div>

          <Link
            href="/contact"
            className="rounded-md bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-blue-900 hover:text-white"
          >
            Contact
          </Link>
        </div>
      </section>
    </main>
  )
}

/* ---------------- Components ---------------- */

function Section({
  title,
  children,
  muted = false,
}: {
  title: string
  children: React.ReactNode
  muted?: boolean
}) {
  return (
    <section className={`py-12 ${muted ? 'bg-slate-50 border-y' : ''}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 border-b border-slate-200 pb-3">
          <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  )
}

function Card({ title, description }: Item) {
  return (
    <div className="flex flex-col rounded-sm border border-slate-200 border-t-2 border-t-blue-800 bg-white p-5">
      <h3 className="mb-2 text-base font-semibold text-slate-900">{title}</h3>
      <p className="text-xs leading-relaxed text-slate-600 line-clamp-3">
        {description}
      </p>
    </div>
  )
}

function SimpleCard({ title, description }: Item) {
  return (
    <div>
      <h3 className="mb-1 text-base font-semibold text-slate-900">{title}</h3>
      <p className="text-xs leading-relaxed text-slate-600">
        {description}
      </p>
    </div>
  )
}

function ValueBlock({ title, description }: Item) {
  return (
    <div className="border-b border-slate-200 pb-4 last:border-none">
      <h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-900">
        {title}
      </h4>
      <p className="text-xs text-slate-600">{description}</p>
    </div>
  )
}