import React from 'react';
import { Map } from 'immutable';
import PropTypes from 'prop-types';
import styles from './CartButton.module.scss';
import Button from '../Button/Button';
import IconCartSvg from '../Icons/IconCartSvg/IconCartSvg';
import withCart from '../HOC/CartWrapper/CartWrapper';

export const CartButton = ({
  itemData,
  cartData,
  addItemToCart,
  deleteItemFromCart
}) => {
  // eslint-disable-next-line no-console
  console.log('render ===== CartButton');

  const { id } = itemData;
  const isItemOnCart = cartData.has(id);
  const onCartButtonClick = () => {
    if (isItemOnCart) {
      deleteItemFromCart(id);
    } else {
      addItemToCart({ ...itemData });
    }
  };

  return (
    <Button className={styles.cartButton} onClick={onCartButtonClick}>
      {' '}
      <IconCartSvg
        containerClass={styles.cartContainer}
        pathClass={styles.cartPath}
      />
      <span className={styles.cartText}>
        {isItemOnCart ? 'Delete' : 'Add to Cart'}
      </span>
    </Button>
  );
};

CartButton.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  itemData: PropTypes.object.isRequired, // from parent component
  cartData: PropTypes.instanceOf(Map).isRequired, // from HOC
  addItemToCart: PropTypes.func.isRequired, // from HOC
  deleteItemFromCart: PropTypes.func.isRequired // from HOC
};

export default withCart(CartButton);
