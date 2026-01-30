import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { Stats } from '@/components/sections/Stats'
import { Features } from '@/components/sections/Features'
import { Integrations } from '@/components/sections/Integrations'
import { TrustedBy } from '@/components/sections/TrustedBy'
import { CaseStudy } from '@/components/sections/CaseStudy'
import { Pricing } from '@/components/sections/Pricing'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA, Footer } from '@/components/sections/Footer'

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <HowItWorksSection />
        <Stats />
        <Features />
        <Integrations />
        <TrustedBy />
        <CaseStudy />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
