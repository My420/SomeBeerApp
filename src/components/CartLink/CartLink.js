import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import styles from './CartLink.module.scss';
import withCart from '../HOC/CartWrapper/CartWrapper';
import { CART } from '../../utils/constants';

export const CartLink = ({ cartData }) => {
  const itemAmount = cartData.size;

  return (
    <span className={styles.container}>
      <span className={styles.amount}>{itemAmount}</span>
      <span className={styles.name}>{CART}</span>
    </span>
  );
};

CartLink.propTypes = {
  cartData: PropTypes.instanceOf(Map).isRequired
};

export default withCart(CartLink);
