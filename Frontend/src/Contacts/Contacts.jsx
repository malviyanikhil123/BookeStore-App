import React from 'react'
import Navbar from '../components/Navbar' // Import the Navbar component
import Contact from '../components/Contact' // Import the Contact component
import Footer from '../components/Footer' // Import the Footer component

function Contacts() {
  return (
    <>
      <Navbar/> {/* Render the Navbar component */}
      <Contact/> {/* Render the Contact component */}
      <div className="min-h-screen"></div> {/* Spacer to ensure minimum height of the screen */}
      <Footer/> {/* Render the Footer component */}
    </>
  )
}

export default Contacts
