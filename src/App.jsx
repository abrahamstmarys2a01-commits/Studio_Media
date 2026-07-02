import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Studios from './components/Studios'
import Booking from './components/Booking'
import Equipment from './components/Equipment'
import Gallery from './components/Gallery'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [activeBooking, setActiveBooking] = useState(null);

  return (
    <>
      <Navbar setActiveBooking={setActiveBooking} />
      <Hero />
      <About />
      <Studios activeBooking={activeBooking} setActiveBooking={setActiveBooking} />
      <Equipment />
      <Gallery />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default App
