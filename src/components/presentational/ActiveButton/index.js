import React from 'react';
import PropTypes from 'prop-types';
import withStyle from './style';

const ActiveButton = ({ className, id, onChange, isChecked }) => (
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

ActiveButton.propTypes = {
  className: PropTypes.string,
  id: PropTypes.number,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func
};

ActiveButton.defaultProps = {
  onChange: _ => _,
  isChecked: false
};

ActiveButton.displayName = 'ActiveButton';

export { ActiveButton as PureActiveButton };
export default withStyle(ActiveButton);
