import React from 'react';
import PropTypes from 'prop-types';
import './ListGroupItem.scss';

const ListGroupItem = ({ children, className, ...attr }) => {
  // eslint-disable-next-line no-console
  console.log('render ===== LIst Item');
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
