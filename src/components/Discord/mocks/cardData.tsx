import { CrownIcon, ExclamationMarkIcon, StarIcon, ChatDotsIcon } from '@phosphor-icons/react';

export type Asset = {
  overlayIcon: React.ReactNode;
  animationClass: string;
};

export interface CardData {
  id: number;
  title: string;
  type: 'left' | 'center' | 'right';
  originalPrice: number;
  salePrice: number;
  asset: Asset;
}

export const data: CardData[] = [
  {
    id: 1,
    title: 'Card Title 1',
    type: 'center',
    originalPrice: 19.99,
    salePrice: 14.99,
    asset: {
      overlayIcon: <StarIcon size={48} color="yellow" weight="fill" />,
      animationClass: 'z-50 absolute bottom-0 right-0 group-hover:animate-twinkle',
    },
  },
  {
    id: 2,
    title: 'Card Title 2',
    type: 'center',
    originalPrice: 19.99,
    salePrice: 14.99,
    asset: {
      overlayIcon: (
        <div className="flex">
          <ExclamationMarkIcon size={64} color="red" />
        </div>
      ),
      animationClass: 'z-50 absolute top-[-10px] right-[-10px] group-hover:animate-pulse-red',
    },
  },
  {
    id: 3,
    title: 'Card Title 3',
    type: 'center',
    originalPrice: 19.99,
    salePrice: 14.99,
    asset: {
      overlayIcon: <CrownIcon color="gold" weight="fill" size={64} />,
      animationClass: 'z-50 absolute top-[-20px] left-1/2 -translate-x-1/2 group-hover:animate-bounce-slow',
    },
  },
  {
    id: 4,
    title: 'Card Title 3',
    type: 'center',
    originalPrice: 19.99,
    salePrice: 14.99,
    asset: {
      overlayIcon: <ChatDotsIcon size={48} color="white" weight="fill" />,
      animationClass: 'z-50 absolute top-[10px] right-[-45px] group-hover:animate-fade-in',
    },
  },
];

export default data;
