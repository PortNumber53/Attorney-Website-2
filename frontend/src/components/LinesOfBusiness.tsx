import {
  Building2,
  Briefcase,
  Globe,
  Shield,
  Cpu,
  Users,
  Landmark,
  Home,
  Truck,
} from 'lucide-react'

const lines = [
  { icon: Building2, name: 'Commercial General Liability' },
  { icon: Briefcase, name: 'Professional Liability' },
  { icon: Users, name: 'Management Liability (D&O)' },
  { icon: Shield, name: 'Employment Practices Liability' },
  { icon: Cpu, name: 'Cyber Security' },
  { icon: Landmark, name: 'Financial Institutions' },
  { icon: Home, name: 'First & Third-Party Property' },
  { icon: Globe, name: 'Reinsurance & Environmental' },
  { icon: Truck, name: 'Auto & Fleet' },
]

export default function LinesOfBusiness() {
  return (
    <section id="coverage" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">Lines of Business</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Full-Spectrum Coverage Expertise
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We handle claims across the full spectrum of policies and coverages, with expertise in both
            primary and excess claims.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {lines.map((line) => (
            <div
              key={line.name}
              className="group flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-5 transition-all hover:border-brand-200 hover:shadow-lg hover:shadow-brand-100/50"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 transition-colors group-hover:bg-brand-600">
                <line.icon className="h-5 w-5 text-brand-600 transition-colors group-hover:text-white" />
              </div>
              <span className="text-sm font-semibold text-slate-700">{line.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
