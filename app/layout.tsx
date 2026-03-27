import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://auspacmaritime.com.au'), 

  title: {
    default: 'AUSPAC Maritime Consultants | Marine Surveys & Casualty Investigation',
    template: '%s | AUSPAC Maritime Consultants',
  },

  description:
    'Independent maritime consulting specialists in marine surveys, casualty investigation, and maritime compliance for insurance, mining, and oil & gas industries.',

 keywords: [

 
    // ============ AUSPAC Variations ============
    // Standard Format
    'auspac',
    'AUSPAC',
    'AusPac',
    'AUSPAC Maritime',
    'AusPac Maritime',
    'auspac maritime',
    
    // With Spaces
    'Aus Pac',
    'AUS PAC',
    'Aus Pac Maritime',
    'AUS PAC Maritime',
    'AUSPAC MARITIME',
    
    // Without Spaces
    'auspacmaritime',
    'AUSPACMaritime',
    'auspacmaritime.com.au',
    
    // With Hyphens
    'Aus-Pac',
    'AUS-PAC',
    'Aus-Pac Maritime',
    'AUS-PAC Maritime',
    
    // With Underscores
    'Aus_Pac',
    'AUS_PAC',
    'Aus_Pac_Maritime',
    
    // Combined
    'auspacmaritimeconsultants',
    'AUSPACMaritimeConsultants',
    'auspac-maritime',
    'AUSPAC-maritime',
    
    // ============ AUSPAC Maritime Consultants - Full Names ============
    // Standard
    'AUSPAC Maritime Consultants',
    'AusPac Maritime Consultants',
    'auspac maritime consultants',
    'AUSPAC MARITIME CONSULTANTS',
    
    // Without Spaces
    'AUSPACMaritimeConsultants',
    'AusPacMaritimeConsultants',
    'auspacmaritimeconsultants',
    
    // With Hyphens
    'AUSPAC-Maritime-Consultants',
    'AusPac-Maritime-Consultants',
    'auspac-maritime-consultants',
    
    // Short Forms
    'AUSPAC Maritime',
    'AusPac Maritime',
    'AUSPAC Consultants',
    'AusPac Consultants',
    'AUSPAC Marine',
    'AusPac Marine',
    'AUSPAC Marine Consultants',
    'AusPac Marine Consultants',
    
    // ============ AUSPAC Company References ============
    'AUSPAC company',
    'AusPac company',
    'AUSPAC firm',
    'AusPac firm',
    'AUSPAC business',
    'AUSPAC Pty Ltd',
    'AUSPAC Marine Surveyors',
    'AUSPAC Marine Surveying',
    'AUSPAC Marine Services',
    
    // ============ With Service Descriptors ============
    // General
    'AUSPAC marine surveyors',
    'AUSPAC maritime experts',
    'AUSPAC consultants',
    'AUSPAC marine consultants',
    'AUSPAC surveyors',
    'AUSPAC maritime services',
    'AUSPAC technical advisors',
    'AUSPAC marine specialists',
    
    // Specific Services
    'AUSPAC marine surveying',
    'AUSPAC casualty investigation',
    'AUSPAC P&I survey',
    'AUSPAC draft survey',
    'AUSPAC cargo inspection',
    'AUSPAC port captaincy',
    'AUSPAC vessel survey',
    'AUSPAC marine audit',
    'AUSPAC compliance services',
    'AUSPAC marine warranty',
    
    // ============ Location-Based ============
    // Australia
    'AUSPAC Australia',
    'AUSPAC Melbourne',
    'AUSPAC Sydney',
    'AUSPAC Brisbane',
    'AUSPAC Perth',
    'AUSPAC Newcastle',
    'AUSPAC Port Hedland',
    'AUSPAC Dampier',
    'AUSPAC Adelaide',
    'AUSPAC Hobart',
    'AUSPAC Darwin',
    'AUSPAC Queensland',
    'AUSPAC Western Australia',
    'AUSPAC Victoria',
    'AUSPAC New South Wales',
    
    // Pacific
    'AUSPAC Pacific',
    'AUSPAC Fiji',
    'AUSPAC Papua New Guinea',
    'AUSPAC New Zealand',
    'AUSPAC Solomon Islands',
    'AUSPAC Vanuatu',
    'AUSPAC New Caledonia',
    'AUSPAC South Pacific',
    
    // International
    'AUSPAC Singapore',
    'AUSPAC Indonesia',
    'AUSPAC Philippines',
    'AUSPAC Asia Pacific',
    'AUSPAC global',
    
    // ============ Industry-Specific ============
    // Insurance
    'AUSPAC P&I clubs',
    'AUSPAC marine insurance',
    'AUSPAC insurance surveyors',
    'AUSPAC marine underwriters',
    'AUSPAC claims investigation',
    
    // Mining & Resources
    'AUSPAC mining logistics',
    'AUSPAC bulk commodities',
    'AUSPAC iron ore survey',
    'AUSPAC nickel ore inspection',
    'AUSPAC coal survey',
    'AUSPAC mineral surveyors',
    
    // Oil & Gas
    'AUSPAC oil and gas',
    'AUSPAC tanker operations',
    'AUSPAC offshore services',
    'AUSPAC terminal operations',
    'AUSPAC LNG survey',
    'AUSPAC FPSO inspection',
    
    // Shipping
    'AUSPAC shipping consultants',
    'AUSPAC vessel inspection',
    'AUSPAC ship survey',
    'AUSPAC maritime operations',
    
    // ============ Combined with Competencies ============
    'AUSPAC expert witness',
    'AUSPAC marine arbitration',
    'AUSPAC technical authority',
    'AUSPAC independent surveyor',
    'AUSPAC maritime compliance',
    'AUSPAC regulatory experts',
    'AUSPAC risk management',
    'AUSPAC safety audit',
    'AUSPAC marine warranty',
    'AUSPAC port state control',
    'AUSPAC AMSA compliance',
    
    // ============ Trust & Quality Indicators ============
    'trusted AUSPAC',
    'reliable AUSPAC',
    'professional AUSPAC',
    'independent AUSPAC',
    'accredited AUSPAC',
    'certified AUSPAC surveyors',
    'qualified AUSPAC experts',
    'experienced AUSPAC team',
    'leading AUSPAC maritime',
    'best AUSPAC surveyors',
    'top AUSPAC consultants',
    
    // ============ Client-Focused ============
    'AUSPAC for ship owners',
    'AUSPAC for charterers',
    'AUSPAC for P&I clubs',
    'AUSPAC for insurers',
    'AUSPAC for mining companies',
    'AUSPAC for oil and gas',
    'AUSPAC for terminals',
    'AUSPAC for traders',
    
    // ============ Action-Oriented ============
    'hire AUSPAC',
    'engage AUSPAC',
    'contact AUSPAC',
    'appoint AUSPAC',
    'AUSPAC services',
    'AUSPAC support',
    'AUSPAC assistance',
    'AUSPAC expertise',
    'AUSPAC solutions',
    'AUSPAC capabilities',
    
    // ============ Social Media & Online ============
    '@AUSPAC',
    '@AusPacMaritime',
    'AUSPAC LinkedIn',
    'AUSPAC website',
    'auspacmaritime.com.au',
    'www.auspacmaritime.com.au',
    
    // ============ Long-Tail Search Queries ============
    // Questions
    'who is AUSPAC',
    'what is AUSPAC maritime',
    'AUSPAC marine surveyor review',
    'AUSPAC services Australia',
    'how to contact AUSPAC',
    'AUSPAC marine consultants contact',
    'AUSPAC surveyor Melbourne',
    'AUSPAC cargo surveyor Sydney',
    'AUSPAC casualty investigator Perth',
    'AUSPAC P&I surveyor Brisbane',
    
    // Service-Specific Long-Tail
    'AUSPAC marine survey cost',
    'AUSPAC draft survey services',
    'AUSPAC bunker survey Australia',
    'AUSPAC cargo inspection services',
    'AUSPAC port captain services',
    'AUSPAC vessel condition survey',
    'AUSPAC pre-purchase survey',
    'AUSPAC damage survey report',
    'AUSPAC marine incident investigation',
    'AUSPAC expert witness report',
    
    // ============ Misspellings & Common Variations ============
    'auspac',
    'auspac marine',
    'aus pac',
    'aus pac maritime',
    'auspac maritime',
    'auspac marine consultants',
    'auspac marine survey',
    'auspac marine services',
    'aspac maritime',
    'aus pacific maritime',
    'australia pacific maritime',
    'auspac australia',
    
    // ============ Combined with Partners ============
    'AUSPAC marine survey partners',
    'AUSPAC and P&I clubs',
    'AUSPAC for mining majors',
    'AUSPAC oil and gas partners',
    'AUSPAC insurance partners',
    
    // ============ Awards & Recognition ============
    'AUSPAC maritime excellence',
    'AUSPAC industry leaders',
    'AUSPAC trusted surveyors',
    'AUSPAC proven expertise',
    'AUSPAC technical excellence',
    
    // ============ Industry Acronyms ============
    'AUSPAC ISM audit',
    'AUSPAC ISPS compliance',
    'AUSPAC MLC inspection',
    'AUSPAC MARPOL survey',
    'AUSPAC SOLAS compliance',
    'AUSPAC IMO standards',
    'AUSPAC AMSA readiness',
    'AUSPAC PSC inspection',
    
    // ============ B2B Keywords ============
    'AUSPAC B2B maritime services',
    'AUSPAC corporate marine survey',
    'AUSPAC enterprise solutions',
    'AUSPAC commercial maritime',
    'AUSPAC industrial marine services',
    
    // ============ Urgent/Response Keywords ============
    'urgent AUSPAC response',
    '24/7 AUSPAC survey',
    'emergency AUSPAC marine',
    'rapid AUSPAC deployment',
    'immediate AUSPAC assistance',
    'AUSPAC casualty response team',
    'AUSPAC 24 hour service',
    
    // ============ Mobile Search ============
    'AUSPAC near me',
    'AUSPAC surveyor near me',
    'AUSPAC maritime consultants location',
    'AUSPAC office Melbourne',
    'AUSPAC contact number',
    'AUSPAC phone',
    'AUSPAC email',
    'AUSPAC WhatsApp',
    
    // ============ Complete Brand Protection ============
    'auspac maritime pty ltd',
    'auspac marine pty ltd',
    'auspac maritime group',
    'auspac marine group',
    'auspac corporation',
    'auspac holdings',
    'auspac enterprises',
    'auspac international',
    
    // ============ Descriptive Brand Names ============
    'Australia Pacific Maritime Consultants',
    'Australian Pacific Maritime',
    'AUSPAC - Australia Pacific',
    'AUSPAC Marine Surveying Services',
    'AUSPAC Marine & Cargo Surveyors',
    'AUSPAC Maritime Specialists',
    'AUSPAC Technical Marine Services',

    // Core Services
    'marine surveyors',
    'marine surveying',
    'casualty investigation',
    'marine casualty investigation',
    'P&I survey',
    'draft survey',
    'bunker survey',
    'cargo inspection',
    'loading supervision',
    'port captaincy',
    'vessel condition survey',
    'pre-purchase survey',
    'on-hire survey',
    'off-hire survey',
    'container inspection',
    'reefer survey',
    'project cargo supervision',
    'heavy lift supervision',
    
    // Industry Sectors
    'maritime consultants',
    'marine insurance surveyors',
    'P&I clubs',
    'marine underwriters',
    'mining logistics',
    'bulk commodities inspection',
    'oil and gas maritime',
    'tanker operations',
    'offshore operations',
    'terminal operations',
    'STS operations',
    
    // Compliance & Audit
    'maritime compliance',
    'ISM audit',
    'ISPS audit',
    'MLC audit',
    'MARPOL compliance',
    'Port State Control',
    'AMSA inspections',
    'regulatory compliance',
    'maritime safety audit',
    'risk assessment',
    
    // Geographic
    'Australia maritime surveyors',
    'Pacific marine surveyors',
    'Melbourne marine surveyors',
    'Sydney marine surveyors',
    'Brisbane marine surveyors',
    'Perth marine surveyors',
    'Newcastle marine surveyors',
    'Port Hedland marine surveyors',
    'Dampier marine surveyors',
    
    // Bulk Commodities
    'iron ore inspection',
    'nickel ore survey',
    'manganese inspection',
    'spodumene survey',
    'copper concentrate inspection',
    'grain loading supervision',
    'agricultural cargo survey',
    'moisture monitoring',
    'liquefaction risk assessment',
    'TML compliance',
    
    // Specialized Services
    'expert witness maritime',
    'marine arbitration',
    'cargo damage assessment',
    'stevedore damage investigation',
    'hatch cover inspection',
    'terminal damage survey',
    'vessel damage assessment',
    'marine incident investigation',
    'collision investigation',
    'grounding investigation',
    
    // Brand
    'auspac',
  
    'AUSPAC',
    'AusPac Maritime Consultants',
    'AUSPAC marine surveyors',
  ],
  authors: [{ name: 'AUSPAC Maritime Consultants' }],
  applicationName: 'AUSPAC Maritime Consultants',
  creator: 'AUSPAC Maritime Consultants',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://auspacmaritime.com.au', 
    siteName: 'AUSPAC Maritime Consultants',
    title: 'AUSPAC Maritime Consultants | Marine Surveys & Casualty Investigation',
    description:
      'Independent maritime consulting specialists in marine surveys, casualty investigation, and maritime compliance for insurance, mining, and oil & gas industries.',
    images: [
      {
        url: '/images/AUSPAC LOGO1.png', // ← add a 1200×630px OG image to /public
        width: 1200,
        height: 630,
        alt: 'AUSPAC Maritime Consultants',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'AUSPAC Maritime Consultants | Marine Surveys & Casualty Investigation',
    description:
      'Independent maritime consulting specialists in marine surveys, casualty investigation, and maritime compliance.',
    images: ['/images/AUSPAC LOGO1.png'], 
  },

 icons: {
  icon: [
    { url: '/favicon.ico' },   
    { url: '/icon1.svg', type: 'image/svg+xml' },
  ],
  apple: '/icon1.png',
},

  alternates: {
    canonical: 'https://auspacmaritime.com.au', 
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}