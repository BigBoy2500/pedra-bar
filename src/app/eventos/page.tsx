'use client'

import { useState } from 'react'

// Função para verificar se a data já passou
const isEventPassed = (isoDate: string) => {
  const eventDate = new Date(isoDate)
  const today = new Date()
  
  // Reset time to compare only dates
  today.setHours(0, 0, 0, 0)
  eventDate.setHours(0, 0, 0, 0)
  
  return eventDate < today
}

export default function EventosPage() {
  const [selectedEvent, setSelectedEvent] = useState<{
    title: string;
    image: string;
    date: string;
    isoDate: string;
    time: string;
    description: string;
  } | null>(null);

  const events = [
    {
      title: "The Project no Pedra Bar",
      image: "/images/concerto-the-project.jpeg",
      date: "2 de agosto, 2025",
      isoDate: "2025-08-02",
      time: "A partir das 21:00",
      description: "Uma noite especial com música ao vivo e ambiente único. Venha desfrutar de um concerto memorável no Pedra Bar."
    },
    {
      title: "Abertura Pedra Bar",
      image: "/images/abertura-pedra-bar.jpg",
      date: "6 de junho, 2025",
      isoDate: "2025-06-06",
      time: "A partir das 18:00",
      description: "Em Forjães, entre pedra e tradição, nasce um novo espaço para petiscar, brindar e conviver. O sabor da pedra está à tua espera. Vem fazer parte desta casa."
    }
  ];

  return (
    <div className="container pt-32 pb-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Eventos</h1>
      
      <div className="max-w-4xl mx-auto">
        {/* Eventos em Destaque */}
        <section className="mb-16">
          
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto ${events.length === 1 ? 'md:justify-items-center' : ''}`}>
            {events.map((event, index) => {
              const eventPassed = isEventPassed(event.isoDate)
              console.log(`Event: ${event.title}, Date: ${event.date}, ISO: ${event.isoDate}, Passed: ${eventPassed}`)
              
              return (
                <div
                  key={index}
                  className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105 ${eventPassed ? 'opacity-60' : ''}`}
                  onClick={() => setSelectedEvent(event)}
                >
                  {/* Indicador de evento passado */}
                  {eventPassed && (
                    <div className="bg-red-500 text-white text-center py-2 px-4 font-semibold">
                      EVENTO JÁ REALIZADO
                    </div>
                  )}
                  
                  {/* Título do Evento */}
                  <div className="p-6 pb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h3>
                  </div>

                {/* Cartaz do Evento */}
                <div className="px-6 pb-4">
                  <div className="bg-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={`${event.title} - Pedra Bar`}
                      className="w-full h-64 object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                        if (fallback) {
                          fallback.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="h-64 bg-gray-300 flex items-center justify-center hidden">
                      <div className="text-gray-500 text-center">
                        <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p>Cartaz não disponível</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Data e Hora */}
                <div className="px-6 pb-3">
                  <div className="flex items-center text-sm text-green-600 font-semibold mb-2">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {event.time}
                  </div>
                </div>

                                  {/* Descrição */}
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Secção dedicada a concertos */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Toca a Tua Música no Pedra Bar
          </h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">O Palco é Teu!</h3>
              <p className="text-gray-600 mb-6">
                O Pedra Bar é o espaço ideal para bandas, artistas e projetos musicais apresentarem o seu talento ao vivo.<br/>
                Se tens uma banda, projeto a solo ou queres organizar um concerto intimista, fala connosco e faz parte da nossa agenda cultural!
              </p>
              <ul className="space-y-3 text-gray-600 mb-8 text-left inline-block">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Palco equipado para atuações ao vivo
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Ambiente acolhedor e público próximo
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Apoio na divulgação do teu concerto
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-secondary mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Possibilidade de showcases, jam sessions e noites temáticas
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+351933834749" 
                  className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                >
                  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Fala Connosco
                </a>
                <a 
                  href="mailto:pedrabar25@gmail.com" 
                  className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Envia-nos um Email
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contacto para Eventos */}
      </div>

      {/* Popup do Cartaz */}
      {selectedEvent && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-800">{selectedEvent.title}</h3>
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
              
              <div className="mb-4">
                <img 
                  src={selectedEvent.image} 
                  alt={`${selectedEvent.title} - Pedra Bar`}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center text-green-600 font-semibold">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {selectedEvent.date}
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {selectedEvent.time}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {selectedEvent.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 