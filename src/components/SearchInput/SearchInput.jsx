import React from 'react';
import PropTypes from 'prop-types';

import './SearchInput.scss';

export default function SearchInput({ placeholder, onKeyUpHandler }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onKeyUp={onKeyUpHandler}
      className="search-input t-body2"
    />
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  onKeyUpHandler: PropTypes.func.isRequired,
};

SearchInput.defaultProps = {
  placeholder: 'Type your search input...',
};
