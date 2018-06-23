// @flow
import React from 'react';
import Navbar from 'modules/navbar';
import Hero from 'modules/hero';
import Slider from 'modules/slider';
import Synopsis from 'modules/synopsis';
import Cast from 'modules/cast';
import Tickets from 'modules/tickets';

import heroUrl from 'images/hero.png';
import logoUrl from 'images/starwars.png';

import sliderUrl from 'images/slider-bg.png';
import slide1Url from 'images/slide1.png';
import slide2Url from 'images/slide2.png';
import slide3Url from 'images/slide3.png';
import slide4Url from 'images/slide4.png';
import slide5Url from 'images/slide5.png';

import synopsisUrl from 'images/synopsis-bg.png';
import fighterUrl from 'images/tie-fighter.png';
import falconUrl from 'images/falcon.png';

import castUrl from 'images/cast-bg.png';
import hanSoloUrl from 'images/han-solo.png';
import lukeUrl from 'images/luke.png';
import finnUrl from 'images/finn.png';

import ticketsUrl from 'images/tickets-bg.png';

const hero = {
  backgroundUrl: heroUrl,
  logo: {
    url: logoUrl,
    alt: 'starwars',
    scrollLabel: 'scroll to explore'
  },
  menu: [
    { label: 'Home', url: '/home' },
    { label: 'Videos', url: '/videos' },
    { label: 'Synopsis', url: '/synopsis' },
    { label: 'Cast', url: '/cast' },
    { label: 'Tickets', url: '/tickets' }
  ]
};

const slider = {
  title: '01',
  subtitle: 'Videos',
  backgroundUrl: sliderUrl,
  slides: [
    { id: 1, name: 'Slide 1', imageUrl: slide1Url },
    { id: 2, name: 'Slide 2', imageUrl: slide2Url },
    {
      id: 3,
      name: 'Star Wars: The Force Awakens Trailer (Official)',
      imageUrl: slide3Url
    },
    { id: 4, name: 'Slide 4', imageUrl: slide4Url },
    { id: 5, name: 'Slide 5', imageUrl: slide5Url }
  ]
};

const synopsis = {
  title: '02',
  subtitle: 'Synopsis',
  backgroundUrl: synopsisUrl,
  info: {
    imageUrl: fighterUrl,
    alt: 'Tie Fighter',
    meta: [
      { label: 'Release Date', value: '17 Dec 15 (UK)' },
      { label: 'Director', value: 'J.J ABRAMS' },
      { label: 'Running Time', value: '2h 16m' },
      { label: 'Film Series', value: '17 Dec 15 (UK)' },
      { label: 'Music Composed', value: 'John Williams' }
    ]
  },
  summary: {
    imageUrl: falconUrl,
    alt: 'Falcon',
    description:
      'Thirty years after defeating the Galactic Empire, Han Solo (Harrison Ford) and his allies face a new threat from the evil Kylo Ren (Adam Driver) and his armyof Stormtroopers.'
  }
};

const cast = {
  title: '03',
  subtitle: 'Cast',
  backgroundUrl: castUrl,
  cast: [
    {
      id: 'han-solo',
      imageUrl: hanSoloUrl,
      name: 'Harrison Ford',
      character: 'Han Solo'
    },
    {
      id: 'luke',
      imageUrl: lukeUrl,
      name: 'Mark Hamill',
      character: 'Luke Skywalker'
    },
    {
      id: 'finn',
      imageUrl: finnUrl,
      name: 'John Boyega',
      character: 'Finn'
    }
  ]
};

const tickets = {
  title: '04',
  subtitle: 'Tickets',
  backgroundUrl: ticketsUrl,
  time: [
    { value: '01', label: 'days' },
    { value: '07', label: 'hours' },
    { value: '10', label: 'mins' }
  ],
  cta: 'Get Tickets'
};

function Index() {
  return (
    <section>
      <Navbar />
      <Hero
        backgroundUrl={hero.backgroundUrl}
        logo={hero.logo}
        menu={hero.menu}
      />
      <Slider
        title={slider.title}
        subtitle={slider.subtitle}
        backgroundUrl={slider.backgroundUrl}
        data={slider.slides}
      />
      <Synopsis
        backgroundUrl={synopsis.backgroundUrl}
        title={synopsis.title}
        subtitle={synopsis.subtitle}
        info={synopsis.info}
        summary={synopsis.summary}
      />
      <div className="bg-wrapper">
        <Cast
          backgroundUrl={cast.backgroundUrl}
          title={cast.title}
          subtitle={cast.subtitle}
          cast={cast.cast}
        />
        <Tickets
          title={tickets.title}
          subtitle={tickets.subtitle}
          backgroundUrl={tickets.backgroundUrl}
          time={tickets.time}
          cta={tickets.cta}
        />
      </div>
    </section>
  );
}

export default Index;
