import React from 'react';
import PropTypes from 'prop-types';

import './UserMetaData.scss';

export default function UserMetaData({ type, isIcon, icon, value, url, text }) {
  const renderSwitch = (key) => {
    switch (key) {
      case 'link':
        return (
          <a className="user-meta-data__link" href={url}>
            {isIcon && icon}
            {value && <strong>{value}</strong>}
            <span>{text}</span>
          </a>
        );
      case 'text':
      default:
        return (
          <span className="user-meta-data__text">
            {isIcon && icon}
            {value && <strong>{value}</strong>}
            <span>{text}</span>
          </span>
        );
    }
  };

  return <div className="user-meta-data">{renderSwitch(type)}</div>;
}

UserMetaData.propTypes = {
  type: PropTypes.oneOf(['link', 'text']).isRequired,
  isIcon: PropTypes.bool,
  icon: PropTypes.node,
  value: PropTypes.number,
  url: PropTypes.string,
  text: PropTypes.string.isRequired,
};

UserMetaData.defaultProps = {
  isIcon: false,
  icon: null,
  value: undefined,
  url: '#',
};
