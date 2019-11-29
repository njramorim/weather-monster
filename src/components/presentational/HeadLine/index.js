import React from 'react';
import PropTypes from 'prop-types';
import withStyle from './style';

const HeadLine = ({ tag: Tag, text, align, className }) => (
  <Tag className={className} align={align}>
    {text}
  </Tag>
);

HeadLine.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string
};

HeadLine.defaultProps = {
  tag: 'h1',
  align: 'center'
};

HeadLine.displayName = 'Headline';

export default withStyle(HeadLine);
