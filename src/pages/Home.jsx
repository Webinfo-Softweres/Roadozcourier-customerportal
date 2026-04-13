import React from 'react'
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import Services from '../components/Services';
import Franchise from '../components/Franchise';
import Testimonials from '../components/Testimonials';
import Download from '../components/Download';

function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Features />
        <About />
        <Services />
        <Franchise />
        <Testimonials />
        <Download />
      </main>
      
      
    </div>
  )
}

export default Home
