import { useRef, useState } from 'react';
import DiscordDefaultAvatar from '../../../images/discord_default_avatar.png';
import DiscordDefaultCard from '../../../images/discord_default_card.png';
import UserAvatar from '../../../images/wumpus_wave.png';
import type { Assets } from '../mocks/cardData';

const RightSideAvatar = ({ assets }: { assets: Assets }) => {
  const { backgroundStatic, backgroundAnimated, avatarOverlayStatic, avatarOverlayAnimated, idle, videoLength } =
    assets ?? {};

  const [currentSrc, setCurrentSrc] = useState(backgroundAnimated);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    timeoutRef.current = window.setTimeout(() => {
      setCurrentSrc(idle);
    }, videoLength);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setCurrentSrc(backgroundAnimated);
  };

  return (
    <div className="relative w-full h-full" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Left Side – Card */}
      <div className="absolute left-5 top-1/2 -translate-y-1/2 w-[185px] h-[245px] -rotate-6">
        <img
          src={DiscordDefaultCard}
          className="absolute inset-0 w-full h-full object-cover rounded-lg object-top"
          alt="Default Card"
        />
        {backgroundStatic && (
          <img
            src={backgroundStatic}
            className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-100 transition-opacity duration-300 object-top group-hover:opacity-0"
            alt="Card Overlay Static"
          />
        )}
        {currentSrc && (
          <img
            src={currentSrc}
            className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-0 transition-opacity duration-300 object-top group-hover:opacity-100"
            alt="Card Overlay Animated"
          />
        )}
      </div>

      {/* Right Side – Avatar */}
      <div className="absolute right-5 top-1/2 -translate-y-1/2 w-34 h-34 z-10 rotate-6">
        {/* Default Avatar */}
        <img
          src={DiscordDefaultAvatar}
          className="absolute inset-0 w-full h-full object-cover rounded-full opacity-90 transition-opacity duration-400 group-hover:opacity-0"
          alt="Default Avatar"
        />
        {/* User Avatar */}
        <img
          src={UserAvatar}
          className="absolute inset-0 w-full h-full object-cover rounded-full opacity-0 transition-opacity duration-800 group-hover:opacity-100"
          alt="User Avatar"
        />
        {/* Avatar Overlays */}
        {avatarOverlayStatic && (
          <img
            src={avatarOverlayStatic}
            className="pointer-events-none absolute inset-0 w-full h-full object-contain opacity-100 transition-opacity duration-300 group-hover:opacity-0"
            alt="Avatar Overlay Static"
          />
        )}
        {avatarOverlayAnimated && (
          <img
            src={avatarOverlayAnimated}
            className="pointer-events-none absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            alt="Avatar Overlay Animated"
          />
        )}
      </div>
    </div>
  );
};

export default RightSideAvatar;
