import { HeroSection } from '@/components/sections/HeroSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { ServiceShowcase } from '@/components/sections/ServiceShowcase'
import { ClientSuccessStories } from '@/components/sections/ClientSuccessStories'
import { TechnologyPartners } from '@/components/sections/TechnologyPartners'
import { TeamSection } from '@/components/sections/TeamSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServiceShowcase />
      <ClientSuccessStories />
      <TechnologyPartners />
      <TeamSection />
    </>
  )
}
