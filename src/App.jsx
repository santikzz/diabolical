import { HeroParallax } from './components/HeroParallax'
import { AboutUs } from './components/AboutUs'
import { FeaturedProducts } from './components/FeaturedProducts'
import { Footer } from './components/Footer'
import { GlobalProvider } from './GlobalContext'

function App() {


  return (
    <GlobalProvider>
      <main>

        <HeroParallax />

        <AboutUs />

        <FeaturedProducts />

        <Footer />

      </main>
    </GlobalProvider>
  )
}

export default App
