import React from 'react';
import PropTypes from 'prop-types';
import './Container.scss';

const Container = ({ children, className }) => {
  // eslint-disable-next-line no-console
  console.log('render ===== container');
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
