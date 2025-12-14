import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h2>HerGuided Tours</h2>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About us</a>
          <a href="#destinations">Destinations</a>
          <a href="#tours">Tours</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header

