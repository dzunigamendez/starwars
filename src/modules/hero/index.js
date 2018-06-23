import Logo from './Logo';
import Menu from './Menu';
import type { HeroType } from './types';

function Hero(props: HeroType) {
  return (
    <div className="hero">
      <img
        src={props.backgroundUrl}
        alt="hero"
        className="hero__image"
        style={{ backgroundImage: `url("${props.backgroundUrl}")` }}
      />
      <div className="hero__container">
        <div className="hero__logo">
          <Logo
            url={props.logo.url}
            alt={props.logo.alt}
            scrollLabel={props.logo.scrollLabel}
          />
        </div>
        <div className="hero__menu">
          <Menu data={props.menu} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
