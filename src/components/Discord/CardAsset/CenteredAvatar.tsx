import DiscordDefaultAvatar from '../../../images/discord_default_avatar.png';
import UserAvatar from '../../../images/wumpus_avatar.png';
import type { Asset } from '../mocks/cardData';

const CenteredAvatar = ({ asset }: { asset: Asset }) => {
  return (
    <div className="group w-36 h-36 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {/* Default Avatar */}
      <img
        src={DiscordDefaultAvatar}
        className="w-full h-full object-cover opacity-90 rounded-full transition-opacity duration-400 group-hover:opacity-0"
        alt="Default Avatar"
      />

      {/* User Avatar */}
      <img
        src={UserAvatar}
        className="absolute top-0 left-0 w-full h-full object-cover opacity-0 rounded-full transition-opacity duration-800 group-hover:opacity-100"
        alt="User Avatar"
      />

      {/* Animated Overlay Icon */}
      {asset && <div className={`pointer-events-none ${asset.animationClass}`}>{asset.overlayIcon}</div>}
    </div>
  );
};

export default CenteredAvatar;
