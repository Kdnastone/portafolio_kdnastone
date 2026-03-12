import './PageHero.css'

function PageHero({ eyebrow, title, description }) {
  return (
    <section className="page-hero">
      <span className="page-hero__eyebrow">{eyebrow}</span>
      <h1 className="page-hero__title">{title}</h1>
      <p className="page-hero__description">{description}</p>
    </section>
  )
}

export default PageHero
