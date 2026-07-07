import { Shield, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

const footerLinks = {
  Services: [
    { label: 'Claims Advocacy', href: '#services' },
    { label: 'Third-Party Administration', href: '#services' },
    { label: 'Claims Analysis & Review', href: '#services' },
    { label: 'Risk Control & Mitigation', href: '#services' },
    { label: 'Coverage Dispute Resolution', href: '#services' },
  ],
  Company: [
    { label: 'About Us', href: '#team' },
    { label: 'Our Team', href: '#team' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Resources', href: '#resources' },
    { label: 'FAQ', href: '#faq' },
  ],
  Client: [
    { label: 'File a Claim', href: '#file-claim' },
    { label: 'Request a Quote', href: '#contact' },
    { label: 'Carrier Contacts', href: '#' },
    { label: 'Lines of Business', href: '#coverage' },
  ],
}

const locations = [
  'Los Angeles, CA',
  'San Luis Obispo, CA',
  'Irvine, CA',
]

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="border-b border-white/5">
        <div className="container-x py-12">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div>
              <h3 className="text-xl font-semibold text-white">Stay Connected</h3>
              <p className="mt-1 text-sm text-slate-400">
                Get claims insights and industry updates delivered to your inbox.
              </p>
            </div>
            <form className="flex w-full max-w-md gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-900"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
              >
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600">
                <Shield className="h-6 w-6 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold text-white">MPG Consulting</span>
                <span className="text-xs font-medium text-brand-400">Services LLC</span>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Insurance exists to provide peace of mind amid uncertainty. When a loss occurs, we're here
              to help you through every stage of the claims process. What "covered" should feel like.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a href="tel:+18005550100" className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4 text-brand-500" />
                (800) 555-0100
              </a>
              <a href="mailto:team@mpgconsultingservices.com" className="flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4 text-brand-500" />
                team@mpgconsultingservices.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-500" />
                1230 Rosecrans Avenue, Suite 300, Los Angeles, CA 90019
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 transition-colors hover:bg-brand-600" aria-label="LinkedIn">
                <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 transition-colors hover:bg-brand-600" aria-label="X">
                <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">{title}</h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/5 pt-8">
          <div className="flex flex-wrap items-center gap-6">
            <span className="text-sm font-semibold text-white">Serving:</span>
            {locations.map((loc) => (
              <span key={loc} className="text-sm text-slate-400">
                {loc}
              </span>
            ))}
            <span className="text-sm text-slate-400">— and nationwide</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-x py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row">
            <p>© 2026 MPG Consulting Services, LLC. Registered in California. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
