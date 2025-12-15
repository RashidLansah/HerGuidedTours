import './TrendingToursSection.css'

function TrendingToursSection() {
  const tours = [
    { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80', destination: 'Maldives', price: '$450', days: '10 Days', hot: true },
    { id: 2, image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&q=80', destination: 'Santorini', price: '$380', days: '7 Days', hot: false },
    { id: 3, image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80', destination: 'Bora Bora', price: '$520', days: '8 Days', hot: true },
    { id: 4, image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&q=80', destination: 'Mauritius', price: '$400', days: '9 Days', hot: false },
    { id: 5, image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&q=80', destination: 'Seychelles', price: '$480', days: '11 Days', hot: true },
  ]

  return (
    <section className="trending-tours-section">
      <div className="section-header">
        <h2>Trending, Best Selling Tours And Fun Destinations</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis Theme natoque.</p>
      </div>
      <div className="tours-container">
        <div className="tours-scroll">
          {tours.map(tour => (
            <div key={tour.id} className="tour-card">
              {tour.hot && <div className="hot-badge">HOT</div>}
              <img src={tour.image} alt={tour.destination} />
              <div className="tour-info">
                <h3>{tour.destination}</h3>
                <div className="tour-details">
                  <span className="tour-price">{tour.price}</span>
                  <div className="tour-rating">
                    {'★'.repeat(5)}
                  </div>
                  <span className="tour-days">{tour.days}</span>
                </div>
                <button className="tour-button">Book Now</button>
              </div>
            </div>
          ))}
        </div>
        <div className="scroll-indicators">
          <span className="indicator active"></span>
          <span className="indicator"></span>
          <span className="indicator"></span>
        </div>
      </div>
    </section>
  )
}

export default TrendingToursSection


