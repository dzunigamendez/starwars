// @flow
import React, { Component } from 'react';
import Swiper from 'swiper';
import Heading from 'components/Heading';
import EllipseButton, { Icon } from 'components/EllipseButton';
import Left from 'icons/arrow-left.svg?sprite';
import Right from 'icons/arrow-right.svg?sprite';
import Pod from './Pod';
import type { CastType } from './types';

class Cast extends Component<CastType> {
  el: ?HTMLDivElement;
  swiper: ?Swiper;

  element = (el: ?HTMLDivElement) => {
    this.el = el;
  };

  handlePrev = () => {
    this.swiper.slidePrev();
  };

  handleNext = () => {
    this.swiper.slideNext();
  };

  componentDidMount() {
    this.swiper = new Swiper(this.el, {
      speed: 600,
      slidesPerView: 3,
      loopAdditionalSlides: 3,
      spaceBetween: 40,
      loop: true,
      slideToClickedSlide: true,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      breakpoints: {
        '600': {
          slidesPerView: 1,
          loop: true,
          spaceBetween: 10
        },
        '800': {
          slidesPerView: 2,
          loop: true,
          spaceBetween: 10
        },
        '1200': {
          slidesPerView: 3,
          loop: true,
          spaceBetween: 30
        }
      }
    });
  }

  render() {
    const { backgroundUrl, title, subtitle, cast } = this.props;

    const slides = cast.map(pod => (
      <div className="swiper-slide" key={pod.id}>
        <Pod
          id={pod.id}
          imageUrl={pod.imageUrl}
          name={pod.name}
          character={pod.character}
        />
      </div>
    ));

    return (
      <section className="cast">
        <img
          className="cast__image"
          src={backgroundUrl}
          style={{ backgroundImage: `url("${backgroundUrl}"` }}
          alt={subtitle}
        />
        <Heading title={title} subtitle={subtitle} align="right" transparent />
        <div className="cast__container">
          <div className="swiper-container" ref={this.element}>
            <div className="swiper-wrapper">{slides}</div>
          </div>
          <EllipseButton
            className="swiper-button-prev"
            onClick={this.handlePrev}
          >
            <Icon>
              <Left />
            </Icon>
          </EllipseButton>
          <EllipseButton
            className="swiper-button-next"
            onClick={this.handleNext}
          >
            <Icon>
              <Right />
            </Icon>
          </EllipseButton>
        </div>
      </section>
    );
  }
}

export default Cast;
