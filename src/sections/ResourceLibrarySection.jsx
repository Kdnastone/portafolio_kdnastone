import './ResourceLibrarySection.css'

function ResourceLibrarySection({ sectionId }) {
  const resourceItems = [
    {
      category: 'Publicaciones Científicas',
      materials: [
        'Artículos en revistas indexadas sobre control biológico',
        'Estudios de caso en manejo de plagas agrícolas',
        'Investigaciones en taxonomía de Coleoptera'
      ]
    },
    {
      category: 'Guías Técnicas',
      materials: [
        'Protocolos de muestreo para diferentes ecosistemas',
        'Métodos de identificación de especies plaga',
        'Criterios para establecer umbrales de acción'
      ]
    },
    {
      category: 'Material Educativo',
      materials: [
        'Manuales de buenas prácticas en MIP',
        'Fichas de identificación de insectos benéficos',
        'Videos didácticos sobre técnicas de monitoreo'
      ]
    }
  ]

  return (
    <section id={sectionId} className="resources-section-container">
      <div className="resources-inner-wrapper">
        <div className="section-header-block">
          <h2 className="section-main-title">Recursos y Conocimiento</h2>
          <p className="section-subtitle-text">
            Compartimos nuestro conocimiento para fortalecer las capacidades técnicas del sector
          </p>
        </div>
        
        <div className="resources-columns-layout">
          {resourceItems.map((resource, index) => (
            <div key={index} className="resource-column-box">
              <h3 className="resource-category-heading">{resource.category}</h3>
              <ul className="resource-materials-list">
                {resource.materials.map((material, materialIdx) => (
                  <li key={materialIdx} className="resource-material-entry">
                    {material}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="resources-info-note">
          <p className="info-note-text">
            Los recursos están disponibles para colaboradores y participantes de nuestros programas de capacitación.
            Para solicitar acceso, contáctenos a través del formulario en esta página.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ResourceLibrarySection
