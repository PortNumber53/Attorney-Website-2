import { ShieldCheck, Eye, Zap, Handshake, Award, Clock4 } from 'lucide-react'

const values = [
  {
    icon: Eye,
    title: 'Hands-On Oversight',
    description:
      'We provide oversight to make sure the carrier\'s claim professional remains on task with actions to move the claim toward timely resolution.',
  },
  {
    icon: ShieldCheck,
    title: 'Thorough Investigation',
    description:
      'We verify that the appropriate investigation is completed, evidence is protected, and actions are taken to prevent future occurrences.',
  },
  {
    icon: Zap,
    title: 'Minimize Disruption',
    description:
      'Our goal is to minimize disruption and see that your business is brought to pre-loss condition as expediently as possible.',
  },
  {
    icon: Handshake,
    title: 'Partnership & Communication',
    description:
      'By fostering communication and partnership between you and your claims adjuster, we facilitate prompt and fair resolution of claims.',
  },
  {
    icon: Award,
    title: 'Expertise & Integrity',
    description:
      'Our experience and integrity are the foundation of our claim management. You can count on our professionals for premium, cost-effective services.',
  },
  {
    icon: Clock4,
    title: 'Timely Resolution',
    description:
      'We believe all claims should be thoroughly investigated and managed to ensure the appropriate benefits are paid in a timely manner.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Professional team collaboration"
                className="h-[480px] w-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 rounded-2xl bg-brand-600 p-6 shadow-xl text-white">
              <div className="text-4xl font-bold">30%</div>
              <div className="text-sm text-brand-100">Avg. severity reduction</div>
            </div>
          </div>

          <div>
            <span className="section-label">Why Choose MPG</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Dedicated Claims Team on Your Side
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              At MPG Consulting, you'll have access to a dedicated claims team to manage and mitigate claims on
              behalf of your company. We challenge you to take a critical look at what "high performance"
              means to your business.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="group rounded-xl border border-slate-100 bg-slate-50 p-5 transition-all hover:border-brand-200 hover:bg-white hover:shadow-lg">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600 shadow-md shadow-brand-600/20">
                    <value.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">{value.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
