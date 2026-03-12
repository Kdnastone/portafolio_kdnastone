import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { navigationItems } from '../data/siteContent'
import { closeMobileMenu, toggleMobileMenu } from '../store/uiSlice'
import logo from '../assets/02_logo_opcion.png'
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
        <NavLink to="/" className="site-navbar__brand" onClick={handleLinkClick}>
          <img src={logo} alt="Logo Proenthos" className="site-navbar__logo" />
          <div>
            <span className="site-navbar__title">PROENTHOS</span>
            <span className="site-navbar__subtitle">Entomología aplicada</span>
          </div>
        </NavLink>

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
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `site-navbar__link${isActive ? ' is-active' : ''}`}
              onClick={handleLinkClick}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
