import Header from './components/Header'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import Services from './components/Services'
import Process from './components/Process'
import LinesOfBusiness from './components/LinesOfBusiness'
import FileClaim from './components/FileClaim'
import WhyChooseUs from './components/WhyChooseUs'
import Team from './components/Team'
import FAQ from './components/FAQ'
import Resources from './components/Resources'
import CTAContact from './components/CTAContact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <Process />
        <LinesOfBusiness />
        <FileClaim />
        <WhyChooseUs />
        <Team />
        <FAQ />
        <Resources />
        <CTAContact />
      </main>
      <Footer />
    </div>
  )
}
