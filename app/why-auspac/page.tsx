'use client'

import HeroSection from '@/components/hero-section'
import Link from 'next/link'
import { differentiators, whyAusPacText } from '@/data/why-data'

export default function WhyAusPacPage() {
  return (
    <div className="w-full bg-white text-slate-900 pb-16">
      <HeroSection
        title="Why AusPac"
        subtitle="The preferred technical partner for mitigating maritime risk and ensuring operational continuity."
        showImage={true}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
        <section className="mb-16 border-t-2 border-slate-900 pt-8 sm:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500 mb-4 sm:mb-8">
                Strategic Advantage
              </h2>
              <div className="space-y-3 sm:space-y-6 text-sm sm:text-lg text-slate-600 font-light leading-relaxed pr-0 lg:pr-8">
                <p>{whyAusPacText.strategicAdvantage}</p>
                <p>{whyAusPacText.foundingPrinciple}</p>
                <p className="text-sm sm:text-xl font-medium text-slate-900 mt-4 sm:mt-8 pt-4 sm:pt-8 border-t border-slate-200">
                  {whyAusPacText.reportingValue}
                </p>
              </div>
            </div>

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

        {/* Fixed: Removed conflicting bg-blue-900 and bg-slate-500 - using single bg-blue-900 */}
        <section className="bg-blue-900 flex flex-col md:flex-row items-center justify-between p-8 sm:p-12 rounded-lg">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-bold tracking-tight mb-2 text-white">Secure Your Operations</h2>
            <p className="text-sm text-blue-100 font-light">
              Partner with AusPac for independent, arbitration-ready maritime consulting.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-white text-blue-900 px-10 py-4 text-sm font-bold tracking-widest uppercase 
            rounded-md shadow-md hover:shadow-lg hover:bg-blue-800 hover:text-white 
            transition-all duration-300 ease-in-out"
          >
            Contact AusPac
          </Link>
        </section>
      </main>
    </div>
  )
}