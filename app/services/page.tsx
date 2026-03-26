'use client'

import HeroSection from '@/components/hero-section'
import Link from 'next/link'
import { services, operationalProcess } from '@/data/services-data'

export default function ServicesPage() {
  return (
    <div className="w-full bg-white text-slate-900 pb-16">
      <HeroSection
        title="Services Areas"
        subtitle="Independent, evidence-based reporting and technical advisory across seven core maritime disciplines."
        showImage={true}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
        <section className="mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 border-t-2 border-t-blue-800 p-3 sm:p-8"
              >
                <div className="flex items-start gap-2 sm:gap-4 mb-3 sm:mb-5 border-b border-slate-200 pb-2 sm:pb-4">
                  <span className="text-[10px] sm:text-sm font-bold text-blue-800 mt-1 shrink-0">
                    0{index + 1}
                  </span>
                  <h3 className="text-[11px] sm:text-xl font-bold text-slate-900 leading-tight">
                    {service.title}
                  </h3>
                </div>

                <ul className="space-y-1 sm:space-y-2.5">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 sm:gap-3">
                      <span className="text-blue-600 font-bold text-xs sm:text-lg leading-none mt-0.5 shrink-0">&bull;</span>
                      <span className="text-slate-700 text-[10px] sm:text-sm leading-snug">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 border-t border-slate-200 pt-12">
          <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500 mb-8 text-center">
            Operational Process
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {operationalProcess.map((item) => (
              <div key={item.step} className="text-center sm:text-left">
                <div className="text-2xl font-light text-slate-300 mb-2">{item.step}</div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

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