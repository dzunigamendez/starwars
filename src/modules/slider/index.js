// @flow

import React, { Component } from 'react';
import Swiper from 'swiper';
import Heading from 'components/Heading';
import EllipseButton, { Icon } from 'components/EllipseButton';
import Left from 'icons/arrow-left.svg?sprite';
import Right from 'icons/arrow-right.svg?sprite';
import Slide from './Slide';
import type { SliderType } from './types';

class Slider extends Component<SliderType> {
  el: ?HTMLDivElement;
  swiper: ?Swiper;

  componentDidMount() {
    this.swiper = new Swiper(this.el, {
      slidesPerView: 5,
      initialSlide: 2,
      loop: true,
      centeredSlides: true,
      slideToClickedSlide: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        '499': {
          slidesPerView: 1,
          loop: true
        },
        '1023': {
          slidesPerView: 3,
          loop: true
        }
      }
    });
  }

  element = (el: ?HTMLDivElement) => {
    this.el = el;
  };

  render() {
    const { title, subtitle, backgroundUrl, data } = this.props;

    const slides = data.map(slide => (
      <div className="swiper-slide" key={slide.id}>
        <Slide {...slide} />
      </div>
    ));

    return (
      <div className="slider">
        <img
          className="slider__image"
          src={backgroundUrl}
          style={{ backgroundImage: `url("${backgroundUrl}"` }}
          alt="slider-background"
        />
        <Heading title={title} subtitle={subtitle} align="right" />

        <div className="swiper-container" ref={this.element}>
          <div className="swiper-wrapper">{slides}</div>
          <EllipseButton className="swiper-button-prev">
            <Icon>
              <Left />
            </Icon>
          </EllipseButton>
          <EllipseButton className="swiper-button-next">
            <Icon>
              <Right />
            </Icon>
          </EllipseButton>
        </div>
      </div>
    );
  }
}

export default Slider;
