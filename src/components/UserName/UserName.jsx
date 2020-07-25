import React from 'react';
import PropTypes from 'prop-types';

import './UserName.scss';

export default function UserName({ userName, classNames }) {
  return <h5 className={`user-name t-h5 ${classNames}`}>{userName}</h5>;
}

UserName.propTypes = {
  userName: PropTypes.string.isRequired,
  classNames: PropTypes.string,
};

UserName.defaultProps = {
  classNames: '',
};
