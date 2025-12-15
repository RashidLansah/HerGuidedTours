import './NewsSection.css'

function NewsSection() {
  const news = [
    { id: 1, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80', category: 'Travel', title: '10 Best Beaches to Visit This Summer', date: 'March 15, 2024' },
    { id: 2, image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=400&q=80', category: 'Culture', title: 'Exploring Hidden Gems in European Cities', date: 'March 12, 2024' },
    { id: 3, image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80', category: 'Travel', title: 'Top Destinations for Adventure Seekers', date: 'March 10, 2024' },
    { id: 4, image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&q=80', category: 'Culture', title: 'Local Food Experiences Around the World', date: 'March 8, 2024' },
    { id: 5, image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&q=80', category: 'Travel', title: 'Budget Travel Tips for 2024', date: 'March 5, 2024' },
    { id: 6, image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&q=80', category: 'Culture', title: 'Festivals You Must Attend This Year', date: 'March 3, 2024' },
  ]

  return (
    <section className="news-section">
      <div className="section-header">
        <h2>Get The Latest News From All Over The World</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis Theme natoque.</p>
      </div>
      <div className="news-grid">
        {news.map(item => (
          <article key={item.id} className="news-card">
            <div className="news-image">
              <img src={item.image} alt={item.title} />
              <div className="news-category">{item.category}</div>
            </div>
            <div className="news-content">
              <h3>{item.title}</h3>
              <div className="news-meta">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0ZM7 12.6C4.1863 12.6 1.4 9.8137 1.4 7C1.4 4.1863 4.1863 1.4 7 1.4C9.8137 1.4 12.6 4.1863 12.6 7C12.6 9.8137 9.8137 12.6 7 12.6ZM7.7 3.5H6.3V7.7L9.1 9.1L9.8 7.7L7.7 6.65V3.5Z" fill="#666"/>
                </svg>
                <span>{item.date}</span>
              </div>
              <a href="#" className="news-link">Read More</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default NewsSection


