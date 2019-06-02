import React from 'react';
import PropTypes from 'prop-types';
import './ListGroupItem.scss';

const ListGroupItem = ({ children, className, tag: Tag, ...attr }) => {
  // eslint-disable-next-line no-console
  console.log('render ===== LIst Item');
  return (
    <Tag className={className} {...attr}>
      {children}
    </Tag>
  );
};

export default ListGroupItem;

ListGroupItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

ListGroupItem.defaultProps = {
  children: null,
  className: 'list-group-item',
  tag: 'li'
};
