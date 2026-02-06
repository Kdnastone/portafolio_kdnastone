import { useState } from 'react'
import TopNavigationBar from './sections/TopNavigationBar'
import PrimaryHeroSection from './sections/PrimaryHeroSection'
import ServicesOfferedSection from './sections/ServicesOfferedSection'
import ResourceLibrarySection from './sections/ResourceLibrarySection'
import CompanyInfoSection from './sections/CompanyInfoSection'
import ContactFormSection from './sections/ContactFormSection'
import './ProenthosWebsite.css'

function ProenthosWebsite() {
  const [activeSectionId, setActiveSectionId] = useState('inicio')

  const handleNavigationClick = (sectionIdentifier) => {
    setActiveSectionId(sectionIdentifier)
    const targetElement = document.getElementById(sectionIdentifier)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="proenthos-main-container">
      <TopNavigationBar 
        currentActiveSection={activeSectionId}
        onNavigate={handleNavigationClick}
      />
      
      <main className="website-content-wrapper">
        <PrimaryHeroSection sectionId="inicio" />
        <ServicesOfferedSection sectionId="servicios" />
        <ResourceLibrarySection sectionId="recursos" />
        <CompanyInfoSection sectionId="nosotros" />
        <ContactFormSection sectionId="contacto" />
      </main>
    </div>
  )
}

export default ProenthosWebsite
