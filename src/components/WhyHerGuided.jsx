import './WhyHerGuided.css'

function WhyHerGuided() {
  const features = [
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
    <section className="why-herguided-section">
      <div className="section-header">
        <h2>Why HerGuided Tours</h2>
        <div className="divider">⸻</div>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-bullet">•</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyHerGuided

