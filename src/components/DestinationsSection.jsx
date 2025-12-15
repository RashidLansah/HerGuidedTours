import './DestinationsSection.css'

function DestinationsSection() {
  const handleWhatsAppBooking = (tour) => {
    const phoneNumber = '2338642845' // Remove + for WhatsApp URL
    const message = `Hello! I'm interested in booking: *${tour.title}* (${tour.price}/person). ${tour.description}`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }
  const festivals = [
    {
      title: 'Fire Festival Experience',
      description: 'Celebrate the historic Dagbon fire festival like a local. Light fire torches, dress in makeshift regalia, and immerse yourself in powerful storytelling.',
      includes: 'Round-trip tuktuk transportation, costume, fire torch, guided storytelling and Q&A',
      price: 'GHS 1,000',
      image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800&q=80',
      label: 'Festivals'
    },
    {
      title: 'Damba Festival (2-Day Experience)',
      description: 'A grand celebration of culture, royalty, and tradition. Visit a chief\'s palace and experience multiple cultural events across two days.',
      includes: 'Round-trip tuktuk transportation, 2-day accommodation, costume, front-row access, security and crowd control',
      price: 'GHS 2,200',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      label: 'Festivals',
      note: 'One-day experience available on request.'
    }
  ]

  const natureTours = [
    {
      title: 'Mole National Park Safari',
      description: 'Experience drive, walk, and canoe safaris while encountering elephants, antelopes, baboons, warthogs, and diverse bird species.',
      includes: 'Shared accommodation, all activity and entrance fees, round-trip transportation',
      excludes: 'Meals',
      price: 'GHS 3,100',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
      label: 'Nature',
      note: 'Minimum of 2 people'
    }
  ]

  return (
    <section className="destinations-section">
      <div className="section-header">
        <h2>Festivals Experience</h2>
        <p>Booking open all year round. Festival dates vary.</p>
        <div className="divider">⸻</div>
      </div>
      <div className="destinations-grid">
        {festivals.map((festival, index) => (
          <div key={index} className="destination-card">
            <div className="destination-image">
              <img src={festival.image} alt={festival.title} />
              <div className="destination-label">{festival.label}</div>
            </div>
            <div className="destination-info">
              <h3>{festival.title}</h3>
              <p className="destination-description">{festival.description}</p>
              <div className="destination-includes">
                <strong>Includes:</strong> {festival.includes}
              </div>
              {festival.note && (
                <p className="destination-note">{festival.note}</p>
              )}
              <div className="destination-price">{festival.price} / person</div>
              <button className="destination-button" onClick={() => handleWhatsAppBooking(festival)}>Book Now</button>
            </div>
          </div>
        ))}
      </div>

      <div className="section-header" style={{ marginTop: '100px' }}>
        <h2>Nature & Wildlife Tours</h2>
        <div className="divider">⸻</div>
      </div>
      <div className="destinations-grid">
        {natureTours.map((tour, index) => (
          <div key={index} className="destination-card">
            <div className="destination-image">
              <img src={tour.image} alt={tour.title} />
              <div className="destination-label">{tour.label}</div>
            </div>
            <div className="destination-info">
              <h3>{tour.title}</h3>
              <p className="destination-description">{tour.description}</p>
              <div className="destination-includes">
                <strong>Includes:</strong> {tour.includes}
              </div>
              {tour.excludes && (
                <div className="destination-excludes">
                  <strong>Excludes:</strong> {tour.excludes}
                </div>
              )}
              {tour.note && (
                <p className="destination-note">{tour.note}</p>
              )}
              <div className="destination-price">{tour.price} / person</div>
              <button className="destination-button" onClick={() => handleWhatsAppBooking(tour)}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DestinationsSection
