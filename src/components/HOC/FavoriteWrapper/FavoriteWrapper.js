import React from 'react';
import { connect } from 'react-redux';
import {
  addToFavorite,
  deleteFromFavorite
} from '../../../ActionCreator/favorite';

const withFavorite = WrappedComponent => {
  const FavoriteWrapper = props => {
    // eslint-disable-next-line no-console
    console.log('render ===== FavoriteWrapper');

    return <WrappedComponent {...props} />;
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
