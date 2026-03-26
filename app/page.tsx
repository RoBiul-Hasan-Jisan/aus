import type { Metadata } from 'next'
import HeroSection from '@/components/hero-section'
import Link from 'next/link'
import { homeServices, homeSectors, whyItems, valueBlocks, homeCTA } from '@/data/home-data'

export const metadata: Metadata = {
  title: 'Home',
  description:
    'AUSPAC Maritime Consultants provides independent technical expertise in marine surveys, casualty investigation, and compliance for insurance, mining, and oil & gas industries.',
  openGraph: {
    title: 'AUSPAC Maritime Consultants | Marine Surveys & Casualty Investigation',
    description:
      'Independent maritime consulting specialists in marine surveys, casualty investigation, and compliance for the global shipping industry.',
    url: 'https://auspacmaritime.com.au',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AUSPAC Maritime Consultants' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AUSPAC Maritime Consultants | Marine Surveys & Casualty Investigation',
    description:
      'Independent maritime consulting specialists in marine surveys, casualty investigation, and compliance.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://auspacmaritime.com.au',
  },
}

// JSON-LD structured data for Google rich results
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'AUSPAC Maritime Consultants',
  description:
    'Independent maritime consulting specialists in marine surveys, casualty investigation, and maritime compliance.',
  url: 'https://auspacmaritime.com.au',
  areaServed: 'Worldwide',
  serviceType: [
    'Marine Surveys',
    'Casualty Investigation',
    'Maritime Compliance',
    'Oil & Gas Maritime Consulting',
  ],
}

export default function Home() {
  const visibleServices = homeServices.slice(0, 6)

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="w-full bg-white">
        <HeroSection
          title="Independent Maritime Consulting Excellence"
          subtitle="AUSPAC provides technical expertise in marine surveys, casualty investigation, and compliance for the global shipping industry."
        />

        <Section title="Core Services" ariaLabel="Core maritime consulting services">
          <div className="grid gap-3 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
            {visibleServices.map((service) => (
              <Card key={service.title} {...service} />
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/services"
              className="text-sm font-semibold text-blue-700 hover:underline"
              aria-label="View all maritime consulting services"
            >
              View all services →
            </Link>
          </div>
        </Section>

        <Section title="Industry Sectors" muted ariaLabel="Industry sectors we serve">
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 sm:gap-6">
            {homeSectors.map((sector) => (
              <SimpleCard key={sector.title} {...sector} />
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/sectors"
              className="text-sm font-semibold text-blue-700 hover:underline"
              aria-label="View all industry sectors"
            >
              View all sectors →
            </Link>
          </div>
        </Section>

        <section aria-label="Why choose AUSPAC" className="py-10 sm:py-14">
          <div className="mx-auto grid max-w-7xl gap-8 sm:gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-slate-900">
                Why Choose AUSPAC?
              </h2>
              <ul
                className="grid grid-cols-2 sm:grid-cols-1 gap-y-2 gap-x-4 sm:space-y-3 text-sm text-slate-700"
                aria-label="Reasons to choose AUSPAC Maritime Consultants"
              >
                {whyItems.map((item) => (
                  <li key={item} className="flex items-center gap-2 sm:gap-3">
                    <span className="h-1.5 w-1.5 shrink-0 bg-blue-800" aria-hidden="true" />
                    <span className="text-xs sm:text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/why-auspac"
                className="mt-5 sm:mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-800 hover:underline"
                aria-label="Learn more about why to choose AUSPAC"
              >
                Learn more →
              </Link>
            </div>

            <div
              className="grid gap-4 rounded-sm border border-slate-200 bg-slate-50 p-4 sm:p-6"
              aria-label="AUSPAC value propositions"
            >
              {valueBlocks.map((block) => (
                <ValueBlock key={block.title} {...block} />
              ))}
            </div>
          </div>
        </section>

        <section aria-label="Contact AUSPAC" className="bg-slate-400 py-10 text-white">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row lg:px-8">
            <div className="text-center md:text-left">
              <h2 className="text-xl font-bold">{homeCTA.title}</h2>
              <p className="text-sm text-slate-300">{homeCTA.description}</p>
            </div>
            <Link
              href={homeCTA.buttonLink}
              className="rounded-md bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-blue-900 hover:text-white"
              aria-label={homeCTA.buttonText}
            >
              {homeCTA.buttonText}
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

function Section({
  title,
  children,
  muted = false,
  ariaLabel,
}: {
  title: string
  children: React.ReactNode
  muted?: boolean
  ariaLabel?: string
}) {
  return (
    <section
      aria-label={ariaLabel ?? title}
      className={`py-10 sm:py-12 ${muted ? 'bg-slate-50 border-y' : ''}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8 border-b border-slate-200 pb-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  )
}

function Card({ title, description }: { title: string; description: string }) {
  return (
    <article className="flex flex-col rounded-sm border border-slate-200 border-t-2 border-t-blue-800 bg-white p-3 sm:p-5">
      <h3 className="mb-1 sm:mb-2 text-[11px] sm:text-base font-semibold text-slate-900 leading-tight">
        {title}
      </h3>
      <p className="text-[10px] sm:text-xs leading-relaxed text-slate-600 line-clamp-3">
        {description}
      </p>
    </article>
  )
}

function SimpleCard({ title, description }: { title: string; description: string }) {
  return (
    <article>
      <h3 className="mb-1 text-[11px] sm:text-base font-semibold text-slate-900 leading-tight">
        {title}
      </h3>
      <p className="text-[10px] sm:text-xs leading-relaxed text-slate-600">{description}</p>
    </article>
  )
}

function ValueBlock({ title, description }: { title: string; description: string }) {
  return (
    <div className="border-b border-slate-200 pb-3 sm:pb-4 last:border-none">
      <h4 className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-900">{title}</h4>
      <p className="text-xs text-slate-600">{description}</p>
    </div>
  )
}