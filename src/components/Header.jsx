import { useState, useEffect } from 'react'
import './Header.css'

const menuItems = [
  { id: 'home', label: 'Home' },
  { id: 'tours', label: 'Tours' },
  { id: 'destinations', label: 'Destinations' },
  { id: 'about', label: 'Experiences' },
  { id: 'blog', label: 'Reviews' },
  { id: 'contact', label: 'Contact' }
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Handle smooth scroll on menu click
  const handleMenuClick = (e, sectionId) => {
    e.preventDefault()
    setIsMenuOpen(false)
    
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 72 // Header height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100 // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(menuItems[i].id)
            break
          }
        }
      }

      // Check if we're at the top
      if (window.scrollY < 100) {
        setActiveSection('home')
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWhatsAppContact = () => {
    const phoneNumber = '2338642845'
    const message = `Hello! I'm interested in learning more about HerGuided Tours.`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h2>HerGuided Tours <span className="logo-subtitle">& Cultural Experiences</span></h2>
        </div>
        <button 
          className={`mobile-menu-toggle ${isMenuOpen ? 'menu-open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`mobile-menu-overlay ${isMenuOpen ? 'menu-open' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
        
        {/* Desktop Menu */}
        <nav className="desktop-nav">
          {menuItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
              onClick={(e) => handleMenuClick(e, item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu */}
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <div className="mobile-menu-header">
            <div className="mobile-menu-logo">
              HerGuided Tours <span className="mobile-menu-subtitle">& Cultural Experiences</span>
            </div>
          </div>
          
          <div className="mobile-menu-section">
            <div className="mobile-menu-label">Menu</div>
            <div className="mobile-menu-items">
              {menuItems.map(item => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'active' : ''}
                  onClick={(e) => handleMenuClick(e, item.id)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mobile-menu-divider"></div>

          <div className="mobile-menu-section">
            <div className="mobile-menu-label">Social Media</div>
            <div className="mobile-menu-social">
              <a href="https://www.linkedin.com/in/rabiatu-abdul-aziz-749a98219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="2" y="9" width="4" height="12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="4" cy="4" r="2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/p/Herguided-Cultural-Tours-and-Experiences-61561105757732/" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/herguided_tours?igsh=MWE0bDkwMW5nbGZsdw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@herguidedtours?_r=1&_t=ZM-92FLinlUKAS" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.85 2.85 0 0 1 .88.13V9.4a6.18 6.18 0 0 0-1-.05A6.27 6.27 0 0 0 5 20.1a6.27 6.27 0 0 0 10.86-4.43v-7a4.85 4.85 0 0 0 3.77 1.94v-3.92z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="mobile-menu-divider"></div>

          <div className="mobile-menu-section">
            <div className="mobile-menu-label">Need help?</div>
            <button className="mobile-menu-cta" onClick={handleWhatsAppContact}>
              Contact Us
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header

