interface CardDescriptionProps {
  title: string;
  originalPrice: string;
  salePrice: string;
  discount: string;
}

const CardDescription = ({ title, originalPrice, salePrice, discount }: CardDescriptionProps) => (
  <div className="border-t p-6 border-t-border bg-card-bottom min-h-32 flex flex-col justify-between">
    <h3 className="text-white text-xl font-bold truncate">{title}</h3>
    <div className="relative">
      <div className="absolute left-0 bottom-0 flex items-center gap-2 text-sm opacity-100 ease-out group-hover:opacity-0 transition-opacity duration-1000">
        <span className="line-through text-gray-400">{originalPrice}</span>
        <span className="text-white">{salePrice}</span>
        <span className="text-green-400">({discount})</span>
      </div>
      <div
        className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-2
        opacity-0 group-hover:opacity-100 group-hover:translate-y-0
        transition-all duration-500 w-full ease-out"
      >
        <button className="bg-discord-purple text-white text-sm font-bold py-3 px-4 rounded-lg mt-2 w-full">
          Buy Now
        </button>
      </div>
    </div>
  </div>
);

export default CardDescription;
