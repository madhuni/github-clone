import React from 'react';
import PropTypes from 'prop-types';

import './UserMetaData.scss';

export default function UserMetaData({
  type,
  isIcon,
  icon,
  value,
  url,
  supportingText,
}) {
  const renderSwitch = (key) => {
    switch (key) {
      case 'link':
        return (
          <a className="user-meta-data__link" href={url}>
            {isIcon && icon}
            <strong>{value}</strong>
            <span>{supportingText}</span>
          </a>
        );
      case 'text':
      default:
        return (
          <span className="user-meta-data__text">
            {isIcon && icon}
            <strong>{value}</strong>
            <span>{supportingText}</span>
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
  value: PropTypes.string.isRequired,
  url: PropTypes.string,
  supportingText: PropTypes.string.isRequired,
};

UserMetaData.defaultProps = {
  isIcon: false,
  icon: null,
  url: '#',
};
