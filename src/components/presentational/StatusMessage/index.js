import React from 'react';
import PropTypes from 'prop-types';
import withStyle from './style';

const StatusMessage = ({ className, message }) => (
  <aside className={className}>
    <p>{message}</p>
  </aside>
);

StatusMessage.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf('danger', 'alert', 'success'),
  message: PropTypes.string
};

StatusMessage.defaultProps = {
  type: 'danger'
};

StatusMessage.displayName = 'StatusMessage';

export default withStyle(StatusMessage);
