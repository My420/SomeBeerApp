import React from 'react';
import PropTypes from 'prop-types';
import './Container.scss';

const Container = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

Container.defaultProps = {
  children: null,
  className: 'container'
};

export default Container;
