import './ImageGallery.css'

function ImageGallery() {
  const images = [
    { id: 1, src: '/images/elepahant.jpg', title: 'Mole National Park', price: 'GHS 3,100', size: 'small', position: '1' },
    { id: 2, src: '/images/kintampo waterfalls main.jpg', title: 'Kintampo Falls', price: 'GHS 1,800', size: 'large', position: '2' },
    { id: 3, src: '/images/local food 09.jpg', title: 'Tamale Markets', price: 'GHS 300', size: 'small', position: '3' },
    { id: 4, src: '/images/festival drumming.jpg', title: 'Cultural Festivals', price: 'GHS 1,000', size: 'small', position: '4' },
    { id: 5, src: '/images/wildlife main.jpg', title: 'Wildlife Safari', price: 'GHS 2,500', size: 'small', position: '5' },
    { id: 6, src: '/images/smock weaving.jpg', title: 'Traditional Crafts', price: 'GHS 250', size: 'large', position: '6' },
    { id: 7, src: '/images/kayaking.jpg', title: 'Northern Ghana', price: 'GHS 700', size: 'large', position: '7' },
    { id: 8, src: '/images/local cuisine.jpg', title: 'Dagbon Culture', price: 'GHS 450', size: 'small', position: '8' },
    { id: 9, src: '/images/waterfalls main 09.jpg', title: 'Waterfalls', price: 'GHS 1,800', size: 'small', position: '9' },
    { id: 10, src: '/images/fire festival main.jpg', title: 'HerGuided Tours', price: 'GHS 350', size: 'small', position: '10' },
  ]

  return (
    <section className="image-gallery">
      <div className="gallery-container">
        <div className="gallery-grid">
          {images.map(image => (
            <div key={image.id} className={`gallery-item gallery-item-${image.position} ${image.size}`}>
              <img 
                src={image.src} 
                alt={image.title}
                loading="lazy"
                decoding="async"
              />
              <div className="gallery-overlay">
                <h3>{image.title}</h3>
                <p className="gallery-price">{image.price}</p>
              </div>
            </div>
          ))}
          <div className="gallery-item gallery-item-textbox">
            <div className="textbox-content">
              <h3>Northern<span className="text-normal"> Ghana</span></h3>
              <p className="textbox-description">
                Experience authentic cultural<br />
                immersion with women-led tours<br />
                across Tamale and beyond.
              </p>
              <a 
                href="#" 
                className="textbox-link"
                onClick={(e) => {
                  e.preventDefault()
                  const phoneNumber = '2338642845'
                  const message = `Hello! I'm interested in learning more about Northern Ghana tours.`
                  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
                  window.open(whatsappUrl, '_blank')
                }}
              >
                learn more →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageGallery

