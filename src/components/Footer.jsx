import './Footer.css'
import { profile } from '../data/siteContent'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand-block">
          <div className="site-footer__logo-wrap">
            <img className="site-footer__logo" src="/portafolio.png" alt="Logo Portafolio" />
          </div>
          <div>
            <h2 className="site-footer__title">Proyectos en GitHub</h2>
            <p className="site-footer__text">Un portafolio enfocado en repositorios.</p>
          </div>
        </div>

        <div className="site-footer__contact-block">
          <a className="site-footer__github-link" href={profile.githubUrl} target="_blank" rel="noreferrer noopener">
            kdnastone
          </a>
          <a className="site-footer__linkedin-link" href={profile.linkedinUrl} target="_blank" rel="noreferrer noopener">
            LinkedIn
          </a>
          <p className="site-footer__copy">© {new Date().getFullYear()} Portafolio de proyectos en GitHub.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
