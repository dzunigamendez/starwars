// @flow

import React, { Fragment } from 'react';
import Heading from 'components/Heading';
import EllipseImage from 'components/EllipseImage';

type MetaType = {
  label: string,
  value: string
};

type SynopsisType = {
  title: string,
  subtitle: string,
  backgroundUrl: string,
  info: {
    imageUrl: string,
    alt: string,
    meta: Array<MetaType>
  },
  summary: {
    imageUrl: string,
    alt: string,
    description: string
  }
};

function Synopsis(props: SynopsisType) {
  const meta = props.info.meta.map(item => (
    <Fragment key={item.label}>
      <dt>{item.label}</dt>
      <dd>{item.value}</dd>
    </Fragment>
  ));

  return (
    <div
      className="synopsis"
      style={{ backgroundImage: `url(${props.backgroundUrl})` }}
    >
      <Heading title={props.title} subtitle={props.subtitle} align="left" />
      <div className="synopsis__container">
        <div className="synopsis__inner">
          <div className="synopsis__info">
            <dl>{meta}</dl>
          </div>
          <div className="synopsis__logo">
            <EllipseImage
              className="synopsis-logo"
              url={props.info.imageUrl}
              alt={props.info.alt}
            />
          </div>
          <div className="synopsis__info synopsis__info--image">
            <img
              className="synopsis__info-image"
              src={props.summary.imageUrl}
              alt={props.summary.alt}
            />
            <p>{props.summary.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Synopsis;
