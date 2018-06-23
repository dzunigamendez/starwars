// @flow
import React from 'react';
import Ellipse from 'icons/ellipse2.svg?sprite';
import type { ChildrenArray, Node } from 'react';

type ButtonType = {
  className?: string,
  onClick?: (event: SyntheticEvent<HTMLButtonElement>) => void,
  children?: ChildrenArray<Node>
};

type IconType = {
  children: ?ChildrenArray<Node>
};

export default function Button(props: ButtonType) {
  let buttonClass = 'ellipse-button';
  if (props.className) {
    buttonClass = `${buttonClass} ${props.className}`;
  }

  return (
    <button type="button" className={buttonClass} onClick={props.onClick}>
      <Ellipse className="ellipse-button__ellipse ellipse-button__ellipse--outer" />
      <Ellipse className="ellipse-button__ellipse ellipse-button__ellipse--inner" />
      {props.children}
    </button>
  );
}

export function Icon(props: IconType) {
  return <span className="ellipse-button__icon">{props.children}</span>;
}
