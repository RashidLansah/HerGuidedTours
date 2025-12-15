import './Hero.css'
import { useState, useEffect } from 'react'

function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const whyHerGuidedFeatures = [
    {
      title: 'Women-Led & Community Rooted',
      description: 'All experiences are designed and delivered with local women, artisans, farmers, and cultural custodians.'
    },
    {
      title: 'Authentic Cultural Experiences',
      description: 'We go beyond sightseeing to offer hands-on learning, storytelling, and real cultural immersion.'
    },
    {
      title: 'Safe, Curated & Local-Led',
      description: 'Every experience is thoughtfully curated for comfort, safety, and meaningful connection.'
    }
  ]

  const handleBookNow = () => {
    const phoneNumber = '2338642845'
    const message = `Hello! I'm interested in booking a tour with HerGuided Tours.`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="hero">
      <div className="hero-wrapper">
        <div className="hero-top-section">
          <div className="hero-content-container">
            <div className="hero-text-section">
              <div className="hero-title-row">
                <div className="hero-title-section">
                  <div className="hero-welcome-title-row">
                    <div className="hero-welcome-text">Welcome to</div>
                    <div className="hero-main-title">HerGuided Tours</div>
                  </div>
                  <div className="hero-subtitle">& Cultural <span className="hero-subtitle-violet">Experiences</span></div>
                </div>
                <div className="hero-description-section">
                  <p>Experience Northern Ghana through culture, community & nature. Immersive, women-led experiences across Tamale and Northern Ghana.</p>
                </div>
              </div>
            </div>
            <div className="hero-social-icons">
              <a href="https://www.linkedin.com/in/rabiatu-abdul-aziz-749a98219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/p/Herguided-Cultural-Tours-and-Experiences-61561105757732/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/herguided_tours?igsh=MWE0bDkwMW5nbGZsdw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@herguidedtours?_r=1&_t=ZM-92FLinlUKAS" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.85 2.85 0 0 1 .88.13V9.4a6.18 6.18 0 0 0-1-.05A6.27 6.27 0 0 0 5 20.1a6.27 6.27 0 0 0 10.86-4.43v-7a4.85 4.85 0 0 0 3.77 1.94v-3.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="hero-cta-section">
            <div className="hero-yellow-underline">
              <img src="/images/stroke.svg" alt="Decorative stroke" loading="eager" />
            </div>
            <button className="hero-book-button" onClick={handleBookNow}>Book now</button>
          </div>
        </div>
        <div className="hero-image-section">
          <img 
            src="/images/stunning-waterfall-landscape.jpg" 
            alt="Stunning Waterfall Landscape"
            className="hero-parallax-image"
            loading="eager"
            fetchPriority="high"
            style={{
              transform: `translateY(${Math.min(scrollY * 0.15, 100)}px)`
            }}
          />
        </div>
      </div>
      <div className="why-herguided-section">
        <div className="why-herguided-container">
          <h2 className="why-herguided-title">Why HerGuided Tours</h2>
          <div className="why-herguided-features">
            {whyHerGuidedFeatures.map((feature, index) => (
              <div key={index} className="why-feature">
                <div className="why-feature-bullet">•</div>
                <div className="why-feature-content">
                  <h3 className="why-feature-title">{feature.title}</h3>
                  <p className="why-feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
