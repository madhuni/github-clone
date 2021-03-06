import React from 'react';
import PropTypes from 'prop-types';

import './RepoForks.scss';

export default function RepoForks({ icon, count, url, classNames }) {
  return (
    <a className={`repo-forks ${classNames}`} href={url}>
      {icon}
      <span className="t-caption">{count}</span>
    </a>
  );
}

RepoForks.propTypes = {
  icon: PropTypes.node.isRequired,
  count: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  classNames: PropTypes.string,
};

RepoForks.defaultProps = {
  classNames: '',
};
