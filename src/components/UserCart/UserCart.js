import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import styles from './UserCart.module.scss';
import withCart from '../HOC/CartWrapper/CartWrapper';
import ListGroup from '../ListGroup/ListGroup';
import ListGroupItem from '../ListGroupItem/ListGroupItem';
import CartCard from '../CartCard/CartCard';
import Button from '../Button/Button';

export const UserCart = ({
  cartData,
  deleteItemFromCart,
  changeCartItemAmount
}) => {
  // eslint-disable-next-line no-console
  console.log('render ==================== userCart');

  const isEmpty = cartData.size === 0;

  const getCartList = () => {
    if (isEmpty) {
      return <ListGroupItem className={styles.empty}>is empty.</ListGroupItem>;
    }

    const data = cartData.toList().toJS();
    const list = data.map(elem => {
      return (
        <ListGroupItem className={styles.item} key={elem.item.id}>
          <CartCard
            data={elem}
            changeAmount={changeCartItemAmount}
            deleteCard={deleteItemFromCart}
          />
        </ListGroupItem>
      );
    });

    return list;
  };

  return (
    <React.Fragment>
      <p className={styles.title}>Your Shopping Cart</p>
      <ListGroup className={styles.list}>{getCartList()}</ListGroup>
      {!isEmpty ? (
        <div className={styles.controls}>
          <Button className={styles.proceed} disabled>
            Proceed to checkout
          </Button>
        </div>
      ) : null}
    </React.Fragment>
  );
};

UserCart.propTypes = {
  cartData: PropTypes.instanceOf(Map).isRequired,
  deleteItemFromCart: PropTypes.func.isRequired,
  changeCartItemAmount: PropTypes.func.isRequired
};

export default withCart(UserCart);
