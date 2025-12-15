import './Footer.css'

function Footer() {
  const galleryImages = [
    '/images/image13.jpg',
    '/images/image14.jpg',
    '/images/image15.jpg',
    '/images/image16.jpg',
    '/images/image17.jpg',
    '/images/image19.jpg',
    '/images/image20.jpg',
    '/images/image21.jpg',
    '/images/image25.jpg',
    '/images/image26.jpg',
  ]

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-column">
            <h3>About Us</h3>
            <div className="footer-logo">
              <h2>HerGuided</h2>
            </div>
            <p>HerGuided offers immersive, women-led cultural, nature, and heritage experiences across Tamale and Northern Ghana — connecting you deeply with people, food, crafts, festivals, and wildlife.</p>
            <div className="footer-contact">
              <div className="contact-item">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <path d="M8.5 0C3.81354 0 0 3.81354 0 8.5C0 13.1865 3.81354 17 8.5 17C13.1865 17 17 13.1865 17 8.5C17 3.81354 13.1865 0 8.5 0ZM8.5 15.3C4.91046 15.3 1.7 12.0895 1.7 8.5C1.7 4.91046 4.91046 1.7 8.5 1.7C12.0895 1.7 15.3 4.91046 15.3 8.5C15.3 12.0895 12.0895 15.3 8.5 15.3ZM9.35 4.25H7.65V9.35H12.75V7.65H9.35V4.25Z" fill="#ccc"/>
                </svg>
                <span>Contact us for bookings</span>
              </div>
              <div className="contact-item">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                  <path d="M8.5 0C3.81354 0 0 3.81354 0 8.5C0 13.1865 3.81354 17 8.5 17C13.1865 17 17 13.1865 17 8.5C17 3.81354 13.1865 0 8.5 0ZM8.5 15.3C4.91046 15.3 1.7 12.0895 1.7 8.5C1.7 4.91046 4.91046 1.7 8.5 1.7C12.0895 1.7 15.3 4.91046 15.3 8.5C15.3 12.0895 12.0895 15.3 8.5 15.3ZM9.35 4.25H7.65V9.35H12.75V7.65H9.35V4.25Z" fill="#ccc"/>
                </svg>
                <span>Tamale, Northern Ghana</span>
              </div>
              <div className="contact-item">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.5 0C3.81354 0 0 3.81354 0 8.5C0 13.1865 3.81354 17 8.5 17C13.1865 17 17 13.1865 17 8.5C17 3.81354 13.1865 0 8.5 0ZM8.5 15.3C4.91046 15.3 1.7 12.0895 1.7 8.5C1.7 4.91046 4.91046 1.7 8.5 1.7C12.0895 1.7 15.3 4.91046 15.3 8.5C15.3 12.0895 12.0895 15.3 8.5 15.3Z" fill="#ccc"/>
                  <path d="M4.25 5.1L8.5 8.5L12.75 5.1V6.8L8.5 10.2L4.25 6.8V5.1Z" fill="#ccc"/>
                </svg>
                <a href="mailto:herguidedtours@gmail.com" className="contact-link">herguidedtours@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="footer-column">
            <h3>Our Experiences</h3>
            <ul className="footer-links">
              <li><a href="#tours">Tamale City Tours</a></li>
              <li><a href="#festivals">Festivals Experience</a></li>
              <li><a href="#nature">Nature & Wildlife Tours</a></li>
              <li><a href="#cooking">Cooking & Dining</a></li>
              <li><a href="#crafts">Craft Workshops</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Why HerGuided</h3>
            <ul className="footer-links">
              <li><a href="#why">Women-Led & Community Rooted</a></li>
              <li><a href="#why">Authentic Cultural Experiences</a></li>
              <li><a href="#why">Safe, Curated & Local-Led</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Gallery</h3>
            <div className="instagram-grid">
              {galleryImages.slice(0, 6).map((image, index) => (
                <img key={index} src={image} alt={`Gallery ${index + 1}`} />
              ))}
            </div>
            <div className="footer-social-icons">
              <a href="https://www.linkedin.com/in/rabiatu-abdul-aziz-749a98219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/p/Herguided-Cultural-Tours-and-Experiences-61561105757732/" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/herguided_tours?igsh=MWE0bDkwMW5nbGZsdw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@herguidedtours?_r=1&_t=ZM-92FLinlUKAS" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.85 2.85 0 0 1 .88.13V9.4a6.18 6.18 0 0 0-1-.05A6.27 6.27 0 0 0 5 20.1a6.27 6.27 0 0 0 10.86-4.43v-7a4.85 4.85 0 0 0 3.77 1.94v-3.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-container">
          <p>&copy; 2024 HerGuided Tours & Cultural Experiences. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
