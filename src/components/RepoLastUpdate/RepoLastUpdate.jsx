import React from 'react';
import PropTypes from 'prop-types';

import './RepoLastUpdate.scss';

export default function RepoLastUpdate({ lastUpdateDateString }) {
  return (
    <span className="repo-last-update t-caption">
      Updated on {lastUpdateDateString}
    </span>
  );
}

RepoLastUpdate.propTypes = {
  lastUpdateDateString: PropTypes.string.isRequired,
};
