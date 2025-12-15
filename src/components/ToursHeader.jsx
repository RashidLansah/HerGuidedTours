import './ToursHeader.css'

function ToursHeader() {
  return (
    <section className="tours-header-section">
      <div className="section-header">
        <div>
          <div className="section-heading">
            <h2>
              <span className="heading-line">
                <span className="heading-bold">Amazing</span>
                <span className="heading-regular"> Tours And Fun</span>
              </span>
              <span className="heading-line">
                <span className="heading-regular">Adventures </span>
                <span className="heading-bold">Waiting For You</span>
              </span>
            </h2>
          </div>
          <p className="section-description">
            Discover unforgettable adventures across Northern Ghana. From cultural immersions to nature expeditions, experience authentic, women-led tours that connect you with local communities and breathtaking landscapes.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ToursHeader


