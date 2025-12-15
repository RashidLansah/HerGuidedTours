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
              <svg width="510" height="85" viewBox="0 0 510 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 45.5886C4.04131 45.5749 2.64236 46.1423 1.61091 47.174C0.579463 48.2052 1.01992e-07 49.6162 1.01992e-07 51.0886C1.01992e-07 52.5611 0.579463 53.9721 1.61091 55.0033C2.64236 56.035 4.04131 56.6024 5.5 56.5886C5.5 56.5886 5.5 56.5886 5.5 56.5886C15.2793 56.5602 25.1712 56.5211 35.0298 56.4744C69.858 56.3086 104.515 56.0589 139.342 55.7484C199.898 55.1111 258.025 35.1485 311.42 9.58703C315.979 7.53641 320.658 5.28127 324.884 4.96473C332.046 4.49113 339.132 6.35945 342.76 12.0955C346.459 17.7548 347.109 25.395 347.078 32.7063C347.561 47.6612 341.37 62.0263 346.045 78.4864C349.407 82.6052 353.416 82.9306 357.167 84.0603C361.79 85.1804 366.617 85.1554 371.208 84.2103C383.842 82.3418 395.183 74.54 406.206 70.7142C416.241 69.1208 426.932 70.7983 437.361 68.7331C454.367 65.9943 468.213 55.2829 484.054 49.8985C484.065 49.8948 484.075 49.8911 484.086 49.8874L484.122 49.8722C490.865 46.4618 497.226 42.2894 504.28 39.6079L504.258 39.6112C506.661 39.6778 508.015 42.0316 509.5 43.6806C509.5 43.6806 509.5 43.6806 509.5 43.6806C508.041 42.0092 506.76 39.6139 504.261 39.483L504.239 39.4863C497.102 42.0499 490.663 46.1064 483.873 49.3823L483.91 49.367C483.899 49.3705 483.888 49.3741 483.878 49.3776C467.803 54.5304 453.802 64.923 437.093 67.2708C426.913 69.1066 416.506 67.2208 405.859 68.6753C393.256 72.8204 383.262 79.8198 370.675 81.4937C366.431 82.2863 362.028 82.214 357.905 81.132C354.462 80.2054 350.246 78.8859 348.82 76.8289C345.396 64.0208 351.157 47.8899 351.152 32.78C351.276 25.1445 350.998 16.9215 346.529 9.64424C341.998 2.08257 332.504 -0.407826 324.663 0.0529322C318.675 0.469275 314.015 2.8796 309.299 4.83892C255.624 29.3394 198.064 47.7246 139.345 47.2371C104.529 46.9014 69.8845 46.5049 35.0775 46.0245C25.201 45.8878 15.4203 45.744 5.5 45.5886Z" fill="#FFE500"/>
              </svg>
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
