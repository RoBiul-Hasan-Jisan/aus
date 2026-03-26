import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

export const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ops@auspacmaritime.com.au',
    href: 'mailto:ops@auspacmaritime.com.au',
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
    fullWidth: true,
  },
]