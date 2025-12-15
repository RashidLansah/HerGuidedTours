import './TestimonialSection.css'

function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      date: '2024-08-15',
      quote: 'HerGuided Tours has completely revolutionized how we approach cultural experiences. The women-led tours are incredibly authentic, and the hands-on activities ensure we truly connect with the local culture. This platform is the future of immersive travel. HerGuided Tours is more than just tours; from traditional cooking to craft workshops, it handles everything seamlessly. Highly recommended!',
      author: 'Sarah Johnson',
      title: 'Travel Enthusiast',
      company: 'Cultural Explorer',
      avatar: '/images/portrait woman.jpg',
      gridArea: 'large'
    },
    {
      id: 2,
      rating: 5,
      date: '2024-08-15',
      quote: 'HerGuided Tours is more than just tours; it\'s a complete ecosystem for authentic cultural immersion.',
      author: 'Michael Chen',
      title: 'Director',
      company: 'Adventure Travel Co.',
      avatar: '/images/blacksmith main.jpg',
      gridArea: 'card1'
    },
    {
      id: 3,
      rating: 5,
      date: '2024-08-15',
      quote: 'The hands-on experiences are a standout. They simplify the entire process of connecting with local communities.',
      author: 'Amina Hassan',
      title: 'Founder',
      company: 'Global Experiences',
      avatar: '/images/local cuisine.jpg',
      gridArea: 'card2'
    },
    {
      id: 4,
      rating: 5,
      date: '2024-08-15',
      quote: 'The cultural immersion on HerGuided Tours is exceptional. It allows us to connect deeply with local traditions.',
      author: 'David Thompson',
      title: 'Managing Director',
      company: 'Heritage Travel Ltd.',
      avatar: '/images/festival drumming.jpg',
      gridArea: 'card3'
    },
    {
      id: 5,
      rating: 5,
      date: '2024-08-15',
      quote: 'HerGuided Tours has revolutionized how we approach authentic cultural experiences.',
      author: 'Fatima Al-Mansouri',
      title: 'CEO',
      company: 'Cultural Journeys',
      avatar: '/images/smock weaving.jpg',
      gridArea: 'card4'
    }
  ]

  return (
    <section className="testimonial-section">
      <div className="testimonial-stats-section">
        <div className="testimonial-stats-container">
          <div className="testimonial-stats-left">
            <div className="testimonial-stat-number">550+</div>
            <div className="testimonial-stat-label">Reviews from Industry Leaders</div>
          </div>
          <div className="testimonial-stats-right">
            <div className="testimonial-avatars">
              <div className="avatar-circle avatar-1"></div>
              <div className="avatar-circle avatar-2"></div>
              <div className="avatar-circle avatar-3"></div>
              <div className="avatar-circle avatar-4"></div>
              <div className="avatar-circle avatar-5"></div>
            </div>
            <div className="testimonial-users-text">10,000+ users already using our services.</div>
          </div>
        </div>
      </div>
      <div className="testimonial-reviews-section">
        <div className="testimonial-reviews-container">
          <div className="testimonial-reviews-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={`testimonial-review-card ${testimonial.gridArea === 'large' ? 'review-card-large' : ''}`} style={{ gridArea: testimonial.gridArea }}>
                <div className="review-card-header">
                  <div className="review-stars">
                    {'★'.repeat(testimonial.rating)}
                    <span className="review-rating">({testimonial.rating}/5)</span>
                  </div>
                  <div className="review-date">{testimonial.date}</div>
                </div>
                <div className="review-quote">{testimonial.quote}</div>
                <div className="review-author">
                  <div className="review-avatar">
                    <img src={testimonial.avatar} alt={testimonial.author} />
                  </div>
                  <div className="review-author-info">
                    <div className="review-author-name">{testimonial.author}</div>
                    <div className="review-author-title">{testimonial.title}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
