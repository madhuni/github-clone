import React from 'react';
import PropTypes from 'prop-types';

import UserName from '../UserName/UserName';
import UserHandle from '../UserHandle/UserHandle';

import './UserInfo.scss';

export default function UserInfo({ userName, userHandle, classNames }) {
  return (
    <div className={`user-info ${classNames}`}>
      <UserName userName={userName} />
      <UserHandle userHandle={userHandle} />
    </div>
  );
}

UserInfo.propTypes = {
  userName: PropTypes.string.isRequired,
  userHandle: PropTypes.string.isRequired,
  classNames: PropTypes.string,
};

UserInfo.defaultProps = {
  classNames: '',
};
