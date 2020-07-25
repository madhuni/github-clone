import React from 'react';
import PropTypes from 'prop-types';

import './RepoStars.scss';

export default function RepoStars({ icon, count, url, classNames }) {
  return (
    <a className={`repo-stars ${classNames}`} href={url}>
      {icon}
      <span className="t-caption">{count}</span>
    </a>
  );
}

RepoStars.propTypes = {
  icon: PropTypes.node.isRequired,
  count: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  classNames: PropTypes.string,
};

RepoStars.defaultProps = {
  classNames: '',
};
