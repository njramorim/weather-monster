// @flow

import React from 'react';
import withStyle from './style';

type ActiveButtonProps = {
  className: string,
  id: number,
  isChecked: boolean,
  onChange: Function
};

const ActiveButton = (props: ActiveButtonProps) => {
  const { className, id, onChange, isChecked } = props;

  return (
    <div className={className}>
      <label className="clickArea" htmlFor={id} name={id}>
        Select
      </label>
      <input
        name={id}
        id={id}
        value={id}
        type="radio"
        onChange={onChange}
        defaultChecked={isChecked}
        className="hideField"
      />
      <span className="inputStyle"></span>
    </div>
  );
};

ActiveButton.defaultProps = {
  onChange: _ => _,
  isChecked: false
};

ActiveButton.displayName = 'ActiveButton';

export default withStyle(ActiveButton);
