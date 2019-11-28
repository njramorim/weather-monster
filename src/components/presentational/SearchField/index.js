import React from 'react';
import PropTypes from 'prop-types';
import withStyle from './style';

let timer = null;

const SearchField = ({ className, onCitySearch }) => {
  const showSearchResults = value => {
    clearTimeout(timer);
    onCitySearch(value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    showSearchResults(e.target[0].value);
  };

  const handleInputChange = ({ target: { value } }) => showSearchResults(value);

  const handleInputFocus = async ({ target: { value } }) =>
    !value
      ? (timer = setTimeout(() => onCitySearch(' ', false), 1000))
      : showSearchResults(value);

  const handleInputFocusOut = () => clearTimeout(timer);

  return (
    <form className={className} onSubmit={handleFormSubmit} autoComplete="off">
      <input
        type="search"
        name="search"
        placeholder="Type the name of a city"
        onKeyUp={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputFocusOut}
      />
    </form>
  );
};

SearchField.propTypes = {
  className: PropTypes.string,
  onCitySearch: PropTypes.func
};

SearchField.defaultProps = {
  searchString: 'Search',
  onCitySearch: _ => _
};

SearchField.displayName = 'SearchField';

export default withStyle(SearchField);
