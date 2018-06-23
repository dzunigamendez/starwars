// @flow
export type MenuType = {
  label: string,
  url: string
};

export type LogoType = {
  url: string,
  alt: string,
  scrollLabel: string
};

export type HeroType = {
  backgroundUrl: string,
  logo: LogoType,
  scrollLabel: string,
  menu: Array<MenuType>
};
