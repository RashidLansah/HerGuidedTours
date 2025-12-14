import './TestimonialSection.css'

function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-left">
          <div className="testimonial-yellow-content">
            <div className="testimonial-text-shadow">
              <div className="testimonial-text-black">
                <p>Authentic</p>
                <p>Cultural</p>
                <p>Experiences</p>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-right">
          <div className="testimonial-card-wrapper">
            <div className="testimonial-decorative-number">99</div>
            <div className="testimonial-card">
              <div className="testimonial-stars">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <div className="testimonial-quote">
                <p>HerGuided Tours provided an</p>
                <p>authentic and transformative experience.</p>
                <p>The women-led approach made all the</p>
              </div>
              <div className="testimonial-divider">
                <svg width="114" height="17" viewBox="0 0 114 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 16L10 10L19 16" stroke="#f5031a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M25 16L34 10L43 16" stroke="#f5031a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M49 16L58 10L67 16" stroke="#f5031a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M73 16L82 10L91 16" stroke="#f5031a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M97 16L106 10L115 16" stroke="#f5031a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="testimonial-content-block">
                <div className="testimonial-main-quote">
                  <p>difference in connecting with the local</p>
                  <p>culture. Every moment was thoughtfully</p>
                  <p>curated, from the shea butter processing</p>
                  <p>to the traditional drumming.</p>
                </div>
                <div className="testimonial-author">
                  <span>By </span>
                  <span className="author-name">Sarah Johnson</span>
                </div>
              </div>
              <div className="testimonial-nav">
                <button className="nav-arrow nav-arrow-left">
                  <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 1L1 9.5L13 18" stroke="#f5031a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="nav-arrow nav-arrow-right">
                  <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L13 9.5L1 18" stroke="#f5031a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
