import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand-block">
          <div className="site-footer__logo-wrap">
            <img src="/02_logo_opcion.png" alt="Logo Proenthos" className="site-footer__logo" />
          </div>
          <div>
            <h2 className="site-footer__title">PROENTHOS</h2>
            <p className="site-footer__text">
              Consultoría en entomología aplicada con enfoque técnico y sostenible.
            </p>
          </div>
        </div>

        <div className="site-footer__contact-block">
          <p className="site-footer__text">proenthos@gmail.com</p>
          <p className="site-footer__copy">© {new Date().getFullYear()} Proenthos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
