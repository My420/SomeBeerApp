import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { connect } from 'react-redux';
import {
  addToCart,
  deleteFromCart,
  changeCartItemAmount
} from '../../../ActionCreator/cart';

const withCart = WrappedComponent => {
  const CartWrapper = props => {
    return <WrappedComponent {...props} />;
  };

  CartWrapper.propTypes = {
    cartData: PropTypes.instanceOf(Map).isRequired,
    addItemToCart: PropTypes.func.isRequired,
    deleteItemFromCart: PropTypes.func.isRequired,
    changeCartItemAmount: PropTypes.func.isRequired
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

      changeCartItemAmount: (itemId, amount) => {
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
