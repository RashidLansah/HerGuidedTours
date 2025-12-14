import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ToursHeader from './components/ToursHeader'
import ImageGallery from './components/ImageGallery'
import DestinationsHeader from './components/DestinationsHeader'
import DestinationsShowcase from './components/DestinationsShowcase'
import SpecialDealsHeader from './components/SpecialDealsHeader'
import SpecialDealsSection from './components/SpecialDealsSection'
import TestimonialSection from './components/TestimonialSection'
import AutoScrollGallery from './components/AutoScrollGallery'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <ToursHeader />
      <ImageGallery />
      <DestinationsHeader />
      <DestinationsShowcase />
      <SpecialDealsHeader />
      <SpecialDealsSection />
      <TestimonialSection />
      <AutoScrollGallery />
      <Footer />
    </div>
  )
}

export default App
