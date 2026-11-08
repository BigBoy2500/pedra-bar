'use client'

import { useState } from 'react'
import type { Evento } from '@/lib/types'


const isEventPassed = (isoDate: string) => {
  const eventDate = new Date(isoDate)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  eventDate.setHours(0, 0, 0, 0)
  return eventDate < today
}

const formatDate = (isoDate: string) => {
  return new Date(isoDate).toLocaleDateString('pt-PT', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function EventosClient({ events }: { events: Evento[] }) {
  const [selectedEvent, setSelectedEvent] = useState<Evento | null>(null)

  return (
    <div className="container pt-32 pb-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Eventos</h1>

      <div className="max-w-4xl mx-auto">
        <section className="mb-16">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto ${events.length === 1 ? 'md:justify-items-center' : ''}`}>
            {events.map((event) => {
              const passed = isEventPassed(event.date)
              return (
                <div
                  key={event.id}
                  className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105 ${passed ? 'opacity-60' : ''}`}
                  onClick={() => setSelectedEvent(event)}
                >
                  {passed && (
                    <div className="bg-red-500 text-white text-center py-2 px-4 font-semibold">EVENTO JÁ REALIZADO</div>
                  )}
                  <div className="p-6 pb-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h3>
                  </div>
                  <div className="px-6 pb-4">
                    <div className="bg-gray-200 rounded-lg overflow-hidden">
                      {event.image ? (
                        <img src={event.image} alt={`${event.title} - Pedra Bar`} className="w-full h-64 object-cover" />
                      ) : (
                        <div className="h-64 bg-gray-300 flex items-center justify-center">
                          <p className="text-gray-500">Cartaz não disponível</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="px-6 pb-3">
                    <div className="flex items-center text-sm text-green-600 font-semibold mb-2">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {event.time}
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 text-sm leading-relaxed">{event.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Toca a Tua Música no Pedra Bar</h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">O Palco é Teu!</h3>
              <p className="text-gray-600 mb-6">
                O Pedra Bar é o espaço ideal para bandas, artistas e projetos musicais apresentarem o seu talento ao vivo.<br />
                Se tens uma banda, projeto a solo ou queres organizar um concerto intimista, fala connosco e faz parte da nossa agenda cultural!
              </p>
              <ul className="space-y-3 text-gray-600 mb-8 text-left inline-block">
                {['Palco equipado para atuações ao vivo', 'Ambiente acolhedor e público próximo', 'Apoio na divulgação do teu concerto', 'Possibilidade de showcases, jam sessions e noites temáticas'].map((item) => (
                  <li key={item} className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+351933834749" className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
                  Fala Connosco
                </a>
                <a href="mailto:pedrabar25@gmail.com" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Envia-nos um Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={() => setSelectedEvent(null)}>
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-800">{selectedEvent.title}</h3>
                <button onClick={() => setSelectedEvent(null)} className="text-gray-500 hover:text-gray-700 text-2xl font-bold">×</button>
              </div>
              {selectedEvent.image && (
                <div className="mb-4">
                  <img src={selectedEvent.image} alt={`${selectedEvent.title} - Pedra Bar`} className="w-full h-auto rounded-lg" />
                </div>
              )}
              <div className="space-y-3">
                <div className="flex items-center text-green-600 font-semibold">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {formatDate(selectedEvent.date)}
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {selectedEvent.time}
                </div>
                <p className="text-gray-700 leading-relaxed">{selectedEvent.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
