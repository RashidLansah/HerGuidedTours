import './DestinationsShowcase.css'

function DestinationsShowcase() {
  const tours = [
    {
      id: 1,
      title: "Mole National Park Safari",
      titleShort: "Mole National Park",
      description: "Experience drive, walk, and canoe safaris while encountering elephants, antelopes, baboons, warthogs, and diverse bird species.",
      includes: "Shared accommodation, all activity and entrance fees, round-trip transportation",
      excludes: "Meals",
      price: "GHS 3,100",
      priceNote: "/ person (min. 2 people)",
      image: "/images/elepahant.jpg"
    },
    {
      id: 2,
      title: "Waterfalls Adventure",
      titleShort: "Waterfalls Adventure",
      description: "Explore Ghana's middle belt with visits to Yabraso, Kintampo Falls, Fuller Falls, and an exciting canopy walk.",
      includes: "Transportation, all activity and entrance fees, snacks and water, complimentary photos",
      price: "GHS 1,800",
      priceNote: "/ person",
      image: "/images/kintampo waterfalls main.jpg"
    },
    {
      id: 3,
      title: "Crocodile Pond, Bolga Museum & Slave Camp Tour",
      titleShort: "Crocodile Pond & Bolga Tour",
      description: "Interact with sacred crocodiles, explore cultural landmarks, and learn about regional history.",
      includes: "Round-trip transportation, all activity and entrance fees, air-conditioned accommodation, complimentary photos",
      price: "GHS 2,500",
      priceNote: "/ person",
      image: "/images/paga crocodile pound.jpg"
    },
    {
      id: 4,
      title: "Kayaking & Quad Biking Adventure (Botanga)",
      titleShort: "Kayaking & Quad Biking",
      description: "Relax and recharge with kayaking, quad biking, and boat cruising in a serene lakeside setting.",
      includes: "Transportation, activity and entrance fees, snacks and water",
      price: "GHS 700",
      priceNote: "/ person",
      image: "/images/kayaking.jpg"
    }
  ]

  return (
    <section className="destinations-showcase">
      <div className="showcase-grid">
        {/* Row 1 */}
        <div className="showcase-item showcase-image">
          <img src={tours[0].image} alt={tours[0].title} />
        </div>
        <div className="showcase-item showcase-yellow">
          <div className="destination-text-overlay">
            <div className="text-back">Nature</div>
            <div className="text-front">Nature</div>
          </div>
        </div>
        <div className="showcase-item showcase-card">
          <div className="card-content">
            <div className="new-badge">New</div>
            <h3>{tours[0].titleShort}</h3>
            <p className="card-subtitle">Nature & Wildlife Tours</p>
            <p className="card-description">
              {tours[0].description}
            </p>
            <p className="card-price">{tours[0].price} {tours[0].priceNote}</p>
            <a href="#" className="card-link">learn more →</a>
          </div>
        </div>

        {/* Row 2 */}
        <div className="showcase-item showcase-card">
          <div className="card-content card-content-right">
            <h3>{tours[1].titleShort}</h3>
            <p className="card-subtitle">Nature & Wildlife Tours</p>
            <p className="card-description">
              {tours[1].description}
            </p>
            <p className="card-price">{tours[1].price} {tours[1].priceNote}</p>
            <a href="#" className="card-link">learn more →</a>
          </div>
        </div>
        <div className="showcase-item showcase-image">
          <img src="/images/Wildlife.jpg" alt="Wildlife" />
        </div>
        <div className="showcase-item showcase-black">
          <div className="destination-text-overlay">
            <div className="text-back text-back-gray">Wildlife</div>
            <div className="text-front text-front-yellow">Wildlife</div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="showcase-item showcase-yellow">
          <div className="destination-text-overlay">
            <div className="text-back">Tours</div>
            <div className="text-front">Tours</div>
          </div>
        </div>
        <div className="showcase-item showcase-card">
          <div className="card-content">
            <div className="new-badge">New</div>
            <h3>{tours[2].titleShort}</h3>
            <p className="card-subtitle">Nature & Wildlife Tours</p>
            <p className="card-description">
              {tours[2].description}
            </p>
            <p className="card-price">{tours[2].price} {tours[2].priceNote}</p>
            <a href="#" className="card-link">learn more →</a>
          </div>
        </div>
        <div className="showcase-item showcase-image">
          <img src={tours[3].image} alt={tours[3].title} />
        </div>
      </div>
    </section>
  )
}

export default DestinationsShowcase
