import './ContactSection.css'

function ContactSection() {
  const locations = [
    { city: 'San Francisco', phone: '156-677-124-442-2887', email: 'info@example.com', address: 'Main Street Victoria 8007' },
    { city: 'New York', phone: '156-677-124-442-2887', email: 'info@example.com', address: 'Main Street Victoria 8007' },
    { city: 'Barcelona', phone: '156-677-124-442-2887', email: 'info@example.com', address: 'Main Street Victoria 8007' },
    { city: 'London', phone: '156-677-124-442-2887', email: 'info@example.com', address: 'Main Street Victoria 8007' },
  ]

  return (
    <section className="contact-section">
      <div className="contact-container">
        {locations.map((location, index) => (
          <div key={index} className="contact-card">
            <h3>{location.city}</h3>
            <div className="contact-item">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M8.5 0C3.81354 0 0 3.81354 0 8.5C0 13.1865 3.81354 17 8.5 17C13.1865 17 17 13.1865 17 8.5C17 3.81354 13.1865 0 8.5 0ZM8.5 15.3C4.91046 15.3 1.7 12.0895 1.7 8.5C1.7 4.91046 4.91046 1.7 8.5 1.7C12.0895 1.7 15.3 4.91046 15.3 8.5C15.3 12.0895 12.0895 15.3 8.5 15.3ZM9.35 4.25H7.65V9.35H12.75V7.65H9.35V4.25Z" fill="#666"/>
              </svg>
              <span>{location.phone}</span>
            </div>
            <div className="contact-item">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M8.5 0C3.81354 0 0 3.81354 0 8.5C0 13.1865 3.81354 17 8.5 17C13.1865 17 17 13.1865 17 8.5C17 3.81354 13.1865 0 8.5 0ZM8.5 15.3C4.91046 15.3 1.7 12.0895 1.7 8.5C1.7 4.91046 4.91046 1.7 8.5 1.7C12.0895 1.7 15.3 4.91046 15.3 8.5C15.3 12.0895 12.0895 15.3 8.5 15.3ZM9.35 4.25H7.65V9.35H12.75V7.65H9.35V4.25Z" fill="#666"/>
              </svg>
              <span>{location.email}</span>
            </div>
            <div className="contact-item">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M8.5 0C3.81354 0 0 3.81354 0 8.5C0 13.1865 3.81354 17 8.5 17C13.1865 17 17 13.1865 17 8.5C17 3.81354 13.1865 0 8.5 0ZM8.5 15.3C4.91046 15.3 1.7 12.0895 1.7 8.5C1.7 4.91046 4.91046 1.7 8.5 1.7C12.0895 1.7 15.3 4.91046 15.3 8.5C15.3 12.0895 12.0895 15.3 8.5 15.3ZM9.35 4.25H7.65V9.35H12.75V7.65H9.35V4.25Z" fill="#666"/>
              </svg>
              <span>{location.address}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ContactSection

