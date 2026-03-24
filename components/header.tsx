'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/sectors', label: 'Sectors' },
    { href: '/why-auspac', label: 'Why AusPac' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* ✅ Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            
            <Image
              src="/images/AUSPAC LOGO1.png"
              alt="AUSPAC Logo"
              width={42}
              height={42}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />

            <div className="leading-tight">
              <p className="text-sm font-semibold text-gray-900 tracking-wide">
                AUSPAC
              </p>
              <p className="text-xs text-gray-500 tracking-wide">
                Maritime Consultants
              </p>
            </div>

          </Link>

          {/* ✅ Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  pathname === item.href
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {item.label}

                {/* Underline animation */}
                <span className={`absolute left-0 -bottom-1 h-0.5 w-full bg-blue-600 transition-transform duration-300 ${
                  pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
          </nav>

          {/* ✅ Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ✅ Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2 mt-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  pathname === item.href
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}