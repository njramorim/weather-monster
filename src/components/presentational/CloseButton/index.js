// @flow
import React from 'react';
import withStyle from './style';

type CloseButtonProps = {
  text: string,
  disabled: boolean,
  onClick: Function,
  cityId: number,
  className: string
};

const CloseButton = (props: CloseButtonProps) => {
  const { text, disabled, onClick, className, cityId } = props;

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={({ target }) => onClick(Number(target.value))}
      value={cityId}
    >
      {text}
    </button>
  );
};

CloseButton.defaultProps = {
  text: 'Close',
  disabled: false,
  onClick: _ => _
};

CloseButton.displayName = 'CloseButton';

export default withStyle(CloseButton);
