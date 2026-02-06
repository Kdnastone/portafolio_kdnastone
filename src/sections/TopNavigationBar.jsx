import './TopNavigationBar.css'

function TopNavigationBar({ currentActiveSection, onNavigate }) {
  const menuOptions = [
    { identifier: 'inicio', label: 'Inicio' },
    { identifier: 'servicios', label: 'Servicios' },
    { identifier: 'recursos', label: 'Recursos' },
    { identifier: 'nosotros', label: 'Nosotros' },
    { identifier: 'contacto', label: 'Contacto' }
  ]

  return (
    <header className="top-navigation-container">
      <div className="navigation-inner-wrapper">
        <div className="brand-identity">
          <h1 className="company-name">Proenthos</h1>
          <p className="company-tagline">Entomología Aplicada</p>
        </div>
        
        <nav className="navigation-menu">
          <ul className="menu-list">
            {menuOptions.map((option) => (
              <li key={option.identifier} className="menu-item">
                <button
                  onClick={() => onNavigate(option.identifier)}
                  className={`menu-button ${currentActiveSection === option.identifier ? 'is-active' : ''}`}
                  aria-current={currentActiveSection === option.identifier ? 'page' : undefined}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default TopNavigationBar
