import { FileText, Send, Search, MessageSquare, CheckCircle2, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: FileText,
    title: 'Report the Claim',
    description:
      'Submit your claim through our online portal or downloadable forms. We prepare and report the first notice of loss to your carrier.',
  },
  {
    icon: Send,
    title: 'Carrier Notification',
    description:
      'We ensure your insurance company receives proper notice and that the appropriate investigation is initiated promptly.',
  },
  {
    icon: Search,
    title: 'Monitor & Investigate',
    description:
      'We monitor claims, review reserves, and verify that evidence is protected. Our team ensures the carrier stays on task toward timely resolution.',
  },
  {
    icon: MessageSquare,
    title: 'Advocate & Communicate',
    description:
      'We foster communication between you and your claims adjuster, advocating on your behalf during coverage disputes and facilitating fair resolution.',
  },
  {
    icon: CheckCircle2,
    title: 'Resolution & Recovery',
    description:
      'We strive for prompt and fair claim resolution, bringing your business to pre-loss condition as expediently as possible.',
  },
  {
    icon: TrendingUp,
    title: 'Review & Improve',
    description:
      'We review loss trends and analyze outcomes to identify opportunities for your risk management program improvements.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative hidden lg:block">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Claims team meeting"
                className="h-[520px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-white p-6 shadow-xl border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">6 Steps</div>
                  <div className="text-sm text-slate-500">From report to review</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="section-label">Our Process</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A Clear Path to Claim Resolution
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              The path to claim resolution is not always clear. We guide you through every stage with a
              strategic, hands-on approach.
            </p>

            <div className="mt-8 space-y-4">
              {steps.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div className="relative flex flex-col items-center">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-600 shadow-lg shadow-brand-600/20">
                      <step.icon className="h-5 w-5 text-white" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="mt-2 w-px flex-1 bg-slate-200" />
                    )}
                  </div>
                  <div className="pb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-brand-400">STEP 0{index + 1}</span>
                    </div>
                    <h3 className="mt-0.5 text-base font-semibold text-slate-900">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
