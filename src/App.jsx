import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Reels from './components/Reels'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MobileTabBar from './components/MobileTabBar'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink-950 pb-16 text-silk-cream lg:pb-0">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Reels />
        <Contact />
      </main>
      <Footer />
      <MobileTabBar />
    </div>
  )
}
