// @flow

import React from 'react';
import EllipseImage from 'components/EllipseImage';
import type { PodType } from './types';

function Pod(props: PodType) {
  return (
    <figure className="pod">
      <EllipseImage
        url={props.imageUrl}
        alt={props.name}
        className="pod__image"
      />
      <figcaption className="pod__info">
        <p className="pod__name">{props.name}</p>
        <p className="pod__character">{props.character}</p>
      </figcaption>
    </figure>
  );
}

export default Pod;
