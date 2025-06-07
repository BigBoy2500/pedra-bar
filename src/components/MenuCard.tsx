interface MenuCardProps {
  name: string
  description: string
  price: number
  image?: string
}

export default function MenuCard({ name, description, price, image }: MenuCardProps) {
  return (
    <div className="card">
      {image && (
        <div className="relative h-48">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-serif font-bold text-primary">{name}</h3>
          <span className="text-lg font-bold text-secondary">
            {price.toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' })}
          </span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
} 