'use client'

import HeroSection from '@/components/hero-section'
import ContactForm from '@/components/contact-form'
import { Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with AUSPAC Maritime Consultants. We're here to help with your maritime consulting needs."
      />

      {/* Contact Content */}
      <section className="w-full py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-foreground mb-8">Get in Touch</h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Phone size={20} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a
                      href="tel:+61"
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      +61 (0) 2 XXXX XXXX
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Mail size={20} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:info@auspac.com"
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      info@auspac.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin size={20} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-foreground/70">
                      Sydney, Australia
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <MessageCircle size={20} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      Send Message
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 pt-4 border-t border-border mt-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Clock size={20} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                    <p className="text-foreground/70 text-sm">
                      Monday - Friday: 9 AM - 5 PM AEDT
                    </p>
                    <p className="text-foreground/70 text-sm">
                      Urgent inquiries available 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-lg border border-border p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="w-full py-12 sm:py-16 bg-foreground/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-primary/5 border border-primary/20 p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">Quick Response Time</h3>
            <p className="text-foreground/70">
              We typically respond to inquiries within 24 business hours. For urgent matters, please call our office directly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: 'How quickly can you respond to urgent inquiries?',
                answer:
                  'We pride ourselves on rapid response. Urgent matters can typically be addressed within hours. Contact us directly by phone for immediate assistance.',
              },
              {
                question: 'What is your service coverage area?',
                answer:
                  'AUSPAC provides services globally. We have experience in over 40 countries and can mobilize teams to almost any location worldwide.',
              },
              {
                question: 'Do you provide expert witness services?',
                answer:
                  'Yes, our qualified experts regularly provide expert testimony for maritime disputes, litigation, and legal proceedings.',
              },
              {
                question: 'What sectors do you specialize in?',
                answer:
                  'We specialize in Insurance & P&I, Mining & Bulk Cargo, and Oil & Gas sectors, with tailored services for each industry.',
              },
              {
                question: 'How are your fees structured?',
                answer:
                  'Fees vary based on the scope and complexity of each engagement. We provide detailed estimates and can discuss flexible arrangements.',
              },
              {
                question: 'Can you assist with regulatory compliance matters?',
                answer:
                  'Yes, we provide comprehensive guidance on maritime regulations, including IMO, classification society, and flag state requirements.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-border bg-card"
              >
                <h3 className="font-bold text-foreground mb-3">{faq.question}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
