import HeroSection from '@/components/hero-section'
import Link from 'next/link'

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
    <div className="w-full bg-white text-slate-900 pb-16">
      {/* Compact Hero Section */}
      <HeroSection
        title="Corporate Profile"
        subtitle="Independent maritime consultancy protecting operational, financial, and legal interests."
        showImage={true}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
        
        {/* Core Identity - Side-by-Side Layout */}
        <section className="mb-16 border-t-2 border-slate-900 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left Column: Introduction */}
            <div className="lg:col-span-6 space-y-6 text-lg text-slate-600 font-light leading-relaxed">
              <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500 mb-8">
                About AusPac
              </h2>
              
              <p className="text-xl text-slate-900 font-medium leading-relaxed pb-6 border-b border-slate-200">
                AusPac is an independent marine surveying and maritime consultancy delivering high-level surveying, superintendence, audit, and casualty response services.
              </p>
              
              <p className="pt-2">
                We provide evidence-based, defensible reporting supported by regulatory expertise and commercial awareness.
              </p>
              
              <p>
                Our practice is built on discretion, procedural discipline, and technical accuracy. We understand that maritime operations operate at the intersection of compliance, commercial exposure, and reputational risk.
              </p>
            </div>

            {/* Right Column: High-Density Expertise Box */}
            <div className="lg:col-span-6">
              <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500 mb-8">
                Areas of Practice
              </h2>
              <div className="bg-slate-50 border border-slate-200 border-t-2 border-t-blue-800 p-8 sm:p-10">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
                  {expertise.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold text-lg leading-none mt-0.5">&bull;</span>
                      <span className="text-slate-700 text-sm font-medium leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* Slim Value Proposition / CTA Banner */}
        <section className="bg-slate-400 text-white flex flex-col md:flex-row items-center justify-between p-8 sm:p-10 rounded-sm">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-bold tracking-tight mb-2">Trusted Technical Advisors</h2>
            <p className="text-sm text-slate-900 font-light max-w-2xl">
              We act as an unimpeachable source of truth, protecting your operational, financial, and legal interests in complex maritime environments.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-blue-400 hover:bg-blue-500 text-white px-8 py-3 text-sm font-bold tracking-widest uppercase transition-colors"
          >
            Contact AusPac
          </Link>
        </section>

      </main>
    </div>
  )
}