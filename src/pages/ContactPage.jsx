import { useState } from 'react'
import { contactInfo } from '../data/siteContent'
import './PageLayout.css'

const initialForm = {
  name: '',
  subject: '',
  message: '',
}

function ContactPage() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = ({ target }) => {
    const { name, value } = target

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }))

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: value.trim() ? '' : 'Este campo es obligatorio.',
    }))
  }

  const validateForm = () => {
    const nextErrors = {
      name: form.name.trim() ? '' : 'El nombre es obligatorio.',
      subject: form.subject.trim() ? '' : 'El asunto es obligatorio.',
      message: form.message.trim() ? '' : 'El mensaje es obligatorio.',
    }

    setErrors(nextErrors)
    return Object.values(nextErrors).every((value) => !value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!validateForm()) {
      return
    }

    const emailBody = `Nombre: ${form.name}\n\n${form.message}`
    const mailto = `mailto:proenthos@gmail.com?subject=${encodeURIComponent(form.subject || 'Mensaje de AchirasGo')}&body=${encodeURIComponent(emailBody)}`

    window.open(mailto)

    setSubmitted(true)
    setTimeout(() => {
      setForm({ name: '', subject: '', message: '' })
      setErrors({})
      setSubmitted(false)
    }, 2000)
  }

  return (
    <div className="page-shell">
      <h1 className="contact-page-title">Contáctanos</h1>
      
      <section className="page-section">
        <div className="contact-container">
          <div className="contact-info-section">
            <h2 className="contact-section-title">Información de Contacto</h2>
            <p className="contact-section-text">
              Estamos disponibles para atenderte y resolver todas tus dudas sobre nuestros servicios.
            </p>
            
            <div className="contact-info-grid">
              <div className="contact-info-item">
                <h3 className="contact-info-label">📞 TELÉFONO</h3>
                <a href={`tel:${contactInfo.phone}`} className="contact-info-value">
                  {contactInfo.phone}
                </a>
              </div>
              
              <div className="contact-info-item">
                <h3 className="contact-info-label">💬 WHATSAPP</h3>
                <a href={contactInfo.whatsapp} className="contact-info-value" target="_blank" rel="noopener noreferrer">
                  Chatea con nosotros →
                </a>
              </div>
              
              <div className="contact-info-item">
                <h3 className="contact-info-label">📍 UBICACIÓN</h3>
                <p className="contact-info-value">{contactInfo.location}</p>
              </div>
              
              <div className="contact-info-item">
                <h3 className="contact-info-label">🕐 HORARIO DE ATENCIÓN</h3>
                <p className="contact-info-value">{contactInfo.hours}</p>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h2 className="contact-section-title">Envíanos un Mensaje</h2>
                    
            <form className="contact-form-card" onSubmit={handleSubmit} noValidate>
              <label className="contact-form-card__label" htmlFor="name">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className={`contact-form-card__input${errors.name ? ' has-error' : ''}`}
                required
              />
              {errors.name ? <span className="contact-form-card__error">{errors.name}</span> : null}

              <label className="contact-form-card__label" htmlFor="subject">
                Asunto
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                className={`contact-form-card__input${errors.subject ? ' has-error' : ''}`}
                required
              />
              {errors.subject ? <span className="contact-form-card__error">{errors.subject}</span> : null}

              <label className="contact-form-card__label" htmlFor="message">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={form.message}
                onChange={handleChange}
                className={`contact-form-card__input contact-form-card__input--textarea${errors.message ? ' has-error' : ''}`}
                required
              />
              {errors.message ? <span className="contact-form-card__error">{errors.message}</span> : null}

              <button type="submit" className="contact-form-card__button">
                Enviar mensaje
              </button>

              {submitted ? (
                <p className="contact-form-card__success">Formulario preparado correctamente en tu cliente de correo.</p>
              ) : null}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
