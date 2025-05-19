import CardAsset from './CardAsset';
import CardContainer from './CardContainer';
import CardDescription from './CardDescription';
import mockData, { type CardData } from './mocks/cardData';

const Cards = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] auto-rows-[400px] gap-[20px]">
      {mockData.map((item: CardData) => (
        <CardContainer key={item.id}>
          <CardAsset type={item.type} asset={item.asset} />
          <CardDescription
            title={item.title}
            originalPrice={`$${item.originalPrice.toFixed(2)}`}
            salePrice={`$${item.salePrice.toFixed(2)}`}
            discount={`(-${(((item.originalPrice - item.salePrice) / item.originalPrice) * 100).toFixed(0)}%)`}
          />
        </CardContainer>
      ))}
    </div>
  );
};

export default Cards;
