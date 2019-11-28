// @flow
import React from 'react';
import withStyle from './style';

type StatusMessageProps = {
  className: string,
  type: 'danger' | 'alert' | 'success',
  message: string
};

const StatusMessage = (props: StatusMessageProps) => {
  const { className, message } = props;
  return (
    <aside className={className}>
      <p>{message}</p>
    </aside>
  );
};

StatusMessage.defaultProps = {
  type: 'danger'
};

StatusMessage.displayName = 'StatusMessage';

export default withStyle(StatusMessage);
