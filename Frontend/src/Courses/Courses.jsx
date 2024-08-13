import React from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'

function Courses() {
  return (
    <>
      {/* Render the Navbar component */}
      <Navbar/>
      
      {/* Render the Course component */}
      <Course/>
      
      {/* Render the Footer component */}
      <Footer/>
    </>
  )
}

export default Courses
