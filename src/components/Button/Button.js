import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({
  children,
  className,
  disabled,
  activeStyle,
  onClick,
  ...attr
}) => {
  const buttonClassName = `${className} ${activeStyle}`;
  return (
    <button
      type="button"
      className={buttonClassName}
      disabled={disabled}
      onClick={onClick}
      {...attr}
    >
      {' '}
      {children}{' '}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  activeStyle: PropTypes.string
};

Button.defaultProps = {
  children: 'button',
  className: 'defaultButton',
  disabled: false,
  onClick: () => {},
  activeStyle: ''
};

export default Button;
