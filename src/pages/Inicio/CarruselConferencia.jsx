import { useState, useEffect } from 'react'
import banner2 from '../../assets/images/banner2.png'
import banner3 from '../../assets/images/banner3.png'

const images = [banner2, banner3];

export default function CarruselConferencia() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000)
    return () => clearInterval(slideInterval)
  }, [currentIndex])

  return (
    <div className="w-full relative group overflow-hidden bg-gray-950 rounded-xl">
      {/* Contenedor de diapositivas */}
      <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((img, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={img}
              className="w-full h-[300px] sm:h-[400px] object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      
      {/* Flecha Izquierda */}
      <button
        onClick={prevSlide}
        className="hidden group-hover:flex absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/70 transition-all z-10"
        aria-label="Anterior"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Flecha Derecha */}
      <button
        onClick={nextSlide}
        className="hidden group-hover:flex absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/70 transition-all z-10"
        aria-label="Siguiente"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Indicadores (Dots) */}
      <div className="absolute bottom-4 left-0 right-0 z-10">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`transition-all duration-300 rounded-full h-3 ${
                currentIndex === slideIndex 
                  ? 'bg-linear-to-r from-logo-gold-claro to-logo-gold-oscuro w-8'
                  : 'w-3 bg-brand-blue/25 hover:bg-brand-blue/50 dark:bg-white/40 dark:hover:bg-white/80'
              }`}
              aria-label={`Ir a la diapositiva ${slideIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}