import type { CardData } from '../mocks/cardData';
import CenteredAvatar from './CenteredAvatar';
import RightSideAvatar from './RightSideAvatar';

const CardAsset = ({ type, assets }: Partial<CardData>) => {
  if (!type || !assets) {
    return null;
  }

  let component;

  switch (type) {
    case 'center':
      component = <CenteredAvatar assets={assets} />;
      break;
    case 'right':
      component = <RightSideAvatar assets={assets} />;
      break;
    // case 'left':
    //   return <LeftSideAvatar assets={assets} />;
    default:
      component = null;
  }

  return <div className="flex-1 relative">{component}</div>;
};

export default CardAsset;
