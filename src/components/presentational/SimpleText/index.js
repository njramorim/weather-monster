import React from 'react';
import withStyle from './style';

type SimpleTextProps = {
  text: string,
  className: string
};

const SimpleText = (props: SimpleTextProps) => (
  <p className={props.className}>{props.text}</p>
);

SimpleText.displayName = 'SimpleText';

export default withStyle(SimpleText);
