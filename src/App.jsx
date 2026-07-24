import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Gallery from './components/Gallery'
import Reels from './components/Reels'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MobileTabBar from './components/MobileTabBar'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import { ThemeProvider } from './hooks/useTheme'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen overflow-x-hidden bg-canvas pb-16 text-fg transition-colors duration-300 lg:pb-0">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Pricing />
          <Gallery />
          <Reels />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <MobileTabBar />
        <FloatingWhatsApp />
      </div>
    </ThemeProvider>
  )
}
