'use client'

import HeroSection from '@/components/hero-section'
import Link from 'next/link'
import { expertiseAreas, aboutText, aboutCTA } from '@/data/about-data'

export default function AboutPage() {
  return (
    <div className="w-full bg-white text-slate-900 pb-16">
      <HeroSection
        title="Corporate Profile"
        subtitle="Independent maritime consultancy protecting operational, financial, and legal interests."
        showImage={true}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
        <section className="mb-16 border-t-2 border-slate-900 pt-8 sm:pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20">
            <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-sm sm:text-lg text-slate-600 font-light leading-relaxed">
              <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500 mb-4 sm:mb-8">
                About AusPac
              </h2>

              <p className="text-sm sm:text-xl text-slate-900 font-medium leading-relaxed pb-4 sm:pb-6 border-b border-slate-200">
                {aboutText.tagline}
              </p>

              <p className="pt-1 sm:pt-2">{aboutText.description1}</p>
              <p>{aboutText.description2}</p>
            </div>

            <div className="lg:col-span-6">
              <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500 mb-4 sm:mb-8">
                Areas of Practice
              </h2>
              <div className="bg-slate-50 border border-slate-200 border-t-2 border-t-blue-800 p-5 sm:p-10">
                <ul className="grid grid-cols-2 sm:grid-cols-2 gap-y-3 gap-x-4 sm:gap-y-5 sm:gap-x-8">
                  {expertiseAreas.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3">
                      <span className="text-blue-600 font-bold text-sm sm:text-lg leading-none mt-0.5 shrink-0">&bull;</span>
                      <span className="text-slate-700 text-[10px] sm:text-sm font-medium leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-400 text-white flex flex-col md:flex-row items-center justify-between p-8 sm:p-10 rounded-sm">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-bold tracking-tight mb-2">{aboutCTA.title}</h2>
            <p className="text-sm text-slate-900 font-light max-w-2xl">{aboutCTA.description}</p>
          </div>
          <Link
            href={aboutCTA.buttonLink}
            className="shrink-0 bg-white text-blue-900 px-10 py-4 text-sm font-bold tracking-widest uppercase 
            rounded-md shadow-md hover:shadow-lg hover:bg-blue-900 hover:text-white 
            transition-all duration-300 ease-in-out"
          >
            {aboutCTA.buttonText}
          </Link>
        </section>
      </main>
    </div>
  )
}