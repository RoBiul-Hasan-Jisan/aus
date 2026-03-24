'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-full flex items-center justify-center">
                <span className="text-primary text-sm font-black">A</span>
              </div>
              <h3 className="font-bold text-lg">AUSPAC</h3>
            </div>
            <p className="text-sm opacity-90">
              Independent maritime consulting specialists serving the global maritime industry.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="opacity-90 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="opacity-90 hover:opacity-100 transition-opacity">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="opacity-90 hover:opacity-100 transition-opacity">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/sectors" className="opacity-90 hover:opacity-100 transition-opacity">
                  Sectors
                </Link>
              </li>
              <li>
                <Link href="/why-auspac" className="opacity-90 hover:opacity-100 transition-opacity">
                  Why AusPac
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <a href="tel:+61" className="opacity-90 hover:opacity-100 transition-opacity">
                  +61 (0) 2 XXXX XXXX
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:info@auspac.com" className="opacity-90 hover:opacity-100 transition-opacity">
                  info@auspac.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle size={16} className="mt-0.5 flex-shrink-0" />
                <a href="https://wa.me/" className="opacity-90 hover:opacity-100 transition-opacity">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span className="opacity-90">
                  Sydney, Australia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-6 text-sm text-center opacity-90">
          <p>&copy; {currentYear} AUSPAC Maritime Consultants. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
