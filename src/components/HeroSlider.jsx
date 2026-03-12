import { useEffect, useState } from 'react'
import './HeroSlider.css'

function HeroSlider({ slides = [] }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length)
    }, 5500)

    return () => window.clearInterval(intervalId)
  }, [slides.length])

  const goToPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length)
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
            className={`hero-slider__slide${index === activeIndex ? ' is-active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-hidden={index !== activeIndex}
          />
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
