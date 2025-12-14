import { useState } from 'react'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
          <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About us</a>
          <a href="#destinations" onClick={() => setIsMenuOpen(false)}>Destinations</a>
          <a href="#tours" onClick={() => setIsMenuOpen(false)}>Tours</a>
          <a href="#blog" onClick={() => setIsMenuOpen(false)}>Blog</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header

