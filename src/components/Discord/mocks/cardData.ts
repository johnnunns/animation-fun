export type Assets = {
  avatarOverlayStatic: string;
  avatarOverlayAnimated: string;
  backgroundStatic?: string;
  backgroundAnimated?: string;
  idle?: string;
  videoLength?: number;
};

export interface CardData {
  id: number;
  title: string;
  type: 'left' | 'center' | 'right';
  originalPrice: number;
  salePrice: number;
  assets: Assets;
}

export const data: CardData[] = [
  {
    id: 3,
    title: 'Bountiful Harvest Bundle',
    type: 'right',
    originalPrice: 19.99,
    salePrice: 14.99,
    assets: {
      avatarOverlayStatic:
        'https://cdn.discordapp.com/avatar-decoration-presets/a_cffaa50ce82fa79b09e2e0078e8b18bb.png?size=300&passthrough=false',
      avatarOverlayAnimated:
        'https://cdn.discordapp.com/avatar-decoration-presets/a_cffaa50ce82fa79b09e2e0078e8b18bb.png?size=240&passthrough=true',
      backgroundStatic:
        'https://cdn.discordapp.com/assets/profile_effects/effects/2025-05-07/farming_town/thumbnail.png',
      backgroundAnimated: 'https://cdn.discordapp.com/assets/profile_effects/effects/2025-05-07/farming_town/intro.png',
      idle: 'https://cdn.discordapp.com/assets/profile_effects/effects/2025-05-07/farming_town/idle_bot.png',
      videoLength: 6000,
    },
  },
  {
    id: 4,
    title: "Baker's Delight Bundle",
    type: 'right',
    originalPrice: 19.99,
    salePrice: 14.99,
    assets: {
      avatarOverlayStatic:
        'https://cdn.discordapp.com/avatar-decoration-presets/a_1953da70cb693d9a27178eca180f8cb5.png?size=300&passthrough=false',
      avatarOverlayAnimated:
        'https://cdn.discordapp.com/avatar-decoration-presets/a_1953da70cb693d9a27178eca180f8cb5.png?size=300&passthrough=true',
      backgroundStatic:
        'https://cdn.discordapp.com/assets/profile_effects/effects/2025-05-07/baking_challenge/thumbnail.png',
      backgroundAnimated:
        'https://cdn.discordapp.com/assets/profile_effects/effects/2025-05-07/baking_challenge/intro_success.png',
      idle: 'https://cdn.discordapp.com/assets/profile_effects/effects/2025-05-07/baking_challenge/idle_success.png',
      videoLength: 8000,
    },
  },
  {
    id: 6,
    title: "Gone Fishin' Bundle",
    type: 'right',
    originalPrice: 19.99,
    salePrice: 14.99,
    assets: {
      avatarOverlayStatic:
        'https://cdn.discordapp.com/avatar-decoration-presets/a_cec06be6560073121dc9e0bfd9cb536f.png?size=300&passthrough=false',
      avatarOverlayAnimated:
        'https://cdn.discordapp.com/avatar-decoration-presets/a_cec06be6560073121dc9e0bfd9cb536f.png?size=300&passthrough=true',
      backgroundStatic:
        'https://cdn.discordapp.com/assets/profile_effects/effects/2025-05-07/fishing_village/thumbnail.png',
      backgroundAnimated:
        'https://cdn.discordapp.com/assets/profile_effects/effects/2025-05-07/fishing_village/intro.png',
      idle: 'https://cdn.discordapp.com/assets/profile_effects/effects/2025-05-07/fishing_village/idle.png',
      videoLength: 9000,
    },
  },
  {
    id: 1,
    title: 'Etched in Ink Bundle',
    type: 'right',
    originalPrice: 19.99,
    salePrice: 14.99,
    assets: {
      avatarOverlayStatic:
        'https://cdn.discordapp.com/avatar-decoration-presets/a_13913a00bd9990ab4102a3bf069f0f3f.png?size=480&passthrough=false',
      avatarOverlayAnimated:
        'https://cdn.discordapp.com/avatar-decoration-presets/a_13913a00bd9990ab4102a3bf069f0f3f.png?size=80&passthrough=true',
      backgroundStatic:
        'https://cdn.discordapp.com/assets/profile_effects/effects/2024-08-08/of-ink-and-steel/thumbnail.png',
      backgroundAnimated:
        'https://cdn.discordapp.com/assets/profile_effects/effects/2024-08-08/of-ink-and-steel/intro.png',
      idle: 'https://cdn.discordapp.com/assets/profile_effects/effects/2024-08-08/of-ink-and-steel/idle.png',
      videoLength: 4000,
    },
  },
  {
    id: 2,
    title: 'Nom Kitty',
    type: 'center',
    originalPrice: 9.99,
    salePrice: 4.99,
    assets: {
      avatarOverlayStatic:
        'https://cdn.discordapp.com/avatar-decoration-presets/a_b524fa5c3f80fbea3865a5d130ab5aef.png?size=300&passthrough=false',
      avatarOverlayAnimated:
        'https://cdn.discordapp.com/avatar-decoration-presets/a_b524fa5c3f80fbea3865a5d130ab5aef.png?size=300&passthrough=true',
      backgroundStatic: 'https://via.placeholder.com/150',
      backgroundAnimated: 'https://via.placeholder.com/150',
    },
  },
  {
    id: 8,
    title: 'Bloodthirsty',
    type: 'center',
    originalPrice: 9.99,
    salePrice: 4.99,
    assets: {
      avatarOverlayStatic:
        'https://cdn.discordapp.com/avatar-decoration-presets/a_5cc3476f582a5649e64ab0a95504c4e9.png?size=480&passthrough=false',
      avatarOverlayAnimated:
        'https://cdn.discordapp.com/avatar-decoration-presets/a_5cc3476f582a5649e64ab0a95504c4e9.png?size=300&passthrough=true',
      backgroundStatic: 'https://via.placeholder.com/150',
      backgroundAnimated: 'https://via.placeholder.com/150',
    },
  },
  {
    id: 9,
    title: 'Gold Laurel Wreath',
    type: 'center',
    originalPrice: 9.99,
    salePrice: 4.99,
    assets: {
      avatarOverlayStatic:
        'https://cdn.discordapp.com/avatar-decoration-presets/a_fcb0de14da228879b455f1f1d3919749.png?size=480&passthrough=false',
      avatarOverlayAnimated:
        'https://cdn.discordapp.com/avatar-decoration-presets/a_fcb0de14da228879b455f1f1d3919749.png?size=300&passthrough=true',
      backgroundStatic: 'https://via.placeholder.com/150',
      backgroundAnimated: 'https://via.placeholder.com/150',
    },
  },
  {
    id: 10,
    title: 'Straw Hat',
    type: 'center',
    originalPrice: 9.99,
    salePrice: 4.99,
    assets: {
      avatarOverlayStatic:
        'https://cdn.discordapp.com/avatar-decoration-presets/a_3d1e6078b2e4c8865e0ad0f429d651b1.png?size=480&passthrough=false',
      avatarOverlayAnimated:
        'https://cdn.discordapp.com/avatar-decoration-presets/a_3d1e6078b2e4c8865e0ad0f429d651b1.png?size=480&passthrough=true',
      backgroundStatic: 'https://via.placeholder.com/150',
      backgroundAnimated: 'https://via.placeholder.com/150',
    },
  },
];

export default data;
