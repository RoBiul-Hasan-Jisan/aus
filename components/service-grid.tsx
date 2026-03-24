'use client'

import { LucideIcon } from 'lucide-react'

interface Service {
  icon: LucideIcon
  title: string
  description: string
}

interface ServiceGridProps {
  title?: string
  services: Service[]
  columns?: number
}

export default function ServiceGrid({
  title,
  services,
  columns = 3,
}: ServiceGridProps) {
  const gridColsClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }[columns] || 'md:grid-cols-3'

  return (
    <section className="w-full py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-balance">
            {title}
          </h2>
        )}

        <div className={`grid grid-cols-1 gap-8 ${gridColsClass}`}>
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-6 rounded-lg border border-border bg-card hover:bg-accent/5 transition-all duration-300 hover:border-accent/50"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">
                  {service.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
