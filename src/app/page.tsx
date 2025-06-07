import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MenuCard from '@/components/MenuCard'

const featuredItems = [
  {
    name: 'Café Especial',
    description: 'Nosso café especial da casa, torrado artesanalmente.',
    price: 2.50,
    image: '/images/coffee.jpg'
  },
  {
    name: 'Bife à Portuguesa',
    description: 'Bife grelhado com batata e arroz de feijão preto.',
    price: 15.90,
    image: '/images/steak.jpg'
  },
  {
    name: 'Pudim de Ovos',
    description: 'Sobremesa tradicional portuguesa com calda de caramelo.',
    price: 4.50,
    image: '/images/pudding.jpg'
  }
]

export default function Home() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-top"
          style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        />
        <div className="container relative z-20 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">
            Pedra Bar
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            O melhor café e comida tradicional portuguesa
          </p>
          <a href="/menu" className="btn btn-primary">
            Ver Menu
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-primary mb-6">
              Sobre Nós
            </h2>
            <p className="text-lg text-gray-600">
              O Pedra Bar é um espaço acolhedor onde tradição e modernidade se encontram. 
              Oferecemos os melhores cafés e pratos tradicionais portugueses, preparados 
              com ingredientes frescos e muito carinho. Venha nos visitar e desfrutar de 
              uma experiência gastronômica única.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 