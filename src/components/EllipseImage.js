// @flow
import React from 'react';
import Ellipse from 'icons/ellipse.svg?sprite';
import type { ChildrenArray } from 'react';

type ImageType = {
  className?: string,
  url: string,
  alt?: string,
  children?: ChildrenArray<any>
};

function EllipseImage(props: ImageType) {
  let imageClass = 'ellipse-image';
  if (props.className) {
    imageClass = `${imageClass} ${props.className}`;
  }

  return (
    <div className={imageClass}>
      {props.children}
      <Ellipse className="ellipse-image__ellipse ellipse-image__ellipse--outer" />
      <Ellipse className="ellipse-image__ellipse ellipse-image__ellipse--inner" />
      <img className="ellipse-image__image" src={props.url} alt={props.alt} />
    </div>
  );
}

export default EllipseImage;
