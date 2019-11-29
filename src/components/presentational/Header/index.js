import React from 'react';
import PropTypes from 'prop-types';
import withStyle from './style';

const Header = ({ className }) => (
  <header className={className}>
    <h1>Weather Monster</h1>
  </header>
);

Header.propTypes = {
  className: PropTypes.string
};

export { Header as PureHeader };
export default withStyle(Header);
