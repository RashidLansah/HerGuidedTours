import './SpecialDealsHeader.css'

function SpecialDealsHeader() {
  return (
    <section className="special-deals-header-section">
      <div className="section-header">
        <div>
          <div className="section-heading">
            <h2>
              <span className="heading-line">
                <span className="heading-bold">Tamale City</span>
                <span className="heading-regular"> Tours &</span>
              </span>
              <span className="heading-line">
                <span className="heading-bold">Cultural</span>
                <span className="heading-regular"> Experiences</span>
              </span>
            </h2>
          </div>
          <p className="section-description">
            Mix up to four (4) experiences per tour. Discover authentic Dagbon culture through hands-on workshops, traditional cooking, market tours, and immersive cultural activities led by local women and artisans.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SpecialDealsHeader

