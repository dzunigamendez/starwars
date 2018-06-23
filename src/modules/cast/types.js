// @flow

export type PodType = {
  id: string,
  imageUrl: string,
  name: string,
  character: string
};

export type CastType = {
  backgroundUrl: string,
  title: string,
  subtitle: string,
  cast: Array<PodType>
};
