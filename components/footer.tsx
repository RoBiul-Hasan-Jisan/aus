'use client'

import Link from 'next/link'
import { navigationLinks, contactInfo, footerContent } from '@/data/footer-data'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-200 border-t-4 border-slate-700 text-slate-700 pt-10 sm:pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-6 sm:gap-12 lg:gap-8 mb-10 sm:mb-16">

          {/* Company Info — full width on mobile */}
          <div className="col-span-2 md:col-span-12 lg:col-span-4 pr-0 lg:pr-8">
            <div className="mb-3 sm:mb-6">
              <h3 className="font-bold text-xl sm:text-2xl tracking-widest text-slate-900 uppercase">
                {footerContent.companyName}
              </h3>
              <span className="text-sm text-slate-700 font-light">
                {footerContent.companyTagline}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
              {footerContent.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-4 lg:col-span-3">
            <h4 className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-slate-700 mb-3 sm:mb-6">
              Navigation
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm font-medium">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="transition-colors hover:text-[#0d5861]"
                    style={{ color: footerContent.hoverColor }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-8 lg:col-span-5">
            <h4 className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-slate-700 mb-3 sm:mb-6">
              Direct Channels
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm font-medium text-slate-700">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                return (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <>
                      <Icon size={14} className="mt-0.5 shrink-0 text-slate-600 sm:hidden" />
                      <Icon size={18} className="mt-0.5 shrink-0 text-slate-600 hidden sm:block" />
                    </>
                    
                    {item.label ? (
                      <div className="flex flex-col">
                        <span className="text-[9px] sm:text-xs text-slate-600 uppercase tracking-wider mb-0.5">
                          {item.label}
                        </span>
                        {item.href ? (
                          <a href={item.href} className="hover:text-blue-800 transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-slate-700">{item.value}</span>
                        )}
                      </div>
                    ) : item.isMultiLine ? (
                      <span className="leading-relaxed whitespace-pre-line">
                        {item.value}
                      </span>
                    ) : item.href ? (
                      <a href={item.href} className="hover:text-blue-800 transition-colors break-all">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-slate-700">{item.value}</span>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-slate-700">
          <p>&copy; {currentYear} {footerContent.copyrightPrefix}</p>
        </div>

      </div>
    </footer>
  )
}