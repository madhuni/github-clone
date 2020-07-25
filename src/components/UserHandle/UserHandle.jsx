import React from 'react';
import PropTypes from 'prop-types';

import './UserHandle.scss';

export default function UserHandle({ userHandle, classNames }) {
  return <h6 className={`user-handle t-h6 ${classNames}`}>{userHandle}</h6>;
}

UserHandle.propTypes = {
  userHandle: PropTypes.string.isRequired,
  classNames: PropTypes.string,
};

UserHandle.defaultProps = {
  classNames: '',
};
