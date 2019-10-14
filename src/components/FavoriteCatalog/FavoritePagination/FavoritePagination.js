import React from 'react';
import PropTypes from 'prop-types';
import styles from './FavoritePagination.module.scss';
import ListGroup from '../../ListGroup/ListGroup';
import ListGroupItem from '../../ListGroupItem/ListGroupItem';
import Button from '../../Button/Button';

const FavoritePagination = ({
  isPrevDisabled,
  isNextDisabled,
  onUserClick
}) => {
  return (
    <ListGroup className={styles.list}>
      <div className={styles.wrapper}>
        <ListGroupItem className={styles.item}>
          <Button
            className={styles.prev}
            onClick={onUserClick}
            data-action="prev"
            disabled={isPrevDisabled}
          >
            prev
          </Button>
        </ListGroupItem>
        <ListGroupItem className={styles.item}>
          <Button
            className={styles.next}
            onClick={onUserClick}
            data-action="next"
            disabled={isNextDisabled}
          >
            next
          </Button>
        </ListGroupItem>
      </div>
    </ListGroup>
  );
};

FavoritePagination.propTypes = {
  isPrevDisabled: PropTypes.bool.isRequired,
  isNextDisabled: PropTypes.bool.isRequired,
  onUserClick: PropTypes.func.isRequired
};

export default FavoritePagination;
