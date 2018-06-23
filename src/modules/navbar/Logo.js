// @flow
import React from 'react';
import Starwars from 'icons/starwars.svg?sprite';

function Logo() {
  return (
    <div className="logo">
      <Starwars className="logo__image" />
    </div>
  );
}

export default Logo;
