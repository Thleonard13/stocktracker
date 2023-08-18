import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MobileMenu from './components/MobileMenu/MobileMenu'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Market from './components/Market/Market'
import AboutUs from './components/AboutUsSection/AboutUs'
import JoinUs from './components/JoinUsSection/JoinUs'
import Footer from './components/Footer/Footer'

function App() {
  const [menuActive, setMenuActive] = useState(false)

  const toggleMenu = () => {
    setMenuActive(!menuActive)
  }

  return (
    <div id='app-content'>
      <MobileMenu isActive={menuActive} toggleMenu={toggleMenu}/>
      <Navbar toggleMenu={toggleMenu}/>
      <Hero />
      <Market />
      <AboutUs />
      <JoinUs />
      <Footer />
    </div>
  )
}

export default App
