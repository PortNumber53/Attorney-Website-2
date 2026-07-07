import {
  ShieldCheck,
  FileSearch,
  BarChart3,
  Gavel,
  TrendingDown,
  Calculator,
} from 'lucide-react'

const services = [
  {
    icon: ShieldCheck,
    title: 'Claims Advocacy',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80',
    description:
      'We advocate on your behalf through every stage of the claims process. From first notice of loss to final resolution, our team leverages years of experience and key relationships to ensure prompt, fair outcomes.',
    features: ['Coverage dispute advocacy', 'Carrier communication', 'Strategic claims management'],
  },
  {
    icon: FileSearch,
    title: 'Third-Party Administration',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
    description:
      'Comprehensive TPA services for insurance carriers with more claims than they can efficiently handle. We manage claims systematically with a proactive, communicative, and professional approach.',
    features: ['Full-spectrum claims handling', 'Litigation management', 'Run-off services'],
  },
  {
    icon: BarChart3,
    title: 'Claims Analysis & Review',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    description:
      'We monitor claims, review reserves, and analyze coverage determinations. Our team verifies that investigations are thorough, evidence is protected, and actions are taken to prevent future occurrences.',
    features: ['Reserve review & monitoring', 'Coverage determination analysis', 'Loss trend analysis'],
  },
  {
    icon: TrendingDown,
    title: 'Risk Control & Mitigation',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    description:
      'Strategic claims analysis to mitigate future losses. We focus on risk management strategies that reduce the severity, impact, and frequency of claims — protecting your bottom line.',
    features: ['Severity reduction strategies', 'Frequency analysis', 'Risk management program improvements'],
  },
  {
    icon: Gavel,
    title: 'Coverage Dispute Resolution',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80',
    description:
      'When claims go awry, our experienced professionals help you develop a strategy and advocate on your behalf during coverage disputes with carriers and TPAs.',
    features: ['Pre-loss coverage inquiries', 'Coverage position analysis', 'Escalation of complex claims'],
  },
  {
    icon: Calculator,
    title: 'Financial & Actuarial',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
    description:
      'Reconciliation accounting and financial oversight to ensure accurate claims financials. We coordinate claim file reviews and provide direction to claim professionals on your behalf.',
    features: ['Reconciliation accounting', 'Financial reporting', 'Claim file review coordination'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">What We Do</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Comprehensive Claims Solutions
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From advocacy to administration, we provide the expertise and support you need to navigate
            the claims process with confidence.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="card group overflow-hidden p-0">
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 to-transparent" />
                <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 shadow-lg backdrop-blur-sm">
                  <service.icon className="h-5 w-5 text-brand-600" strokeWidth={2} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
