import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import TopNavbar from './components/TopNavbar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFlotante from './components/WhatsAppFlotante'
import Inicio from './pages/Inicio'
import Nosotros from './pages/Nosotros'
import Formacion from './pages/Formacion'
import LlavesDelReino from './pages/Formacion/LlavesDelReino'
import Contactos from './pages/Contactos'
import Eventos from './pages/Eventos'
import Misiones from './pages/Misiones'
import Ofrenda from './pages/Ofrenda'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 dark:bg-brand-navy-dark dark:text-white font-sans selection:bg-brand-gold selection:text-white transition-colors duration-300">
      <ScrollToTop />
      {/* Barra de información superior */}
      <TopNavbar />

      {/* Barra de navegación principal */}
      <Navbar />



      {/* Contenido principal con rutas */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/mision" element={<Navigate to="/nosotros" replace />} /> {/* Dirección antigua */}
          <Route path="/misiones" element={<Misiones />} />
          <Route path="/grupos" element={<Navigate to="/misiones#celulas" replace />} /> {/* Dirección antigua */}
          <Route path="/formacion" element={<Formacion />} />
          <Route path="/formacion/las-llaves-del-reino" element={<LlavesDelReino />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/contacto" element={<Contactos />} />
          <Route path="/ofrenda" element={<Ofrenda />} />
        </Routes>
      </main>

      {/* Pie de página */}
      <Footer />

      {/* Botón flotante de WhatsApp */}
      <WhatsAppFlotante />
    </div>
  )
}

export default App