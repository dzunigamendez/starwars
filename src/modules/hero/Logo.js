//@flow
import React from 'react';
import EllipseImage from 'components/EllipseImage';
import type { LogoType } from './types';

function Logo(props: LogoType) {
  return (
    <EllipseImage className="hero-logo" url={props.url} alt={props.alt}>
      <button className="ellipse-image__animation hero-logo__scroll">
        {props.scrollLabel}
      </button>
    </EllipseImage>
  );
}

export default Logo;
