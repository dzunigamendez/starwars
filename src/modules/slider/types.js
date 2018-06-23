// @flow

export type SlideType = {
  id: number,
  name: string,
  imageUrl: string
};

export type SliderType = {
  title: string,
  subtitle: string,
  backgroundUrl: string,
  data: Array<SlideType>
};
