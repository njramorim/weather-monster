import React from 'react';
import PropTypes from 'prop-types';
import withStyle from './style';

const Wrapper = ({ className, children }) => (
  <div className={className}>{children}</div>
);

Wrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Wrapper.displayName = 'Wrapper';

export default withStyle(Wrapper);
