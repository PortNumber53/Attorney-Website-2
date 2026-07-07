import { FileText, Download, AlertCircle, Phone, ArrowRight } from 'lucide-react'

const forms = [
  { label: 'Online Claims Incident Report — All Claims', type: 'online', href: '#contact' },
  { label: 'Auto Claims Incident Report', type: 'download', href: '#' },
  { label: 'Property Claims Incident Report', type: 'download', href: '#' },
  { label: 'General Liability Claims Incident Report', type: 'download', href: '#' },
]

export default function FileClaim() {
  return (
    <section id="file-claim" className="py-24 bg-brand-950">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-300">
              File a Claim
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Self-Service Claim Reporting
            </h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1633675254053-d96c7668c3b8?w=800&q=80"
                alt="Insurance claim documentation"
                className="h-56 w-full object-cover"
              />
            </div>
            <p className="mt-6 text-lg leading-relaxed text-brand-100">
              These forms are intended to gather the information required for notice of a new commercial
              property or casualty claim. Submission notifies our team of a new loss. For urgent matters,
              please call our office or refer to your policy for instructions to report directly to the
              insurance company.
            </p>

            <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <AlertCircle className="h-5 w-5 shrink-0 text-accent-400" />
              <p className="text-sm text-brand-100">
                <span className="font-semibold text-white">Important:</span> Submission of these forms
                notifies MPG Consulting Services of a new loss. It does <span className="font-semibold text-white">not</span> notify your
                insurance company directly.
              </p>
            </div>

            <a
              href="tel:+18005550100"
              className="mt-6 inline-flex items-center gap-2 text-brand-200 hover:text-white"
            >
              <Phone className="h-5 w-5" />
              <span className="text-lg font-semibold">(800) 555-0100</span>
              <span className="text-sm font-normal text-brand-300">— For urgent matters</span>
            </a>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-2xl">
            <h3 className="text-lg font-semibold text-slate-900">Choose a Form</h3>
            <p className="mt-1 text-sm text-slate-500">Select the appropriate form for your claim type.</p>

            <div className="mt-6 space-y-3">
              {forms.map((form) => (
                <a
                  key={form.label}
                  href={form.href}
                  className={`group flex items-center justify-between rounded-xl border p-4 transition-all ${
                    form.type === 'online'
                      ? 'border-brand-200 bg-brand-50 hover:border-brand-400 hover:bg-brand-100'
                      : 'border-slate-200 bg-slate-50 hover:border-brand-300 hover:bg-brand-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {form.type === 'online' ? (
                      <FileText className="h-5 w-5 text-brand-600" />
                    ) : (
                      <Download className="h-5 w-5 text-slate-400 group-hover:text-brand-600" />
                    )}
                    <span className="text-sm font-medium text-slate-700">{form.label}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-brand-600" />
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-xl bg-slate-50 p-4">
              <p className="text-xs text-slate-500">
                Need help choosing? Contact our claims team and we'll guide you through the process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
