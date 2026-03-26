import { LucideIcon } from 'lucide-react'

export interface NavigationLink {
  name: string
  path: string
}

export interface ContactInfo {
  icon: LucideIcon
  label?: string
  value: string
  href?: string
  isMultiLine?: boolean
}

export interface FooterContent {
  companyName: string
  companyTagline: string
  description: string
  copyrightPrefix: string
  hoverColor: string
}