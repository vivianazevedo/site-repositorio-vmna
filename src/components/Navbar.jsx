export default function Navbar() {
  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <button type="button" className="nav-btn" onClick={() => scrollTo('home')}>Home</button>
      <button type="button" className="nav-btn" onClick={() => scrollTo('sobre')}>Sobre</button>
      <button type="button" className="nav-btn" onClick={() => scrollTo('portfolio')}>Portfólio</button>
    </nav>
  )
}