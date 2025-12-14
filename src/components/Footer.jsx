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
      <div className="footer-gallery">
        {galleryImages.map((image, index) => (
          <img key={index} src={image} alt={`Gallery ${index + 1}`} />
        ))}
      </div>
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
