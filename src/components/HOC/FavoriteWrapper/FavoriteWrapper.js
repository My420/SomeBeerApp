import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { connect } from 'react-redux';
import {
  addToFavorite,
  deleteFromFavorite
} from '../../../ActionCreator/favorite';

const withFavorite = WrappedComponent => {
  const FavoriteWrapper = props => {
    return <WrappedComponent {...props} />;
  };

  FavoriteWrapper.propTypes = {
    favoriteData: PropTypes.instanceOf(Map).isRequired,
    addItemToFavorite: PropTypes.func.isRequired,
    deleteItemFromFavorite: PropTypes.func.isRequired
  };

  FavoriteWrapper.displayName = `FavoriteWrapper(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;

  const mapStateToProps = state => {
    return {
      favoriteData: state.favorite
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      addItemToFavorite: itemData => {
        dispatch(addToFavorite(itemData));
      },

      deleteItemFromFavorite: itemId => {
        dispatch(deleteFromFavorite(itemId));
      }
    };
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(FavoriteWrapper);
};

export default withFavorite;
