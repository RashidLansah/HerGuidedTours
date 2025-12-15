import './App.css'
import './styles/animations.css'
import { lazy, Suspense } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'

// Lazy load components below the fold for better initial load performance
const ToursHeader = lazy(() => import('./components/ToursHeader'))
const ImageGallery = lazy(() => import('./components/ImageGallery'))
const DestinationsHeader = lazy(() => import('./components/DestinationsHeader'))
const DestinationsShowcase = lazy(() => import('./components/DestinationsShowcase'))
const SpecialDealsHeader = lazy(() => import('./components/SpecialDealsHeader'))
const SpecialDealsSection = lazy(() => import('./components/SpecialDealsSection'))
const WhatToKnowSection = lazy(() => import('./components/WhatToKnowSection'))
const TestimonialSection = lazy(() => import('./components/TestimonialSection'))
const AutoScrollGallery = lazy(() => import('./components/AutoScrollGallery'))
const Footer = lazy(() => import('./components/Footer'))

// Loading fallback component
const LoadingFallback = () => (
  <div style={{ 
    minHeight: '200px', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    background: '#f6f6f6'
  }}>
    <div style={{ 
      width: '40px', 
      height: '40px', 
      border: '3px solid #f3f3f3',
      borderTop: '3px solid #9D4EDD',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }}></div>
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
)

function App() {
  return (
    <div className="app">
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="tours">
        <Suspense fallback={<LoadingFallback />}>
          <ToursHeader />
          <ImageGallery />
        </Suspense>
      </section>
      <section id="destinations">
        <Suspense fallback={<LoadingFallback />}>
          <DestinationsHeader />
          <DestinationsShowcase />
        </Suspense>
      </section>
      <section id="about">
        <Suspense fallback={<LoadingFallback />}>
          <SpecialDealsHeader />
          <SpecialDealsSection />
          <WhatToKnowSection />
        </Suspense>
      </section>
      <section id="blog">
        <Suspense fallback={<LoadingFallback />}>
          <TestimonialSection />
          <AutoScrollGallery />
        </Suspense>
      </section>
      <section id="contact">
        <Suspense fallback={<LoadingFallback />}>
          <Footer />
        </Suspense>
      </section>
    </div>
  )
}

export default App
