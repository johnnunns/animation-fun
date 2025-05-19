import DiscordDefaultAvatar from '../../images/discord_default_avatar.png';
import UserAvatar from '../../images/wumpus_avatar.png';

interface AvatarProps {
  centerIcon?: boolean;
  topLeftIcon?: boolean;
  tiltedRightIcon?: boolean;
  userAvatarUrl?: string;
  showCustomArt?: boolean;
}

const Avatar = ({ centerIcon, topLeftIcon, tiltedRightIcon }: AvatarProps) => {
  if (!centerIcon && !topLeftIcon && !tiltedRightIcon) return null;

  // Determine position & size
  let positionClasses = '';
  let size = '';

  if (centerIcon) {
    positionClasses = 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';
    size = 'w-24 h-24';
  } else if (topLeftIcon) {
    positionClasses = 'top-2 left-2';
    size = 'w-12 h-12';
  } else if (tiltedRightIcon) {
    positionClasses = 'top-4 right-4 rotate-12';
    size = 'w-16 h-16';
  }

  return (
    <>
      {/* Avatar container with default + user avatar swap */}
      <div className={`absolute ${positionClasses} ${size} rounded-full overflow-hidden`}>
        {/* Default Avatar */}
        <img
          src={DiscordDefaultAvatar}
          className="bg-sidebar w-full h-full object-cover opacity-90 rounded-full transition-opacity duration-400 group-hover:opacity-0"
          alt="Default Avatar"
        />
        {/* User Avatar */}
        {UserAvatar && (
          <img
            src={UserAvatar}
            className="bg-sidebar w-full h-full object-cover absolute top-0 left-0 opacity-0 rounded-full transition-opacity duration-800 group-hover:opacity-100"
            alt="User Avatar"
          />
        )}
      </div>
    </>
  );
};

export default Avatar;
