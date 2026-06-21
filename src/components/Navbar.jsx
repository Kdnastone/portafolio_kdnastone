import { useDispatch, useSelector } from 'react-redux'
import { navigationItems } from '../data/siteContent'
import { closeMobileMenu, toggleMobileMenu } from '../store/uiSlice'
import './Navbar.css'

function Navbar() {
  const dispatch = useDispatch()
  const isMobileMenuOpen = useSelector((state) => state.ui.isMobileMenuOpen)

  const handleLinkClick = () => {
    dispatch(closeMobileMenu())
  }

  return (
    <header className="site-navbar">
      <div className="site-navbar__inner">
        <a href="#inicio" className="site-navbar__brand" onClick={handleLinkClick}>
          <img className="site-navbar__badge" src="/portafolio.png" alt="Logo Portafolio" />
          <div>
            <span className="site-navbar__title">Proyectos en GitHub</span>
            <span className="site-navbar__subtitle">Portafolio técnico</span>
          </div>
        </a>

        <button
          type="button"
          className="site-navbar__toggle"
          onClick={() => dispatch(toggleMobileMenu())}
          aria-expanded={isMobileMenuOpen}
          aria-label="Abrir menú principal"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-navbar__links ${isMobileMenuOpen ? 'is-open' : ''}`}>
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="site-navbar__link"
              onClick={handleLinkClick}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
