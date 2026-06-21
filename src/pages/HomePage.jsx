import InfoCard from '../components/InfoCard'
import PageHero from '../components/PageHero'
import { contactLinks, featuredProjects, profile, profileStats } from '../data/siteContent'
import './PageLayout.css'

function HomePage() {
  return (
    <div className="page-shell">
      <section className="home-hero" id="inicio">
        <div className="home-hero__copy">
          <span className="home-hero__eyebrow">Portafolio GitHub</span>
          <h1 className="home-hero__title">{profile.headline}</h1>
          <p className="home-hero__text">{profile.summary}</p>

          <div className="home-hero__actions">
            <a className="home-hero__button home-hero__button--primary" href={profile.githubUrl} target="_blank" rel="noreferrer noopener">
              Ver GitHub
            </a>
            <a className="home-hero__button" href="#proyectos">
              Ver proyectos
            </a>
          </div>

          <div className="home-hero__stats" aria-label="Resumen del perfil">
            {profileStats.map((stat) => (
              <article
                key={stat.id}
                className={`home-hero__stat-card${Array.isArray(stat.value) ? ' home-hero__stat-card--stack' : ''}`}
              >
                <strong>{stat.label}</strong>
                {Array.isArray(stat.value) ? (
                  <ul className="home-hero__stat-list" aria-label={stat.label}>
                    {stat.value.map((item) => (
                      <li key={item} className="home-hero__stat-pill">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span>{stat.value}</span>
                )}
              </article>
            ))}
          </div>
        </div>

        <aside className="home-hero__visual" aria-label="Foto de perfil">
          <img className="home-hero__photo" src={profile.image} alt={`Foto de perfil de ${profile.name}`} />
          <div className="home-hero__profile">
            <strong className="home-hero__profile-name">{profile.name}</strong>
            <span className="home-hero__profile-handle">{profile.handle}</span>
          </div>
          <PageHero
            eyebrow="Perfil"
            titleClassName="page-hero__title--compact"
            title="Sandra Cadena"
            nickname="Kdnastone"
            descriptionClassName="page-hero__description--justify"
            description="Bióloga especializada en entomología agrícola, con experiencia en investigación y optimización de sistemas productivos basados en artrópodos. Aplico análisis de datos, trazabilidad y diseño de procesos para mejorar la cría, escalonamiento y liberación de enemigos naturales, desarrollando soluciones técnicas y operativas para la agricultura."
          />
        </aside>
      </section>

      <section className="page-section" id="proyectos">
        <PageHero
          eyebrow="Proyectos destacados"
          title="Repositorios"
          description="A continuación se presentan los repositorios alojados en GitHub y el despliegue de la página web en Netlify."
        />

        <div className="cards-grid cards-grid--projects">
          {featuredProjects.map((project) => (
            <InfoCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.stack}
              meta={project.status}
              links={[
                { href: project.repoUrl, label: 'Repositorio', external: true, primary: true },
                { href: project.liveUrl, label: 'Página', external: true },
              ]}
            />
          ))}
        </div>
      </section>

      <section className="page-section page-section--contact" id="contacto">
        <PageHero
          eyebrow="Contacto"
        >
          <div className="contact-panel__links">
            <a className="contact-panel__link" href={contactLinks[0].href}>
              <strong>{contactLinks[0].description}</strong>
            </a>
          </div>
        </PageHero>
      </section>
    </div>
  )
}

export default HomePage
