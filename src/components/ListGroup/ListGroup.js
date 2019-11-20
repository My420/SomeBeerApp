import React from 'react';
import PropTypes from 'prop-types';
import './listgroup.scss';

const ListGroup = ({ children, className, tag: Tag, ...attr }) => {
  return (
    <Tag className={className} {...attr}>
      {children}
    </Tag>
  );
};

export default ListGroup;

ListGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

ListGroup.defaultProps = {
  children: null,
  className: 'list-group',
  tag: 'ul'
};
