import React from 'react';
import PropTypes from 'prop-types';
import withStyle from './style';

const SearchField = ({
  className,
  onSubmit,
  onChange,
  onFocus,
  onFocusOut
}) => {
  return (
    <form className={className} onSubmit={onSubmit} autoComplete="off">
      <input
        type="search"
        name="search"
        placeholder="Type the name of a city"
        onKeyUp={onChange}
        onFocus={onFocus}
        onBlur={onFocusOut}
      />
    </form>
  );
};

SearchField.propTypes = {
  className: PropTypes.string,
  onCitySearch: PropTypes.func,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onFocusOut: PropTypes.func
};

SearchField.displayName = 'SearchField';

export { SearchField as PureSearchField };
export default withStyle(SearchField);
