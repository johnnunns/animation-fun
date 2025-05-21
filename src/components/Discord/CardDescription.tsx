import Button from './ui/Button';

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
      <div className="absolute left-0 bottom-0 flex items-center gap-2 text-sm opacity-100 ease-out transition-opacity duration-1000 group-hover:opacity-0 group-focus-within:opacity-0">
        <span className="line-through text-gray-400 font-bold">{originalPrice}</span>
        <span className="text-white font-bold">{salePrice}</span>
        <span className="text-discord-green-500 font-bold">{discount}</span>
      </div>
      <div
        className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-2
        opacity-0 group-hover:opacity-100
        transition-all duration-500 w-full ease-out
        group-focus-within:opacity-100 group-focus-within:translate-y-0"
      >
        <Button onClick={() => console.log('action here')}>Buy Now</Button>
      </div>
    </div>
  </div>
);

export default CardDescription;
