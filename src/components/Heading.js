// @flow

import React from 'react';

type HeaderType = {
  title: string,
  subtitle: string,
  align: 'left' | 'right',
  transparent?: boolean
};

function Header(props: HeaderType) {
  let className = `heading heading--${props.align}`;
  if (props.transparent) {
    className = `${className} heading--transparent`;
  }
  return (
    <div className={className}>
      <h2 className="heading__title">{props.title}</h2>
      <h3 className="heading__subtitle">{props.subtitle}</h3>
    </div>
  );
}

Header.defaultProps = {
  transparent: false
};

export default Header;
