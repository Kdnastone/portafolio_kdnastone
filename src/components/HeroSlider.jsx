import { useEffect, useState } from 'react'
import './HeroSlider.css'

function HeroSlider({ slides = [] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [failedSlideIds, setFailedSlideIds] = useState(() => new Set())

  useEffect(() => {
    if (slides.length <= 1) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length)
    }, 7500)

    return () => window.clearInterval(intervalId)
  }, [slides.length])

  const goToPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length)
  }

  const handleImageError = (slideId) => {
    setFailedSlideIds((currentSet) => {
      if (currentSet.has(slideId)) {
        return currentSet
      }

      const nextSet = new Set(currentSet)
      nextSet.add(slideId)
      return nextSet
    })
  }

  if (!slides.length) {
    return null
  }

  return (
    <section className="hero-slider" aria-label="Carrusel visual del home">
      <div className="hero-slider__viewport">
        {slides.map((slide, index) => (
          <article
            key={slide.id}
            className={`hero-slider__slide${index === activeIndex ? ' is-active' : ''}${failedSlideIds.has(slide.id) ? ' has-fallback' : ''}`}
            aria-hidden={index !== activeIndex}
          >
            {failedSlideIds.has(slide.id) ? (
              <div className="hero-slider__fallback" role="img" aria-label="Imagen no disponible temporalmente">
                Imagen no disponible
              </div>
            ) : (
              <>
                <img
                  src={slide.image}
                  alt={slide.title || 'Imagen destacada'}
                  className="hero-slider__image"
                  onError={() => handleImageError(slide.id)}
                />
                <div className="hero-slider__overlay" />
                <div className="hero-slider__content">
                  {slide.eyebrow && <span className="hero-slider__eyebrow">{slide.eyebrow}</span>}
                  {slide.title && <h2 className="hero-slider__title">{slide.title}</h2>}
                  {slide.description && <p className="hero-slider__description">{slide.description}</p>}
                  {(slide.primaryLabel || slide.secondaryLabel) && (
                    <div className="hero-slider__actions">
                      {slide.primaryLabel && (
                        <a href={slide.primaryLink} className="hero-slider__button hero-slider__button--primary">
                          {slide.primaryLabel}
                        </a>
                      )}
                      {slide.secondaryLabel && (
                        <a href={slide.secondaryLink} className="hero-slider__button hero-slider__button--secondary">
                          {slide.secondaryLabel}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </>
            )}
          </article>
        ))}

        {slides.length > 1 ? (
          <>
            <button type="button" className="hero-slider__nav hero-slider__nav--prev" onClick={goToPrevious} aria-label="Slide anterior">
              ‹
            </button>
            <button type="button" className="hero-slider__nav hero-slider__nav--next" onClick={goToNext} aria-label="Siguiente slide">
              ›
            </button>
          </>
        ) : null}
      </div>

      {slides.length > 1 ? (
        <div className="hero-slider__dots" role="tablist" aria-label="Cambiar banner">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`hero-slider__dot${index === activeIndex ? ' is-active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Ir al banner ${index + 1}`}
              aria-selected={index === activeIndex}
              role="tab"
            />
          ))}
        </div>
      ) : null}
    </section>
  )
}

export default HeroSlider
