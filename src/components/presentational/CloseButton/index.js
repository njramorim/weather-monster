import React from 'react';
import PropTypes from 'prop-types';
import withStyle from './style';

const CloseButton = ({ text, disabled, onClick, className, cityId }) => (
  <button
    className={className}
    disabled={disabled}
    onClick={({ target }) => onClick(Number(target.value))}
    value={cityId}
  >
    {text}
  </button>
);

CloseButton.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  cityId: PropTypes.number,
  className: PropTypes.string
};

CloseButton.defaultProps = {
  text: 'Close',
  disabled: false,
  onClick: _ => _
};

CloseButton.displayName = 'CloseButton';

export default withStyle(CloseButton);
