import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import BentoGrid from '@/components/BentoGrid'
import CatalogLinks from '@/components/CatalogLinks'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <Hero />
      <BentoGrid />
      <CatalogLinks />
      <Footer />
    </main>
  )
}

