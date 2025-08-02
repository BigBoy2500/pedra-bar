'use client'

import { useState } from 'react'
import Head from 'next/head'
import { menuData } from '@/data/menuData'

type MenuCategoryKey = keyof typeof menuData

export default function Menu () {
  const categories = Object.keys(menuData) as MenuCategoryKey[]
  const [activeCategory, setActiveCategory] = useState<MenuCategoryKey>(categories[0])

  return (
    <>
      <div className="container mt-12 pt-24 pb-12">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-[#f4e6c5] rounded-lg shadow-2xl overflow-hidden">
            {/* Textura de fundo */}
            <div
              className="absolute inset-0 bg-cover bg-center pointer-events-none z-0"
              style={{
                backgroundImage: "url('/images/menu-bg.jpg')",
                backgroundSize: '100% 100%',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>

            {/* Moldura e cantos decorativos */}
            <div className="absolute inset-0 pointer-events-none z-10">
              <div className="absolute top-2 right-2 bottom-2 left-2 sm:top-4 sm:right-4 sm:bottom-4 sm:left-4">
                {/* Linhas pontilhadas responsivas */}
                <div
                  className="absolute top-[0.3rem] border-t-2 border-dotted 
                             left-10 right-10 sm:left-14 sm:right-14 md:left-16 md:right-16 lg:left-20 lg:right-20"
                  style={{ borderColor: '#1f3228' }}
                ></div>
                <div
                  className="absolute bottom-[0.3rem] border-t-2 border-dotted
                             left-10 right-10 sm:left-14 sm:right-14 md:left-16 md:right-16 lg:left-20 lg:right-20"
                  style={{ borderColor: '#1f3228' }}
                ></div>
                <div
                  className="absolute border-l-2 border-dotted
                             left-[0.3rem] top-10 bottom-10 sm:top-14 sm:bottom-14 md:top-16 md:bottom-16 lg:top-20 lg:bottom-20"
                  style={{ borderColor: '#1f3228' }}
                ></div>
                <div
                  className="absolute border-l-2 border-dotted
                             right-[0.3rem] top-10 bottom-10 sm:top-14 sm:bottom-14 md:top-16 md:bottom-16 lg:top-20 lg:bottom-20"
                  style={{ borderColor: '#1f3228' }}
                ></div>

                {/* Cantos decorativos (responsivos) */}
                <div className="absolute top-0 left-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16">
                  <img src="/images/menu-corner-tl.png" alt="" className="w-full h-full object-contain" />
                </div>
                <div className="absolute top-0 right-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16">
                  <img src="/images/menu-corner-tr.png" alt="" className="w-full h-full object-contain" />
                </div>
                <div className="absolute bottom-0 left-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16">
                  <img src="/images/menu-corner-bl.png" alt="" className="w-full h-full object-contain" />
                </div>
                <div className="absolute bottom-0 right-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16">
                  <img src="/images/menu-corner-br.png" alt="" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>

            {/* Conteúdo */}
            <div className="relative z-20 p-6 sm:p-8 md:p-10 pb-16 sm:pb-20 md:pb-24">
              {/* Cabeçalho principal */}
              <div className="text-center mb-8 sm:mb-10">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 mr-4">
                    <img src="/images/menu-cutlery.png" alt="Talheres" className="w-full h-full object-contain" />
                  </div>
                  <h1
                    className="font-bold tracking-wider"
                    style={{
                      fontFamily: "Pirata One",
                      color: '#1f3228',
                      fontSize: '2rem',
                      lineHeight: 1.2
                    }}
                  >
                    MENU
                  </h1>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 ml-4">
                    <img src="/images/menu-coffee.png" alt="Café" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="w-full flex justify-center">
                  {/* SVG decorativo abaixo do título */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 484.5 22.2"
                    fill="#4a3321"
                    className="w-full h-4 sm:h-5 md:h-6"
                  >
                    <g>
                      <path
                        d="M226.5 13.5L226.5 12.02 136.83 11.05 226.5 10.08 226.5 8.6 0 11.05 226.5 13.5z"
                        style={{ fill: 'inherit' }}
                      />
                      <path
                        d="M257.94 8.6L257.94 10.08 347.62 11.05 257.94 12.02 257.94 13.5 484.45 11.05 257.94 8.6z"
                        style={{ fill: 'inherit' }}
                      />
                      <path
                        d="M252.95,10.07c-.23-.34-.53-.62-.87-.85-.21-.15-.44-.28-.67-.4-.23-.11-.47-.22-.72-.31,.04-.15,.06-.29,.06-.44,0-.64-.38-1.28-1.15-1.83-.87,2.02-3.47,3.73-7,4.7l7.41-7.69-7.69,7.41c.97-3.52,2.67-6.12,4.69-6.99-.55-.77-1.19-1.15-1.83-1.15-.15,0-.29,.02-.44,.06-.09-.25-.2-.49-.31-.72-.21-.42-.46-.82-.79-1.15-.25-.26-.55-.48-.89-.61-.34-.12-.73-.13-1.07,0-.16,.06-.31,.14-.45,.23-.34,.23-.62,.53-.85,.87-.15,.21-.28,.44-.4,.67-.11,.23-.22,.47-.31,.72-.15-.04-.29-.06-.44-.06-.64,0-1.28,.38-1.83,1.15,2.03,.87,3.74,3.49,4.71,7.03l-7.73-7.45,7.4,7.68c-3.5-.97-6.09-2.67-6.96-4.69-.77,.55-1.15,1.19-1.15,1.83,0,.15,.02,.29,.06,.44-.25,.09-.49,.2-.72,.31-.42,.21-.82,.46-1.15,.79-.26,.25-.48,.55-.61,.89-.12,.34-.13,.73,0,1.07,.06,.16,.14,.31,.23,.45,.23,.34,.53,.62,.87,.85,.21,.15,.44,.28,.67,.4,.23,.11,.47,.22,.72,.31-.04,.15-.06,.29-.06,.44,0,.64,.38,1.28,1.15,1.83,.87-2.02,3.47-3.72,6.99-4.69l-7.43,7.71,7.72-7.44c-.97,3.53-2.67,6.13-4.7,7,.55,.77,1.19,1.15,1.83,1.15,.15,0,.29-.02,.44-.06,.09,.25,.2,.49,.31,.72,.12,.23,.25,.46,.4,.67,.23,.33,.51,.64,.85,.87,.14,.09,.29,.17,.45,.23,.34,.12,.73,.12,1.07,0,.34-.12,.64-.35,.89-.61,.32-.34,.58-.74,.79-1.15,.11-.23,.22-.47,.31-.72,.15,.04,.29,.06,.44,.06,.64,0,1.28-.38,1.83-1.15-2.02-.86-3.71-3.45-4.69-6.96l7.68,7.4-7.45-7.73c3.54,.97,6.16,2.68,7.03,4.71,.77-.55,1.15-1.19,1.15-1.83,0-.15-.02-.29-.06-.44,.25-.09,.49-.2,.72-.31,.42-.21,.82-.46,1.15-.79,.26-.25,.48-.55,.61-.89,.12-.34,.13-.73,0-1.07-.06-.16-.14-.31-.23-.45Z"
                        style={{ fill: 'inherit' }}
                      />
                    </g>
                  </svg>
                </div>
              </div>

              {/* Botões de filtro (com espaçamento entre letras) */}
              <div className="flex justify-center flex-wrap gap-3 mb-8 sm:mb-10">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-bold transition-colors"
                    style={{
                      fontFamily: "Pirata One",
                      letterSpacing: '0.05em', // aumenta o espaçamento entre letras
                      backgroundColor: activeCategory === cat ? '#1f3228' : '#f4e6c5',
                      color: activeCategory === cat ? '#f4e6c5' : '#1f3228',
                      border: `2px solid #1f3228`
                    }}
                  >
                    {menuData[cat].label}
                  </button>
                ))}
              </div>

              {/* Cabeçalho da categoria ativa */}
              <div className="mb-6 sm:mb-8">
                <h2
                  className="flex items-center mb-2 pr-2"
                  style={{
                    fontFamily: "Pirata One",
                    fontWeight: 700,
                    color: '#1f3228',
                    fontSize: '1.5rem',
                    lineHeight: 1.2,
                  }}
                >
                  <span className='mr-2 whitespace-nowrap'>{menuData[activeCategory].label}</span>
                  {/* Contêiner da seta: cresce para ocupar o espaço restante */}
                  <div className="flex-grow min-w-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-1446.37 477.3 2241 43"
                      preserveAspectRatio="none"
                      fill="#4a3321"
                      className="w-full h-3 sm:h-4 md:h-5"
                      style={{
                        transform: 'scaleX(-1)',   // vira a seta para apontar ao texto
                        transformOrigin: 'center',
                      }}
                    >
                      <path
                        d="M 795.497 498.817 L 778.827 503.627 L 774.017 520.297 L 769.207 503.627 L 759.477 500.817 L -1446.279 501.607 L -1446.367 497.166 L 759.477 496.817 L 769.207 494.007 L 774.017 477.337 L 778.827 494.007 L 795.497 498.817 Z"
                        fill="currentColor"  // herdará a cor definida no <svg>
                      />
                    </svg>
                  </div>
                </h2>
              </div>

              {/* Lista de itens ou subcategorias */}
              {(() => {
                const category = menuData[activeCategory];
                // Se existir `subcategories`, mostrar cada subcategoria
                if ('subcategories' in category) {
                  return (
                    <div className="space-y-8">
                      {Object.entries(category.subcategories).map(([key, sub]) => (
                        <div key={key}>
                          <h3
                            className="text-center mb-3 font-bold"
                            style={{
                              fontFamily: "Pirata One",
                              color: '#1f3228',
                              fontSize: '1.25rem',
                            }}
                          >
                            {sub.label}
                          </h3>
                          <div className="space-y-2 sm:space-y-3">
                            {sub.items.map((item, index) => (
                              <div key={index} className="flex items-center py-2">
                                <span
                                  className="font-medium"
                                  style={{
                                    fontFamily: "Obra Letra",
                                    color: '#1f3228',
                                    fontSize: '0.95rem',
                                  }}
                                >
                                  {item.name}
                                </span>
                                <div className="border-b border-dotted flex-grow mx-2 sm:mx-3" style={{ borderColor: '#1f3228' }}></div>
                                <span
                                  className="font-bold"
                                  style={{
                                    fontFamily: "Obra Letra",
                                    color: '#1f3228',
                                    fontSize: '0.95rem',
                                  }}
                                >
                                  {item.price === 0 ? '€' : `${item.price.toFixed(2)}€`}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                }
                // Caso contrário, mostrar a lista de itens normal
                return (
                  <div className="space-y-2 sm:space-y-3">
                    {category.items.map((item, index) => (
                      <div key={index} className="flex items-center py-2">
                        <span
                          className="font-medium"
                          style={{
                            fontFamily: "Obra Letra",
                            color: '#1f3228',
                            fontSize: '0.95rem',
                          }}
                        >
                          {item.name}
                        </span>
                        <div className="border-b border-dotted flex-grow mx-2 sm:mx-3" style={{ borderColor: '#1f3228' }}></div>
                        <span
                          className="font-bold"
                          style={{
                            fontFamily: "Obra Letra",
                            color: '#1f3228',
                            fontSize: '0.95rem',
                          }}
                        >
                          {item.price === 0 ? '€' : `${item.price.toFixed(2)}€`}
                        </span>
                      </div>
                    ))}
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
