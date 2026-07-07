import { ArrowRight } from 'lucide-react'

const articles = [
  {
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
    category: 'Claims Analysis',
    title: '$14,170 in Returned Premium Due to Xmod Recalculation',
    excerpt:
      'Behind every workers\' compensation claim is an opportunity to protect your bottom line. See how our claims experts uncovered an experience modification error and helped a client recover premium.',
  },
  {
    image: 'https://images.unsplash.com/photo-1530092285049-1c42085fd395?w=600&q=80',
    category: 'Risk Management',
    title: 'The Growing Need for Cyber Insurance in Construction',
    excerpt:
      'As companies adopt more digital tools, cyber risks are growing. Learn how cyber insurance helps protect your business from evolving threats.',
  },
  {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
    category: 'Employment Practices',
    title: 'Why Contractors Need Employment Practices Liability Coverage',
    excerpt:
      'EPLI helps protect contractors from costly claims involving hiring, termination, harassment, discrimination, and workplace conduct on active jobsites.',
  },
  {
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    category: 'Professional Liability',
    title: 'Contractors Professional Liability (CPL): What You Need to Know',
    excerpt:
      'CPL insurance helps protect construction businesses from costly design, coordination, and project management errors that standard liability policies may not cover.',
  },
  {
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80',
    category: 'Fleet Safety',
    title: '2026 Auto Insurance: Driver Safety, Fleet Safety, and Telematics',
    excerpt:
      'Fleets face rising insurance costs. Learn how AI dashcams, telematics, MVR monitoring, and ADAS can reduce risk and premiums.',
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
    category: 'Workers\' Compensation',
    title: 'The Underutilized Advantage: Nurse Triage in Workers\' Comp',
    excerpt:
      'Why nurse triage is an underutilized advantage that helps employers control costs, prevent claim creep, reduce litigation, and improve injury response outcomes.',
  },
]

export default function Resources() {
  return (
    <section id="resources" className="py-24 bg-slate-50">
      <div className="container-x">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <span className="section-label">Articles & Insights</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Resources & Insights
            </h2>
          </div>
          <a href="#" className="btn-outline">
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-600 backdrop-blur-sm">
                  {article.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-base font-semibold leading-snug text-slate-900 group-hover:text-brand-700">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{article.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600">
                  Read More
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
