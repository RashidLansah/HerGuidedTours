import './AutoScrollGallery.css'

function AutoScrollGallery() {
  const galleryImages = [
    '/images/image27.jpg',
    '/images/image28.jpg',
    '/images/image30.jpg',
    '/images/image33.jpg',
    '/images/image34.jpg',
    '/images/image35.jpg',
    '/images/image36.jpg',
    '/images/image39.jpg',
    '/images/image43.jpg',
    '/images/image45.jpg',
    '/images/image49.jpg',
    '/images/image50.jpg',
    '/images/image52.jpg',
    '/images/image53.jpg',
    '/images/image54.jpg',
    '/images/image55.jpg',
    '/images/image57.jpg',
    '/images/image58.jpg',
    '/images/image60.jpg',
    '/images/image61.jpg',
    '/images/image63.jpg',
    '/images/image64.jpg',
    '/images/image65.jpg',
    '/images/image66.jpg',
    '/images/image67.jpg',
    '/images/image68.jpg',
    '/images/image71.jpg',
  ]

  // Duplicate images for seamless loop
  const duplicatedImages = [...galleryImages, ...galleryImages]

  return (
    <section className="auto-scroll-gallery">
      <div className="gallery-scroll-container">
        <div className="gallery-scroll-track">
          {duplicatedImages.map((image, index) => (
            <div key={index} className="gallery-scroll-item">
              <img src={image} alt={`Gallery ${index + 1}`} loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AutoScrollGallery

