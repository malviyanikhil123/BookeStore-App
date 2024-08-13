import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import FreeCard from '../components/FreeCard'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      {/* Render the Navbar component */}
      <Navbar/>
      
      {/* Render the Banner component */}
      <Banner/>
      
      {/* Render the FreeCard component */}
      <FreeCard/>
      
      {/* Render the Footer component */}
      <Footer/>
    </div>
  )
}

export default Home
