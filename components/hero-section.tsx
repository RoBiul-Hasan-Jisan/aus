'use client'

import Link from 'next/link'
import Image from 'next/image'

interface HeroSectionProps {
  title: string
  subtitle?: string
  cta?: {
    text: string
    href: string
  }
  showImage?: boolean
}

export default function HeroSection({
  title,
  subtitle,
  cta,
  showImage = true,
}: HeroSectionProps) {
  return (
    <section className="relative w-full bg-slate-900 overflow-hidden">

      {/* Background */}
      {showImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/ocean-hero.jpg"
            alt="Maritime background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/75" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        
        <div className="max-w-2xl">

          {/* Small Accent */}
          <div className="h-[2px] w-10 bg-blue-600 mb-4" />

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-snug mb-4">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* CTA */}
          {cta && (
            <Link
              href={cta.href}
              className="inline-block bg-blue-700 hover:bg-blue-600 text-white text-xs sm:text-sm px-5 py-2.5 rounded-sm font-medium transition"
            >
              {cta.text}
            </Link>
          )}

        </div>
      </div>

      {/* Subtle Bottom Divider (instead of big curve) */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10" />

    </section>
  )
}