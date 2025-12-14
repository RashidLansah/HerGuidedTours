import './ToursSection.css'

function ToursSection() {
  const tamaleTours = [
    { 
      id: 1, 
      title: 'Shea Butter Processing Experience',
      description: 'Discover how women\'s gold is traditionally extracted and used. Witness local women at work and support their craft.',
      includes: 'Hands-on processing, storytelling, bottled water',
      price: 'GHS 250',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80'
    },
    { 
      id: 2, 
      title: 'Indigenous Cooking & Dining Experience',
      description: 'Learn to prepare traditional Dagbon dishes such as yankahanda, yamonda, and kpalugu shinkaafa, and dine in a traditional home while learning their nutritional benefits.',
      includes: 'Hands-on cooking guide, dine-in experience',
      price: 'GHS 450',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&q=80'
    },
    { 
      id: 3, 
      title: 'Indigenous Dining Experience',
      description: 'Taste authentic Dagbon cuisine rarely found on the streets while learning about indigenous spices, herbs, and their nutritional value.',
      includes: 'Meals, spice and herb learning, dine-in',
      price: 'GHS 250',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=80'
    },
    { 
      id: 4, 
      title: 'Market & Street Food Tour',
      description: 'Explore Tamale\'s vibrant markets and street food scene while learning about indigenous produce and practicing negotiation skills.',
      includes: 'Street food tastings, produce education',
      price: 'GHS 300',
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=500&q=80'
    },
    { 
      id: 5, 
      title: 'Eco Farm Tours (Seasonal)',
      description: 'Visit seasonal backyard farms and learn directly from knowledgeable farmers about local agricultural practices.',
      includes: 'Bottled water, guided conversations',
      price: 'GHS 250',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=500&q=80'
    },
    { 
      id: 6, 
      title: 'Leather Tannery Tour',
      description: 'See firsthand how leather is traditionally produced and explore hidden craft communities within Tamale.',
      includes: 'Bottled water, artisan conversations',
      price: 'GHS 250',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500&q=80'
    },
    { 
      id: 7, 
      title: 'Blacksmith Workshop Tour',
      description: 'Witness ancient blacksmithing techniques and learn about the cultural relationship between fire and metal.',
      includes: 'Bottled water, guided conversations',
      price: 'GHS 250',
      image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=500&q=80'
    },
    { 
      id: 8, 
      title: 'Smock Weaving Experience',
      description: 'Get hands-on with traditional smock weaving techniques, patterns, and styles. Purchase ready-made items or commission custom fabrics.',
      includes: 'Bottled water, guided weaving experience',
      price: 'GHS 250',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80'
    },
    { 
      id: 9, 
      title: 'Traditional Drumming & Dancing Experience',
      description: 'Learn traditional rhythms, movements, and cultural stories in a lively, interactive session.',
      includes: 'Bottled water, hands-on instruction, sweets for dancers, storytelling',
      price: 'GHS 350',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&q=80'
    },
  ]

  return (
    <section className="tours-section">
      <div className="tours-grid">
        {tamaleTours.map(tour => (
          <div key={tour.id} className="tour-card">
            <div className="tour-image">
              <img src={tour.image} alt={tour.title} />
            </div>
            <div className="tour-content">
              <h3>{tour.title}</h3>
              <p className="tour-description">{tour.description}</p>
              <div className="tour-includes">
                <strong>Includes:</strong> {tour.includes}
              </div>
              <div className="tour-price">{tour.price} / person</div>
              <button className="tour-button">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ToursSection
