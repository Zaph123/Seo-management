import Navbar from './pages/Navbar'
import Hero from './pages/Hero'
import Services from './pages/Services'
import GrowWithUs from './pages/WhyTrustUs'
import Portfolio from './pages/Portfolio'
import OurPricingPlans from './pages/OurPlans'
import Subscribe from './pages/Subscribe'
import Videos from './pages/Videos'
import Footer from './pages/Footer'

import './App.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import { useState, createContext } from 'react'
export const ThemeContext = createContext(null)


function App() {
  const [theme, setTheme] = useState("light")
  
  return (
    <ThemeContext.Provider value={theme}>
    <main id={theme}>
      <Navbar themeBtn={setTheme}/>
      <Hero />
      <Services />
      <GrowWithUs />
      <Portfolio />
      <OurPricingPlans />
      <Subscribe />
      <Videos />
      <Footer />
    </main>
    </ThemeContext.Provider>
  )
}

export default App
