'use client'

import Link from 'next/link'
import Image from 'next/image'

type CTA = {
  label: string
  href: string
}

interface HeroSectionProps {
  title: string
  subtitle?: string
  cta?: CTA
  showImage?: boolean
  imageSrc?: string
  imageAlt?: string
}

export default function HeroSection({
  title,
  subtitle,
  cta,
  showImage = true,
  imageSrc = '/images/herosection3.jpg',
  imageAlt = 'Hero background image',
}: HeroSectionProps) {
  return (
    <section
      aria-label="Hero Section"
      className="relative w-full overflow-hidden bg-slate-900"
    >
      {/* Background Image */}
      {showImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl space-y-5">
          {/* Accent Line */}
          <div className="h-0.5 w-12 bg-blue-600" />

          {/* Title */}
          <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
              {subtitle}
            </p>
          )}

          {/* CTA */}
          {cta && (
            <Link
              href={cta.href}
              className="inline-flex items-center justify-center rounded-md bg-blue-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {cta.label}
            </Link>
          )}
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-white/10" />
    </section>
  )
}