import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // Si el enlace apunta a una sección (ej. /misiones#celulas), baja hasta ella
    const destino = hash && document.getElementById(hash.slice(1))
    if (destino) destino.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default ScrollToTop
