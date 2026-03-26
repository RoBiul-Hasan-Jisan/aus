'use client'

import HeroSection from '@/components/hero-section'
import { contactDetails } from '@/data/contact-data'

export default function ContactPage() {
  return (
    <div className="w-full bg-white text-slate-900 pb-16">
      <HeroSection
        title="Contact AusPac"
        subtitle="Trusted marine surveying and consultancy services delivered with discretion and responsiveness."
        showImage={true}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-16">
        <section className="mb-16 border-t-2 border-slate-900 pt-8 sm:pt-12">
          <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500 mb-4 sm:mb-8 text-center">
            Direct Channels
          </h2>

          <div className="bg-slate-50 border border-slate-200 border-t-2 border-t-blue-800 p-5 sm:p-12">
            <ul className="grid grid-cols-2 sm:grid-cols-2 gap-x-6 gap-y-6 sm:gap-x-12 sm:gap-y-10">
              {contactDetails.map((item, index) => {
                const Icon = item.icon
                return (
                  <li
                    key={index}
                    className={`flex items-start gap-2 sm:gap-4 ${item.fullWidth ? 'col-span-2 border-t border-slate-200 pt-5 sm:pt-8 mt-1 sm:mt-2' : ''}`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-800 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="text-[9px] sm:text-xs font-bold uppercase tracking-widest text-slate-500 mb-0.5 sm:mb-1">
                        {item.label}
                      </h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-slate-900 font-medium text-sm sm:text-lg hover:text-blue-600 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-900 font-medium text-sm sm:text-lg whitespace-pre-line">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        <section className="bg-yellow-100 text-gray-900 p-8 sm:p-10 rounded-md text-center shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-xl font-bold tracking-tight mb-3">Immediate Deployment</h2>
          <p className="text-sm text-gray-700 font-light max-w-2xl mx-auto">
            For urgent casualty response or time-sensitive operational matters, please utilize our mobile or WhatsApp channels for immediate assistance.
          </p>
        </section>
      </main>
    </div>
  )
}