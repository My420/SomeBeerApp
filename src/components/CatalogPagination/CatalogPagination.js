import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CatalogPagination.module.scss';
import ListGroup from '../ListGroup/ListGroup';
import ListGroupItem from '../ListGroupItem/ListGroupItem';
import createOptions from '../../utils/createOptions';
import { PAGE } from '../../utils/constants';

const CatalogPagination = ({ options }) => {
  const page = options[PAGE];
  const prevPage = `${+page - 1}`;
  const nextPage = `${+page + 1}`;
  const isPrevDisabled = prevPage < 1;
  const prevLink = createOptions({ ...options, [PAGE]: prevPage });
  const nextLink = createOptions({ ...options, [PAGE]: nextPage });
  return (
    <ListGroup className={styles.list}>
      <ListGroupItem className={styles.item}>
        {!isPrevDisabled ? (
          <Link to={prevLink} className={styles.prev} disabled={prevPage < 1}>
            Prev
          </Link>
        ) : (
          <p className={styles.prevDesabled}>Prev</p>
        )}
      </ListGroupItem>
      <ListGroupItem className={styles.item}>
        <Link to={nextLink} className={styles.next}>
          Next
        </Link>
      </ListGroupItem>
    </ListGroup>
  );
};

export default CatalogPagination;