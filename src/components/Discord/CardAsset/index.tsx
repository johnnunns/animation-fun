import type { CardData } from '../mocks/cardData';
import CenteredAvatar from './CenteredAvatar';

const CardAsset = ({ type, asset }: Partial<CardData>) => {
  if (!type || !asset) {
    return null;
  }

  let component;

  switch (type) {
    case 'center':
      component = <CenteredAvatar asset={asset} />;
      break;
    // case 'right':
    //   return <RightSideAvatar asset={asset} />;
    // case 'left':
    //   return <LeftSideAvatar asset={asset} />;
    default:
      component = null;
  }

  return <div className="flex-1 relative">{component}</div>;
};

export default CardAsset;
