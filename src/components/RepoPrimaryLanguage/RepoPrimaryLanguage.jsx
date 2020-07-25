import React from 'react';
import PropTypes from 'prop-types';

import './RepoPrimaryLanguage.scss';

export default function RepoPrimaryLanguage({ languageColor, language }) {
  const styles = { backgroundColor: languageColor };
  return (
    <span className="repo-primary-language t-caption">
      <span className="repo-primary-language__color" style={styles} />
      <span className="repo-primary-language__name">{language}</span>
    </span>
  );
}

RepoPrimaryLanguage.propTypes = {
  languageColor: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};
