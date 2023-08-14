import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Market from './components/Market/Market'
import AboutUs from './components/AboutUsSection/AboutUs'
import JoinUs from './components/JoinUsSection/JoinUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Market />
      <AboutUs />
      <JoinUs />
    </>
  )
}

export default App
