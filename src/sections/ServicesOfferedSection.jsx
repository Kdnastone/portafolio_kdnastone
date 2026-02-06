import './ServicesOfferedSection.css'

function ServicesOfferedSection({ sectionId }) {
  const servicesData = [
    {
      id: 'mip',
      title: 'Manejo Integrado de Plagas',
      description: 'Diseño e implementación de programas MIP basados en umbrales económicos, monitoreo poblacional y control biológico.',
      keyPoints: [
        'Evaluación de niveles de infestación',
        'Estrategias de control sostenible',
        'Reducción del uso de químicos'
      ]
    },
    {
      id: 'biodiversidad',
      title: 'Estudios de Biodiversidad',
      description: 'Inventarios entomológicos y análisis de comunidades para proyectos de conservación y estudios de impacto.',
      keyPoints: [
        'Muestreo sistemático de fauna',
        'Identificación taxonómica precisa',
        'Análisis de índices ecológicos'
      ]
    },
    {
      id: 'ambiental',
      title: 'Evaluación Ambiental',
      description: 'Estudios de línea base y monitoreo de indicadores entomológicos para proyectos industriales y de infraestructura.',
      keyPoints: [
        'Caracterización de entomofauna',
        'Evaluación de impactos potenciales',
        'Medidas de mitigación específicas'
      ]
    },
    {
      id: 'capacitacion',
      title: 'Capacitación Técnica',
      description: 'Formación especializada para profesionales en identificación, muestreo y manejo de insectos de importancia económica.',
      keyPoints: [
        'Talleres prácticos de campo',
        'Métodos de colecta y preservación',
        'Protocolos de monitoreo'
      ]
    }
  ]

  return (
    <section id={sectionId} className="services-section-wrapper">
      <div className="services-content-container">
        <div className="section-header-block">
          <h2 className="section-main-title">Nuestros Servicios</h2>
          <p className="section-subtitle-text">
            Soluciones integrales respaldadas por metodología científica rigurosa
          </p>
        </div>
        
        <div className="services-grid-layout">
          {servicesData.map((service) => (
            <article key={service.id} className="service-card-item">
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">{service.description}</p>
              <ul className="service-points-list">
                {service.keyPoints.map((point, idx) => (
                  <li key={idx} className="service-point-item">
                    <span className="point-marker">•</span>
                    <span className="point-text">{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesOfferedSection
