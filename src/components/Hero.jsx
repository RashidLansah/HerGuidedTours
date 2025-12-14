import './Hero.css'

function Hero() {
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

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay">
          <div className="hero-text-overlay">
            <div className="hero-label">TOURS</div>
            <div className="hero-main-text">
              <span className="hero-title">HerGuided Tours.</span>
            </div>
            <div className="hero-description">
              Experience Northern Ghana through culture, community & nature. Immersive, women-led experiences across Tamale and Northern Ghana.
            </div>
          </div>
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
