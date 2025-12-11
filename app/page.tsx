import NavBar from '@/components/NavBar'
import Intro3D from '@/components/Intro3D'
import Hero from '@/components/Hero'
import BentoGrid from '@/components/BentoGrid'
import CatalogLinks from '@/components/CatalogLinks'
import SupportBanner from '@/components/SupportBanner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <Intro3D />
      <Hero />
      <BentoGrid />
      <CatalogLinks />
      <SupportBanner ctaHref="#support" />
      <Footer />
    </main>
  )
}

