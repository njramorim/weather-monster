// @flow
import React from 'react';
import withStyle from './style';

type HeaderProps = {
  className: string
};

const Header = (props: HeaderProps) => {
  const { className } = props;
  return (
    <header className={className}>
      <h1>Weather Monster</h1>
    </header>
  );
};

export default withStyle(Header);
