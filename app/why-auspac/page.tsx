import HeroSection from '@/components/hero-section'
import Link from 'next/link'

export default function WhyAusPacPage() {
  const differentiators = [
    {
      number: '01',
      title: 'Technical Authority',
      description: 'Seagoing experience combined with certified audit capability.',
    },
    {
      number: '02',
      title: 'Global Standards, Regional Expertise',
      description: 'Deep knowledge of international conventions paired with unmatched Australian regulatory depth.',
    },
    {
      number: '03',
      title: 'Commercial Awareness',
      description: 'Strong, practical understanding of charter party dynamics, insurance implications, and operational risk exposure.',
    },
    {
      number: '04',
      title: 'Independence & Integrity',
      description: 'Arbitration-ready reporting entirely free from commercial conflicts of interest.',
    },
    {
      number: '05',
      title: 'Rapid Deployment',
      description: 'Immediate mobilization for casualty response, Port State Control (PSC) readiness, and high-moisture cargo monitoring.',
    },
  ]

  return (
    <div className="w-full bg-white text-slate-900 pb-16">
      <HeroSection
        title="Why AusPac"
        subtitle="The preferred technical partner for mitigating maritime risk and ensuring operational continuity."
        showImage={true}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">

        {/* Core Value Proposition */}
        <section className="mb-16 border-t-2 border-slate-900 pt-8 sm:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20">

            {/* Left Column — compact on mobile */}
            <div className="lg:col-span-5">
              <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500 mb-4 sm:mb-8">
                Strategic Advantage
              </h2>
              <div className="space-y-3 sm:space-y-6 text-sm sm:text-lg text-slate-600 font-light leading-relaxed pr-0 lg:pr-8">
                <p>
                  In the maritime sector, operational success hinges on accurate data, regulatory compliance, and rapid response to emerging risks.
                </p>
                <p>
                  AusPac was founded to provide stakeholders with an unimpeachable source of technical truth. We do not just report on conditions; we contextualize findings against commercial realities and legal frameworks.
                </p>
                <p className="text-sm sm:text-xl font-medium text-slate-900 mt-4 sm:mt-8 pt-4 sm:pt-8 border-t border-slate-200">
                  Our reporting is structured not just for immediate operational decisions, but for arbitration, insurance review, and legal defense.
                </p>
              </div>
            </div>

            {/* Right Column — 2-col on mobile, 2-col on sm+ */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-8 sm:gap-y-10">
                {differentiators.map((item, index) => (
                  <div key={index} className="relative group">
                    <div className="text-xl sm:text-3xl font-light text-slate-200 mb-1 sm:mb-3 transition-colors duration-300 group-hover:text-blue-800">
                      {item.number}
                    </div>
                    <h3 className="text-[10px] sm:text-sm font-bold uppercase tracking-wider text-slate-900 mb-1 sm:mb-2 border-b border-slate-200 pb-2 sm:pb-3">
                      {item.title}
                    </h3>
                    <p className="text-[10px] sm:text-sm text-slate-600 leading-relaxed font-light mt-1 sm:mt-3">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* CTA Banner — unchanged */}
       <section className="bg-blue-900 text bg-slate-500 flex flex-col md:flex-row items-center justify-between p-8 sm:p-12 rounded-lg">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-bold tracking-tight mb-2">Secure Your Operations</h2>
            <p className="text-sm text-slate-200 font-light">
              Partner with AusPac for independent, arbitration-ready maritime consulting.
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