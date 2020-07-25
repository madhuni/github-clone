import React from 'react';
import PropTypes from 'prop-types';

import './RepoDetails.scss';

export default function RepoDetails({ name, url, description, classNames }) {
  return (
    <div className={`repo-details ${classNames}`}>
      <h6 className="repo__name t-h6">
        <a className="repo__url" href={url}>
          {name}
        </a>
      </h6>
      {description && <p className="repo__description">{description}</p>}
    </div>
  );
}

RepoDetails.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string,
  classNames: PropTypes.string,
};

RepoDetails.defaultProps = {
  description: '',
  classNames: '',
};
