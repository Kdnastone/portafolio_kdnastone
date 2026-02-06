import './CompanyInfoSection.css'

function CompanyInfoSection({ sectionId }) {
  const companyAspects = [
    {
      heading: 'Nuestra Misión',
      content: 'Proporcionar soluciones científicas rigurosas y sostenibles en el ámbito de la entomología aplicada, contribuyendo al desarrollo de prácticas agrícolas e industriales responsables con el medio ambiente.'
    },
    {
      heading: 'Enfoque de Trabajo',
      content: 'Basamos nuestras recomendaciones en evidencia científica actualizada, combinando conocimiento académico con experiencia práctica en campo para generar soluciones efectivas y replicables.'
    },
    {
      heading: 'Compromiso con la Calidad',
      content: 'Mantenemos altos estándares en metodología científica, documentación detallada de procesos y transparencia en la comunicación de resultados con nuestros clientes y colaboradores.'
    }
  ]

  return (
    <section id={sectionId} className="company-info-section-wrapper">
      <div className="company-info-content-box">
        <div className="section-header-block">
          <h2 className="section-main-title">Sobre Proenthos</h2>
          <p className="section-subtitle-text">
            Consultoría científica especializada en entomología aplicada
          </p>
        </div>
        
        <div className="company-aspects-container">
          {companyAspects.map((aspect, index) => (
            <div key={index} className="aspect-info-block">
              <h3 className="aspect-heading-text">{aspect.heading}</h3>
              <p className="aspect-content-paragraph">{aspect.content}</p>
            </div>
          ))}
        </div>
        
        <div className="credentials-display-box">
          <h3 className="credentials-title">Áreas de Especialización</h3>
          <div className="specialization-tags-row">
            <span className="specialization-tag">Taxonomía de Insectos</span>
            <span className="specialization-tag">Ecología de Plagas</span>
            <span className="specialization-tag">Control Biológico</span>
            <span className="specialization-tag">Entomología Forense</span>
            <span className="specialization-tag">Biodiversidad</span>
            <span className="specialization-tag">Impacto Ambiental</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyInfoSection
