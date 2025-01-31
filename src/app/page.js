import About from '@/components/About'
import Project from '@/components/Project'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import React from 'react'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Service from '@/components/Service'


const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Service />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default page