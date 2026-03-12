import './InfoCard.css'

function InfoCard({ title, description, points, meta }) {
  return (
    <article className="info-card">
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

      {meta ? <p className="info-card__meta">{meta}</p> : null}
    </article>
  )
}

export default InfoCard
