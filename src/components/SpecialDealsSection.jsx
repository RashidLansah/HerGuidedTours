import './SpecialDealsSection.css'

function SpecialDealsSection() {
  const handleWhatsAppBooking = (tour) => {
    const phoneNumber = '2338642845' // Remove + for WhatsApp URL
    const message = `Hello! I'm interested in booking: *${tour.title}* (${tour.price}${tour.priceNote}). ${tour.description}`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }
  const tours = [
    { 
      id: 1, 
      title: 'Shea Butter Processing Experience',
      description: "Discover how women's gold is traditionally extracted and used. Witness local women at work and support their craft.",
      includes: 'Hands-on processing, storytelling, bottled water',
      price: 'GHS 250',
      priceNote: '/ person',
      image: '/images/sheabutter main.jpg'
    },
    { 
      id: 2, 
      title: 'Indigenous Cooking & Dining Experience',
      description: 'Learn to prepare traditional Dagbon dishes such as yankahanda, yamonda, and kpalugu shinkaafa, and dine in a traditional home while learning their nutritional benefits.',
      includes: 'Hands-on cooking guide, dine-in experience',
      price: 'GHS 450',
      priceNote: '/ person',
      image: '/images/local cuisine.jpg'
    },
    { 
      id: 3, 
      title: 'Indigenous Dining Experience',
      description: 'Taste authentic Dagbon cuisine rarely found on the streets while learning about indigenous spices, herbs, and their nutritional value.',
      includes: 'Meals, spice and herb learning, dine-in',
      price: 'GHS 250',
      priceNote: '/ person',
      image: '/images/local food.jpg'
    },
    { 
      id: 4, 
      title: 'Market & Street Food Tour',
      description: "Explore Tamale's vibrant markets and street food scene while learning about indigenous produce and practicing negotiation skills.",
      includes: 'Street food tastings, produce education',
      price: 'GHS 300',
      priceNote: '/ person',
      image: '/images/local food 09.jpg'
    },
    { 
      id: 5, 
      title: 'Eco Farm Tours (Seasonal)',
      description: 'Visit seasonal backyard farms and learn directly from knowledgeable farmers about local agricultural practices.',
      includes: 'Bottled water, guided conversations',
      price: 'GHS 250',
      priceNote: '/ person',
      image: '/images/farming 09.jpg'
    },
    { 
      id: 6, 
      title: 'Leather Tannery Tour',
      description: 'See firsthand how leather is traditionally produced and explore hidden craft communities within Tamale.',
      includes: 'Bottled water, artisan conversations',
      price: 'GHS 250',
      priceNote: '/ person',
      image: '/images/image21.jpg'
    },
    { 
      id: 7, 
      title: 'Blacksmith Workshop Tour',
      description: 'Witness ancient blacksmithing techniques and learn about the cultural relationship between fire and metal.',
      includes: 'Bottled water, guided conversations',
      price: 'GHS 250',
      priceNote: '/ person',
      image: '/images/blacksmith main.jpg'
    },
    { 
      id: 8, 
      title: 'Smock Weaving Experience',
      description: 'Get hands-on with traditional smock weaving techniques, patterns, and styles. Purchase ready-made items or commission custom fabrics.',
      includes: 'Bottled water, guided weaving experience',
      price: 'GHS 250',
      priceNote: '/ person',
      image: '/images/smock weaving.jpg'
    },
    { 
      id: 9, 
      title: 'Traditional Drumming & Dancing Experience',
      description: 'Learn traditional rhythms, movements, and cultural stories in a lively, interactive session.',
      includes: 'Bottled water, hands-on instruction, sweets for dancers, storytelling',
      price: 'GHS 350',
      priceNote: '/ person',
      image: '/images/festival drumming.jpg'
    },
    { 
      id: 10, 
      title: 'Fire Festival Experience',
      description: 'Celebrate the historic Dagbon fire festival like a local. Light fire torches, dress in makeshift regalia, and immerse yourself in powerful storytelling.',
      includes: 'Round-trip tuktuk transportation, costume, fire torch, guided storytelling and Q&A',
      price: 'GHS 1,000',
      priceNote: '/ person',
      image: '/images/fire festival main.jpg'
    },
    { 
      id: 11, 
      title: 'Damba Festival (2-Day Experience)',
      description: "A grand celebration of culture, royalty, and tradition. Visit a chief's palace and experience multiple cultural events across two days.",
      includes: 'Round-trip tuktuk transportation, 2-day accommodation, costume, front-row access, security and crowd control',
      price: 'GHS 2,200',
      priceNote: '/ person',
      image: '/images/damba festival.jpg'
    },
  ]

  return (
    <section className="special-deals-section">
      <div className="deals-container">
        <div className="deals-scroll">
          {tours.map(tour => (
            <div key={tour.id} className="deal-card">
              <div className="deal-image-wrapper">
                <img src={tour.image} alt={tour.title} loading="lazy" decoding="async" />
              </div>
              <div className="deal-content">
                <div className="deal-header">
                  <h3>{tour.title}</h3>
                  <div className="deal-price-bottom">
                    <span className="price-current">{tour.price}</span>
                    <span className="price-note">{tour.priceNote}</span>
                  </div>
                </div>
                <p className="deal-description">{tour.description}</p>
                <div className="deal-includes">
                  <strong>Includes:</strong> {tour.includes}
                </div>
                <div className="deal-footer">
                  <button type="button" className="deal-button" onClick={() => handleWhatsAppBooking(tour)}>Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-indicators">
          <span className="indicator active"></span>
          <span className="indicator"></span>
          <span className="indicator"></span>
        </div>
      </div>
    </section>
  )
}

export default SpecialDealsSection
