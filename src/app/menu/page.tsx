'use client'

import { useState } from 'react'
import MenuLineItem from '@/components/MenuLineItem'
import { menuData } from '@/data/menuData'

// Função utilitária para capitalizar e formatar nomes de categorias
function formatCategoryName(key: string) {
  if (key.toLowerCase() === 'cafes') return 'Cafés';
  if (key.toLowerCase() === 'pratos') return 'Pratos Principais';
  if (key.toLowerCase() === 'sobremesas') return 'Sobremesas';
  // Capitaliza a primeira letra e mantém o resto
  return key.charAt(0).toUpperCase() + key.slice(1);
}

type MenuCategoryKey = keyof typeof menuData;

export default function Menu() {
  const categories = Object.keys(menuData) as MenuCategoryKey[];
  const [activeCategory, setActiveCategory] = useState<MenuCategoryKey>(categories[0]);

  return (
    <main>
      <div className="pt-32 pb-20">
        <div className="container">
          <h1 className="text-4xl font-bold text-primary text-center mb-12">
            Nosso Menu
          </h1>

          {/* Category Filters */}
          <div className="flex justify-center space-x-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`btn ${activeCategory === cat ? 'btn-primary' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                {menuData[cat].label}
              </button>
            ))}
          </div>

          {/* Título da categoria */}
          <h2 className="text-2xl font-serif font-bold text-primary mb-6 text-center">
            {menuData[activeCategory].label}
          </h2>

          {/* Menu Items List */}
          <div className="bg-gray-100 border border-green-700 rounded-md px-4 md:px-8 py-6 md:py-10">
            {menuData[activeCategory].items.map((item, index) => (
              <MenuLineItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
} 