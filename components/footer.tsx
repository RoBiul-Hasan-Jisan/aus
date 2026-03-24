'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, MessageCircle, Smartphone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-200 border-t-4 border-slate-700 text-slate-700 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Company Info */}
          <div className="md:col-span-12 lg:col-span-4 pr-0 lg:pr-8">
 <div className="md:col-span-12 lg:col-span-4 pr-0 lg:pr-8 mb-6">
  <h3 className="font-bold text-2xl tracking-widest text-slate-900 uppercase">
    AUSPAC
  </h3>
  <span className="text-sm text-slate-700 font-light">
    Maritime Consultants
  </span>
</div>

            <p className="text-sm text-slate-600 leading-relaxed font-light">
              Independent marine surveying and maritime consultancy delivering evidence-based, defensible reporting to protect operational, financial, and legal interests globally.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-700 mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm font-medium">
              {[
                { name: 'Home', path: '/' },
                { name: 'About AusPac', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Sectors', path: '/sectors' },
                { name: 'Why AusPac', path: '/why-auspac' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.path} 
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-8 lg:col-span-5">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-700 mb-6">
              Direct Channels
            </h4>
            <ul className="space-y-4 text-sm font-medium text-slate-700">
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-slate-600" />
                <a href="mailto:survey@auspac.au" className="hover:text-blue-800 transition-colors">
                  survey@auspac.au
                </a>
              </li>
              
              <li className="flex items-start gap-3">
                <Smartphone size={18} className="mt-0.5 shrink-0 text-slate-600" />
                <div className="flex flex-col">
                  <span className="text-xs text-slate-600 uppercase tracking-wider mb-0.5">Mobile / WhatsApp (Intl)</span>
                  <a href="tel:+61480556364" className="hover:text-blue-800 transition-colors">
                    +61 480 556 364
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-slate-600" />
                <div className="flex flex-col">
                  <span className="text-xs text-slate-600 uppercase tracking-wider mb-0.5">Within Australia</span>
                  <a href="tel:0480556364" className="hover:text-blue-800 transition-colors">
                    0480 556 364
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MessageCircle size={18} className="mt-0.5 shrink-0 text-slate-600" />
                <div className="flex flex-col">
                  <span className="text-xs text-slate-600 uppercase tracking-wider mb-0.5">WeChat</span>
                  <span className="text-slate-700">CaptHasan1977</span>
                </div>
              </li>

              <li className="flex items-start gap-3 pt-2">
                <MapPin size={18} className="mt-0.5 shrink-0 text-slate-600" />
                <span className="leading-relaxed">
                  PO Box 3058<br />
                  Melbourne, Australia
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-slate-700">
          <p>&copy; {currentYear} AusPac Maritime Consultants. All rights reserved.</p>
          
        </div>
        
      </div>
    </footer>
  )
}