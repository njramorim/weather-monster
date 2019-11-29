import React from 'react';
import PropTypes from 'prop-types';
import withStyle from './style';

const SimpleText = ({ className, text }) => <p className={className}>{text}</p>;

SimpleText.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
};

SimpleText.displayName = 'SimpleText';

export { SimpleText as PureSimpleText };
export default withStyle(SimpleText);
