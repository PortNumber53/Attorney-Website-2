import { useState } from 'react'
import { ArrowRight, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react'

export default function CTAContact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="Modern office building"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/95 via-brand-950/95 to-slate-900/95" />
      </div>

      <div className="container-x relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-300">
              Get Started
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Take Claims Management
              <span className="block text-brand-300">Off Your Plate</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-brand-100">
              Work with partners who know what it takes to manage and mitigate claims. Let us show you
              the way to high-performance claims management.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-brand-300">Call Us</div>
                  <a href="tel:+18005550100" className="text-lg font-semibold text-white hover:text-brand-200">
                    (800) 555-0100
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-brand-300">Email Us</div>
                  <a href="mailto:team@mpgconsultingservices.com" className="text-lg font-semibold text-white hover:text-brand-200">
                    team@mpgconsultingservices.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-brand-300">Visit Us</div>
                  <span className="text-lg font-semibold text-white">
                    1230 Rosecrans Avenue, Suite 300, Los Angeles, CA 90019
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-2xl">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">Thank You!</h3>
                <p className="mt-2 text-sm text-slate-600">
                  We've received your request and will be in touch shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-medium text-brand-600 hover:text-brand-700"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-slate-900">Request a Quote</h3>
                <p className="mt-1 text-sm text-slate-500">
                  Tell us about your needs and we'll get back to you within 24 hours.
                </p>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-700">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-slate-700">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      How can we help?
                    </label>
                    <textarea
                      rows={3}
                      className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                      placeholder="Tell us about your claims needs..."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Send Request
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
