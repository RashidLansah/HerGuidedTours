import './PaymentSection.css'

function PaymentSection() {
  return (
    <section className="payment-section">
      <div className="payment-container">
        <div className="payment-plan">
          <h2>Payment Plan</h2>
          <div className="divider">⸻</div>
          <ul className="payment-list">
            <li>60% deposit required two (2) days before the scheduled trip</li>
            <li>40% balance paid on the day of the experience</li>
          </ul>
        </div>
        <div className="cancellation-policy">
          <h2>Cancellation Policy</h2>
          <div className="divider">⸻</div>
          <p>A 5% cancellation fee applies to all scheduled trips due to early vendor booking and logistics coordination.</p>
        </div>
        <div className="packing-list">
          <h2>What to Pack</h2>
          <div className="divider">⸻</div>
          <p>Bathing suit, towel, sunscreen, sunglasses, water bottle</p>
        </div>
      </div>
    </section>
  )
}

export default PaymentSection


