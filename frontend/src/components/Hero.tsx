import { ShieldCheck, ArrowRight, Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt="Modern office workspace"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950/95 via-brand-900/90 to-brand-800/85" />
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl" />
      </div>

      <div className="container-x relative z-10 pt-20">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm animate-fade-in">
            <ShieldCheck className="h-4 w-4 text-accent-400" />
            20+ Years of Claims Expertise Nationwide
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl animate-fade-in-up">
            Take Claims Management
            <span className="block text-brand-300">Off Your Plate</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-100 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            When a loss occurs, a claim is an opportunity for your insurance company to make good on its
            promises. Our experienced advocates guide you through every stage of the claims process —
            minimizing disruption and maximizing recovery. What <span className="font-semibold text-white">"covered"</span> should feel like.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <a href="#contact" className="btn-primary">
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#file-claim" className="btn-secondary">
              File a Claim
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-brand-200 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a href="tel:+18005550100" className="flex items-center gap-2 hover:text-white">
              <Phone className="h-4 w-4" />
              (800) 555-0100
            </a>
            <span className="h-4 w-px bg-white/20" />
            <span>Serving Clients Nationwide</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L60 72C120 64 240 48 360 42.7C480 37.3 600 42.7 720 48C840 53.3 960 58.7 1080 56C1200 53.3 1320 42.7 1380 37.3L1440 32V80H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
