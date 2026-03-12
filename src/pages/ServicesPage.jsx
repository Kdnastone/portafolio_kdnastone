import { servicesCards } from '../data/siteContent'
import InfoCard from '../components/InfoCard'
import PageHero from '../components/PageHero'
import './PageLayout.css'

function ServicesPage() {
  return (
    <div className="page-shell">
      <PageHero
        eyebrow="Servicios"
        title="Soluciones entomológicas convertidas en páginas claras y editables"
        description="Cada tarjeta puede modificarse fácilmente desde un solo archivo de contenido para adaptar la oferta a nuevos clientes, proyectos o líneas de negocio."
      />

      <section className="page-section">
        <div className="cards-grid">
          {servicesCards.map((card) => (
            <InfoCard key={card.id} {...card} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
