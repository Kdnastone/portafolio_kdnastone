import './PrimaryHeroSection.css'

function PrimaryHeroSection({ sectionId }) {
  return (
    <section id={sectionId} className="hero-section-container">
      <div className="hero-content-layout">
        <div className="hero-text-block">
          <h2 className="hero-main-heading">
            Soluciones científicas en entomología para la industria y el medio ambiente
          </h2>
          <p className="hero-description-text">
            Proenthos ofrece consultoría especializada basada en evidencia científica 
            para el manejo integrado de plagas, estudios de biodiversidad entomológica 
            y evaluación de impacto ambiental.
          </p>
          <div className="hero-emphasis-box">
            <p className="emphasis-text">
              Más de una década de experiencia en investigación aplicada y transferencia 
              de conocimiento en el campo de la entomología.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrimaryHeroSection
