import './WhatToKnowSection.css'

function WhatToKnowSection() {
  return (
    <section className="what-to-know-section">
      <div className="what-to-know-container">
        <div className="what-to-know-content">
          <div className="what-to-know-left">
            <h2 className="what-to-know-title">What to know</h2>
            <div className="what-to-know-info">
              <div className="info-item">
                <div className="info-title">What to Pack</div>
                <div className="info-text">Bathing suit, towel, sunscreen, sunglasses, water bottle</div>
              </div>
              <div className="info-item">
                <div className="info-title">Payment Plan</div>
                <ul className="info-list">
                  <li>60% deposit required two (2) days before the scheduled trip</li>
                  <li>40% balance paid on the day of the experience</li>
                </ul>
              </div>
              <div className="info-item">
                <div className="info-title">Cancellation Policy</div>
                <div className="info-text">A 5% cancellation fee applies to all scheduled trips due to early vendor booking and logistics coordination.</div>
              </div>
              <div className="what-to-know-stroke">
                <img src="/images/stroke.svg" alt="Decorative stroke" />
              </div>
            </div>
          </div>
          <div className="what-to-know-images">
            <div className="image-tall image-tall-1">
              <img src="/images/festival drumming.jpg" alt="Cultural experience" />
            </div>
            <div className="image-tall image-tall-2">
              <img src="/images/blacksmith main.jpg" alt="Blacksmith workshop" />
            </div>
            <div className="image-column-right">
              <div className="image-square image-square-1">
                <img src="/images/local cuisine.jpg" alt="Local cuisine" />
              </div>
              <div className="image-square image-square-2">
                <img src="/images/local food 09.jpg" alt="Local food" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatToKnowSection

