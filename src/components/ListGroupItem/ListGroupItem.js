import React from 'react';
import PropTypes from 'prop-types';
import './ListGroupItem.scss';

const ListGroupItem = ({ children, className, ...attr }) => {
  return (
    <li className={className} {...attr}>
      {children}
    </li>
  );
};

export default ListGroupItem;

ListGroupItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

ListGroupItem.defaultProps = {
  children: null,
  className: 'list-group-item'
};
