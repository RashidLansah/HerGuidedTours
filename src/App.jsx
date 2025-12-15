import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ToursHeader from './components/ToursHeader'
import ImageGallery from './components/ImageGallery'
import DestinationsHeader from './components/DestinationsHeader'
import DestinationsShowcase from './components/DestinationsShowcase'
import SpecialDealsHeader from './components/SpecialDealsHeader'
import SpecialDealsSection from './components/SpecialDealsSection'
import WhatToKnowSection from './components/WhatToKnowSection'
import TestimonialSection from './components/TestimonialSection'
import AutoScrollGallery from './components/AutoScrollGallery'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="tours">
        <ToursHeader />
        <ImageGallery />
      </section>
      <section id="destinations">
        <DestinationsHeader />
        <DestinationsShowcase />
      </section>
      <section id="about">
        <SpecialDealsHeader />
        <SpecialDealsSection />
        <WhatToKnowSection />
      </section>
      <section id="blog">
        <TestimonialSection />
        <AutoScrollGallery />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </div>
  )
}

export default App
