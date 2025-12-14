import { useState, useEffect } from 'react'
import './Header.css'

const menuItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About us' },
  { id: 'destinations', label: 'Destinations' },
  { id: 'tours', label: 'Tours' },
  { id: 'blog', label: 'Blog' },
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

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h2>HerGuided Tours</h2>
        </div>
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
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
      </div>
    </header>
  )
}

export default Header

