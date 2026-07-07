import { Quote, Award, Mail, Phone } from 'lucide-react'

const team = [
  {
    name: 'Joanne Varias',
    role: 'Founder & Principal',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    bio: 'A licensed claim adjuster in multi-lines and states, highly regarded as an industry expert respected among insurance agencies and law firms for her ability to overcome the urgencies of clients no matter the need.',
  },
  {
    name: 'Matthew J. Parrott',
    role: 'Senior Claims Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'Decades of experience in claims management and litigation oversight, ensuring carriers and TPAs remain on task toward timely resolution.',
  },
  {
    name: 'Lisa Kounitz',
    role: 'Director of Risk Control',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    bio: 'Specializes in strategic claims analysis and risk management strategies that reduce the severity, impact, and frequency of claims.',
  },
]

export default function Team() {
  return (
    <section id="team" className="py-24 bg-slate-50">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">Our Team</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Experienced Professionals Who Hit the Ground Running
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Relying on expertise gained from decades of experience, our team can efficiently manage claims
            and litigation from the moment a claim is reported.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-xl hover:shadow-slate-200/60">
              <div className="relative aspect-[2/3] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                  <p className="text-sm font-medium text-brand-300">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-slate-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 mx-auto max-w-3xl rounded-2xl bg-gradient-to-br from-brand-900 to-brand-950 p-10 text-center shadow-xl">
          <Quote className="mx-auto h-10 w-10 text-brand-400" />
          <p className="mt-4 text-xl font-medium leading-relaxed text-white">
            "We put our clients' minds at ease from the outset, taking a proactive, communicative and
            professional approach that is indicative of our broader capabilities."
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-brand-200">
            <span className="flex items-center gap-1.5">
              <Award className="h-4 w-4" />
              Licensed in Multiple States
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="h-4 w-4" />
              team@mpgconsultingservices.com
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="h-4 w-4" />
              (800) 555-0100
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
