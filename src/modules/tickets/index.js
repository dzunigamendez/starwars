// @flow

import React from 'react';
import Heading from 'components/Heading';

type TimeType = {
  value: string,
  label: string
};

type TicketsType = {
  backgroundUrl: string,
  title: string,
  subtitle: string,
  time: Array<TimeType>,
  cta: string
};

function Tickets(props: TicketsType) {
  const { backgroundUrl, title, subtitle, time, cta } = props;
  const boxes = time.map(box => (
    <div className="time" key={box.label}>
      <h4 className="time__value">{box.value}</h4>
      <h5 className="time__label">{box.label}</h5>
    </div>
  ));
  return (
    <section className="tickets">
      <img
        className="tickets__image"
        src={backgroundUrl}
        style={{ backgroundImage: `url("${backgroundUrl}"` }}
        alt="slider-background"
      />
      <Heading title={title} subtitle={subtitle} align="left" />
      <div className="tickets__container">
        <div className="tickets__time">{boxes}</div>
        <a href="#" className="tickets__cta">
          {cta}
        </a>
      </div>
    </section>
  );
}

export default Tickets;
