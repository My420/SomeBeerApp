import React from 'react';
import { connect } from 'react-redux';
import {
  addToCart,
  deleteFromCart,
  changeCartItemAmount
} from '../../../ActionCreator/cart';

const withCart = WrappedComponent => {
  const CartWrapper = props => {
    // eslint-disable-next-line no-console
    console.log('render ===== CartWrapper');

    return <WrappedComponent {...props} />;
  };

  CartWrapper.displayName = `CartWrapper(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;

  const mapStateToProps = state => {
    return {
      cartData: state.cart
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      addItemToCart: itemData => {
        dispatch(addToCart(itemData));
      },

      deleteItemFromCart: itemId => {
        dispatch(deleteFromCart(itemId));
      },

      cahngeCartItemAmount: (itemId, amount) => {
        dispatch(changeCartItemAmount(itemId, amount));
      }
    };
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(CartWrapper);
};

export default withCart;