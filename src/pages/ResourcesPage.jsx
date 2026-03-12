import { resourcesCards } from '../data/siteContent'
import InfoCard from '../components/InfoCard'
import PageHero from '../components/PageHero'
import './PageLayout.css'

function ResourcesPage() {
  return (
    <div className="page-shell">
      <PageHero
        eyebrow="Recursos"
        title="Recursos listos para compartir, ampliar o convertir en biblioteca digital"
        description="La página está organizada con tarjetas independientes para que puedas reemplazar títulos, descripciones o materiales sin tocar la estructura visual."
      />

      <section className="page-section">
        <div className="cards-grid">
          {resourcesCards.map((card) => (
            <InfoCard key={card.id} {...card} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ResourcesPage
