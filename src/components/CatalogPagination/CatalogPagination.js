import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './CatalogPagination.module.scss';
import ListGroup from '../ListGroup/ListGroup';
import ListGroupItem from '../ListGroupItem/ListGroupItem';
import createOptions from '../../utils/createOptions';
import {
  ABV_LESS_PROP,
  ABV_MORE_PROP,
  IBU_LESS_PROP,
  IBU_MORE_PROP,
  EBC_LESS_PROP,
  EBC_MORE_PROP,
  PAGE,
  BEER_NAME_PROP
} from '../../utils/constants';

const CatalogPagination = ({ options }) => {
  const page = options[PAGE];
  const prevPage = `${+page - 1}`;
  const nextPage = `${+page + 1}`;
  const isPrevDisabled = prevPage < 1;
  const prevLink = createOptions({ ...options, [PAGE]: prevPage });
  const nextLink = createOptions({ ...options, [PAGE]: nextPage });
  return (
    <ListGroup className={styles.list}>
      <div className={styles.wrapper}>
        <ListGroupItem className={styles.item}>
          {!isPrevDisabled ? (
            <Link to={prevLink} className={styles.prev} disabled={prevPage < 1}>
              prev
            </Link>
          ) : (
            <p className={styles.prevDisabled}>prev</p>
          )}
        </ListGroupItem>
        <ListGroupItem className={styles.item}>
          <Link to={nextLink} className={styles.next}>
            next
          </Link>
        </ListGroupItem>
      </div>
    </ListGroup>
  );
};

CatalogPagination.propTypes = {
  options: PropTypes.shape({
    [PAGE]: PropTypes.string.isRequired,
    [BEER_NAME_PROP]: PropTypes.string.isRequired,
    [ABV_LESS_PROP]: PropTypes.string.isRequired,
    [ABV_MORE_PROP]: PropTypes.string.isRequired,
    [IBU_LESS_PROP]: PropTypes.string.isRequired,
    [IBU_MORE_PROP]: PropTypes.string.isRequired,
    [EBC_LESS_PROP]: PropTypes.string.isRequired,
    [EBC_MORE_PROP]: PropTypes.string.isRequired
  }).isRequired
};

export default CatalogPagination;
