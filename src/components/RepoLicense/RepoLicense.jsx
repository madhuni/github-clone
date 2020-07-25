import React from 'react';
import PropTypes from 'prop-types';

import './RepoLicense.scss';

export default function RepoLicense({ icon, name, classNames }) {
  return (
    <span className={`repo-license ${classNames}`}>
      {icon}
      <span className="t-caption">{name}</span>
    </span>
  );
}

RepoLicense.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.string,
  classNames: PropTypes.string,
};

RepoLicense.defaultProps = {
  name: '',
  classNames: '',
};
