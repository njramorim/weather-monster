// @flow
import React from 'react';
import type { Node } from 'react';
import withStyle from './style';

type WrapperProps = {
  children: Node,
  className: string
};

const Wrapper = (props: WrapperProps) => (
  <div className={props.className}>{props.children}</div>
);

Wrapper.displayName = 'Wrapper';

export default withStyle(Wrapper);
