import React from 'react';
import PropTypes from 'prop-types';

import './UserBio.scss';

export default function UserBio({ profileBio, classNames }) {
  return (
    <div className={`user-profile-bio t-body1 ${classNames}`}>{profileBio}</div>
  );
}

UserBio.propTypes = {
  profileBio: PropTypes.string.isRequired,
  classNames: PropTypes.string,
};

UserBio.defaultProps = {
  classNames: '',
};
