import InfoCard from '../components/InfoCard'
import HeroSlider from '../components/HeroSlider'
import { homeCards, homeHeroSlides } from '../data/siteContent'
import './PageLayout.css'

function HomePage() {
  return (
    <div className="page-shell">
      <section className="home-hero-split">
        <div className="home-hero-copy">
          <span className="home-hero-copy__eyebrow">Home</span>
          <h1 className="home-hero-copy__title">Entomología aplicada para decisiones precisas y sostenibles</h1>
          <p className="home-hero-copy__text">
            Aquí dejamos el formato que pediste: texto a un lado y carrusel de imágenes al otro, sin botones ni enlaces en el banner.
          </p>
        </div>

        <HeroSlider slides={homeHeroSlides} />
      </section>

      <section className="page-section">
        <div className="cards-grid">
          {homeCards.map((card) => (
            <InfoCard key={card.id} {...card} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
