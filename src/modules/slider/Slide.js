// @flow

import React from 'react';
import EllipseButton, { Icon } from 'components/EllipseButton';
import Play from 'icons/play.svg?sprite';
import type { SlideType } from './types';

function Slide(props: SlideType) {
  return (
    <div className="slide">
      <img
        src={props.imageUrl}
        style={{ backgroundImage: `url(${props.imageUrl})` }}
        alt={props.name}
        className="slide__image"
      />
      <EllipseButton className="slide-play">
        <Icon>
          <Play />
        </Icon>
      </EllipseButton>
      <p className="slide__name">{props.name}</p>
    </div>
  );
}

export default Slide;
