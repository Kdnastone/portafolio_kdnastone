import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import './PortafolioWebsite.css'

function PortafolioWebsite() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="app-shell__content">
        <div className="app-shell__content-inner">
          <HomePage />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default PortafolioWebsite