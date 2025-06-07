interface MenuLineItemProps {
  name: string
  description: string
  price: number
  icon?: React.ReactNode
}

export default function MenuLineItem({ name, description, price, icon }: MenuLineItemProps) {
  return (
    <div className="py-4">
      <div className="flex items-center w-full">
        <span className="font-serif font-bold text-lg md:text-xl flex items-center">
          {name} {icon && <span className="ml-2">{icon}</span>}
        </span>
        <div className="flex-1 border-t border-gray-400 mx-3" />
        <span className="font-extrabold text-lg md:text-xl text-right whitespace-nowrap">
          {price.toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' })}
        </span>
      </div>
      <div className="text-gray-600 font-semibold mt-1 ml-1 text-base md:text-lg">
        {description}
      </div>
    </div>
  )
} 