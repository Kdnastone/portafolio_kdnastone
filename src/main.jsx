import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globalStyles.css'
import ProenthosWebsite from './ProenthosWebsite.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProenthosWebsite />
  </StrictMode>,
)
