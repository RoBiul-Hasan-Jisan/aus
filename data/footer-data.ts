import { Mail, Phone, MapPin, MessageCircle, Smartphone } from 'lucide-react'
import { NavigationLink, ContactInfo, FooterContent } from '@/types/footer'

export const navigationLinks: NavigationLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About AusPac', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Sectors', path: '/sectors' },
  { name: 'Why AusPac', path: '/why-auspac' },
  { name: 'Contact', path: '/contact' },
]

export const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    value: 'ops@auspacmaritime.com.au',
    href: 'mailto:ops@auspacmaritime.com.au',
  },
  {
    icon: Smartphone,
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
    // href is omitted intentionally - no link for WeChat
  },
  {
    icon: MapPin,
    value: 'PO Box 3058\nMelbourne, Australia',
    isMultiLine: true,
    // href is omitted intentionally - no link for address
  },
]

export const footerContent: FooterContent = {
  companyName: 'AUSPAC',
  companyTagline: 'Maritime Consultants',
  description: 'Independent marine surveying and maritime consultancy delivering evidence-based, defensible reporting to protect operational, financial, and legal interests globally.',
  copyrightPrefix: 'AusPac Maritime Consultants. All rights reserved.',
  hoverColor: '#0d5861',
}