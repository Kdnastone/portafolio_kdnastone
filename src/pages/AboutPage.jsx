import { aboutCards } from '../data/siteContent'
import InfoCard from '../components/InfoCard'
import PageHero from '../components/PageHero'
import './PageLayout.css'

function AboutPage() {
  return (
    <div className="page-shell">
      <PageHero
        eyebrow="Nosotros"
        title="Una presentación institucional con identidad natural, técnica y contemporánea"
        description="La propuesta visual toma verdes, dorados y tonos tierra del logo para reforzar una presencia profesional y coherente en cada página."
      />

      <section className="page-section">
        <div className="cards-grid">
          {aboutCards.map((card) => (
            <InfoCard key={card.id} {...card} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default AboutPage
