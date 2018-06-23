// @flow
import React from 'react';
import type { MenuType } from './types';

function Menu(props: { data: Array<MenuType> }) {
  const items = props.data.map(item => (
    <li className="hero-menu__item" key={item.url}>
      <a href={item.url} className="hero-menu__link">
        {item.label}
      </a>
    </li>
  ));

  return (
    <div className="hero-menu">
      <ul className="hero-menu__list">{items}</ul>
    </div>
  );
}

export default Menu;
