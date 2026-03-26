import { LucideIcon } from 'lucide-react'

export interface ContactDetail {
  icon: LucideIcon
  label: string
  value: string
  href: string | null
  fullWidth?: boolean
}