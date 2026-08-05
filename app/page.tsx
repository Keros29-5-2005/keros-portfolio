import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Timeline from '@/components/Timeline'
import FeaturedProject from '@/components/FeaturedProject'
import Projects from '@/components/Projects'
import IPT from '@/components/IPT'
import Competitions from '@/components/Competitions'
import Research from '@/components/Research'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Achievements from '@/components/Achievements'
import Toolkit from '@/components/Toolkit'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F1115] text-[#F5F3EE]">
      <Navbar />
      <Hero />
      <About />
      <Toolkit />
      <Timeline />
      <FeaturedProject />
      <Projects />
      <IPT />
      <Research />
      <Competitions />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}