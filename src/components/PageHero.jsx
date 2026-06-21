import './PageHero.css'

function PageHero({ eyebrow, title, nickname, description, titleClassName = '', descriptionClassName = '', children }) {
  return (
    <section className="page-hero">
      <span className="page-hero__eyebrow">{eyebrow}</span>
      {title ? <h1 className={`page-hero__title${titleClassName ? ` ${titleClassName}` : ''}`}>{title}</h1> : null}
      {nickname ? <span className="page-hero__nickname">{nickname}</span> : null}
      {description ? (
        <p className={`page-hero__description${descriptionClassName ? ` ${descriptionClassName}` : ''}`}>
          {description}
        </p>
      ) : null}
      {children ? <div className="page-hero__content">{children}</div> : null}
    </section>
  )
}

export default PageHero
