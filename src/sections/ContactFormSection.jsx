import { useState } from 'react'
import './ContactFormSection.css'

function ContactFormSection({ sectionId }) {
  const [formFields, setFormFields] = useState({
    personName: '',
    emailAddress: '',
    organizationName: '',
    messageContent: ''
  })

  const [submissionStatus, setSubmissionStatus] = useState(null)

  const handleFieldUpdate = (fieldName, newValue) => {
    setFormFields(previousFields => ({
      ...previousFields,
      [fieldName]: newValue
    }))
  }

  const handleFormSubmission = (event) => {
    event.preventDefault()
    
    // Simulación de envío
    console.log('Formulario enviado:', formFields)
    setSubmissionStatus('success')
    
    // Limpiar formulario
    setFormFields({
      personName: '',
      emailAddress: '',
      organizationName: '',
      messageContent: ''
    })
    
    // Limpiar mensaje después de 5 segundos
    setTimeout(() => {
      setSubmissionStatus(null)
    }, 5000)
  }

  return (
    <section id={sectionId} className="contact-section-wrapper">
      <div className="contact-content-container">
        <div className="section-header-block">
          <h2 className="section-main-title">Contáctenos</h2>
          <p className="section-subtitle-text">
            Estamos disponibles para discutir cómo podemos ayudar con sus necesidades en entomología aplicada
          </p>
        </div>
        
        <div className="contact-layout-grid">
          <div className="contact-info-column">
            <h3 className="info-column-title">Información de Contacto</h3>
            <div className="contact-details-list">
              <div className="contact-detail-item">
                <span className="detail-label">Correo Electrónico:</span>
                <span className="detail-value">info@proenthos.com</span>
              </div>
              <div className="contact-detail-item">
                <span className="detail-label">Ubicación:</span>
                <span className="detail-value">Disponemos de cobertura nacional</span>
              </div>
              <div className="contact-detail-item">
                <span className="detail-label">Horario de Atención:</span>
                <span className="detail-value">Lunes a Viernes, 8:00 - 17:00</span>
              </div>
            </div>
            
            <div className="consultation-note-box">
              <p className="consultation-note-text">
                Ofrecemos una consulta inicial sin costo para evaluar sus necesidades 
                y proponer la mejor estrategia de trabajo.
              </p>
            </div>
          </div>
          
          <div className="contact-form-column">
            <form onSubmit={handleFormSubmission} className="contact-form-element">
              <div className="form-field-wrapper">
                <label htmlFor="personName" className="field-label">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="personName"
                  value={formFields.personName}
                  onChange={(e) => handleFieldUpdate('personName', e.target.value)}
                  required
                  className="field-input"
                />
              </div>
              
              <div className="form-field-wrapper">
                <label htmlFor="emailAddress" className="field-label">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  value={formFields.emailAddress}
                  onChange={(e) => handleFieldUpdate('emailAddress', e.target.value)}
                  required
                  className="field-input"
                />
              </div>
              
              <div className="form-field-wrapper">
                <label htmlFor="organizationName" className="field-label">
                  Organización
                </label>
                <input
                  type="text"
                  id="organizationName"
                  value={formFields.organizationName}
                  onChange={(e) => handleFieldUpdate('organizationName', e.target.value)}
                  className="field-input"
                />
              </div>
              
              <div className="form-field-wrapper">
                <label htmlFor="messageContent" className="field-label">
                  Mensaje *
                </label>
                <textarea
                  id="messageContent"
                  value={formFields.messageContent}
                  onChange={(e) => handleFieldUpdate('messageContent', e.target.value)}
                  required
                  rows="5"
                  className="field-textarea"
                />
              </div>
              
              <button type="submit" className="form-submit-button">
                Enviar Mensaje
              </button>
              
              {submissionStatus === 'success' && (
                <div className="success-message-box">
                  <p className="success-message-text">
                    ¡Gracias por contactarnos! Responderemos a la brevedad posible.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactFormSection
