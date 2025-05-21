import DiscordDefaultAvatar from '../../../images/discord_default_avatar.png';
import UserAvatar from '../../../images/wumpus_wave.png';
import type { Assets } from '../mocks/cardData';

const CenteredAvatar = ({ assets }: { assets: Assets }) => {
  const { avatarOverlayStatic, avatarOverlayAnimated } = assets ?? {};

  return (
    <div className="w-46 h-46 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <img
        src={DiscordDefaultAvatar}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-[75%] object-cover opacity-90 rounded-full transition-opacity duration-400 group-hover:opacity-0"
        alt="Default Avatar"
      />

      <img
        src={UserAvatar}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-[75%] object-cover opacity-0 rounded-full transition-opacity duration-800 group-hover:opacity-100"
        alt="User Avatar"
      />

      {avatarOverlayStatic && (
        <img
          src={avatarOverlayStatic}
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-contain opacity-100 transition-opacity duration-300 group-hover:opacity-0"
          alt="Avatar Overlay Static"
        />
      )}

      {avatarOverlayAnimated && (
        <img
          src={avatarOverlayAnimated}
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          alt="Avatar Overlay Animated"
        />
      )}
    </div>
  );
};

export default CenteredAvatar;
