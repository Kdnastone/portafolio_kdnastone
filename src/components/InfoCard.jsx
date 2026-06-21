import './InfoCard.css'

function InfoCard({ title, description, points, meta, backgroundImage, tags = [], links = [] }) {
  const cardStyle = backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}
  
  return (
    <article className="info-card" style={cardStyle}>
      <div className="info-card__accent" aria-hidden="true" />
      <h2 className="info-card__title">{title}</h2>
      <p className="info-card__description">{description}</p>

      {points?.length ? (
        <ul className="info-card__list">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      ) : null}

      {tags.length ? (
        <div className="info-card__tags" aria-label="Tecnologías utilizadas">
          {tags.map((tag) => (
            <span key={tag} className="info-card__tag">
              {tag}
            </span>
          ))}
        </div>
      ) : null}

      {links.length ? (
        <div className="info-card__actions">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`info-card__button${link.primary ? ' info-card__button--primary' : ''}`}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}

      {meta ? <p className="info-card__meta">{meta}</p> : null}
    </article>
  )
}

export default InfoCard
