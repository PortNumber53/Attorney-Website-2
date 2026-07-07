import { TrendingDown, Clock, Users, MapPin } from 'lucide-react'

const stats = [
  { icon: Clock, value: '20+', label: 'Years of Experience' },
  { icon: MapPin, value: '50', label: 'States Served' },
  { icon: Users, value: '500+', label: 'Claims Managed Annually' },
  { icon: TrendingDown, value: '30%', label: 'Avg. Severity Reduction' },
]

export default function StatsBar() {
  return (
    <section className="border-b border-slate-100 bg-white py-12">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50">
                <stat.icon className="h-6 w-6 text-brand-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
              <div className="mt-1 text-sm font-medium text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
