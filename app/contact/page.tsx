'use client'

import HeroSection from '@/components/hero-section'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  const contactDetails = [
    {
      icon: Mail,
      label: 'Email',
      value: 'survey@auspac.au',
      href: 'mailto:survey@auspac.au',
    },
    {
      icon: Phone,
      label: 'Mobile / WhatsApp (Intl)',
      value: '+61 480 556 364',
      href: 'tel:+61480556364',
    },
    {
      icon: Phone,
      label: 'Within Australia',
      value: '0480 556 364',
      href: 'tel:0480556364',
    },
    {
      icon: MessageCircle,
      label: 'WeChat',
      value: 'CaptHasan1977',
      href: null,
    },
    {
      icon: MapPin,
      label: 'Postal Address',
      value: 'PO Box 3058\nMelbourne, Australia',
      href: null,
      fullWidth: true, // Special flag to make the address span both columns if needed
    },
  ]

  return (
    <div className="w-full bg-white text-slate-900 pb-16">
      {/* Compact Hero */}
      <HeroSection
        title="Contact AusPac"
        subtitle="Trusted marine surveying and consultancy services delivered with discretion and responsiveness."
        showImage={true}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-16">
        
        {/* Centered Direct Contact Info Box */}
        <section className="mb-16 border-t-2 border-slate-900 pt-12">
          <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-500 mb-8 text-center">
            Direct Channels
          </h2>
          
          <div className="bg-slate-50 border border-slate-200 border-t-2 border-t-blue-800 p-8 sm:p-12">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {contactDetails.map((item, index) => {
                const Icon = item.icon
                return (
                  <li 
                    key={index} 
                    className={`flex items-start gap-4 ${item.fullWidth ? 'sm:col-span-2 border-t border-slate-200 pt-8 mt-2' : ''}`}
                  >
                    <Icon className="w-5 h-5 text-blue-800 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">
                        {item.label}
                      </h3>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          className="text-slate-900 font-medium text-lg hover:text-blue-600 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-900 font-medium text-lg whitespace-pre-line">
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

        {/* Dark Response SLA Banner */}
        {/* Bright Response SLA Banner */}
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