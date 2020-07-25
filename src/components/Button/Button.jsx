import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

export default function Button({
  children,
  isIcon,
  icon,
  disabled = false,
  clickHandler,
  classNames = '',
}) {
  const onClickHandler = (e) => !disabled && clickHandler(e);

  return (
    <button
      className={`btn t-button ${classNames}`}
      type="button"
      onClick={onClickHandler}
    >
      {isIcon && icon}
      <span className="btn__name">{children}</span>
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  isIcon: PropTypes.bool,
  icon: PropTypes.node,
  disabled: PropTypes.bool,
  clickHandler: PropTypes.func,
  classNames: PropTypes.string,
};

Button.defaultProps = {
  isIcon: false,
  icon: null,
  disabled: false,
  clickHandler: null,
  classNames: '',
};
