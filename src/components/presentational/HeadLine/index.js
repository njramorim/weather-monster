import React from 'react';
import withStyle from './style';

type HeadLineProps = {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  align: 'left' | 'center' | 'right',
  text: string,
  className: string
};

const HeadLine = (props: HeadLineProps) => {
  const { tag: Tag, text, align, className } = props;

  return (
    <Tag className={className} align={align}>
      {text}
    </Tag>
  );
};

HeadLine.defaultProps = {
  tag: 'h1',
  align: 'center'
};

HeadLine.displayName = 'Headline';

export default withStyle(HeadLine);
