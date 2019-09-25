import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import styles from './ProductList.module.scss';
import ListGroup from '../ListGroup/ListGroup';
import ListGroupItem from '../ListGroupItem/ListGroupItem';

const ProductList = ({ data, ProductCard }) => {
  // eslint-disable-next-line no-console
  console.log('render ===== ProductList');
  const goods = data.toJS().map(elem => {
    return (
      <ListGroupItem className={styles.item} key={elem.id}>
        <ProductCard data={elem} />
      </ListGroupItem>
    );
  });

  const EmptyList = () => {
    return (
      <ListGroupItem className={styles.itemEmpty}>
        <p className={styles.empty}>No results found.</p>
      </ListGroupItem>
    );
  };

  const isEmpty = goods.length === 0;

  return (
    <ListGroup className={styles.list}>
      {isEmpty ? <EmptyList /> : goods}
    </ListGroup>
  );
};

export default ProductList;

ProductList.propTypes = {
  ProductCard: PropTypes.elementType.isRequired,
  data: PropTypes.instanceOf(Immutable.List).isRequired
};
