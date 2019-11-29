import React from 'react';
import PropTypes from 'prop-types';
import SearchField from '../presentational/SearchField';

let timer = null;

class SearchFieldContainer extends React.PureComponent {
  static propTypes = {
    onCitySearch: PropTypes.func
  };

  showSearchResults = value => {
    clearTimeout(timer);
    this.props.onCitySearch(value);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.showSearchResults(e.target[0].value);
  };

  handleChange = ({ target: { value } }) => this.showSearchResults(value);

  handleFocus = async ({ target: { value } }) =>
    !value
      ? (timer = setTimeout(() => this.props.onCitySearch(' ', false), 1000))
      : this.showSearchResults(value);

  handleFocusOut = () => clearTimeout(timer);

  render() {
    return (
      <SearchField
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        onFocus={this.handleFocus}
        onFocusOut={this.handleFocusOut}
      />
    );
  }
}

SearchFieldContainer.displayName = 'SearchFieldContainer';

export default SearchFieldContainer;
