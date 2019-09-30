import React from 'react';
import { Map } from 'immutable';
import PropTypes from 'prop-types';
import styles from './FavoriteButton.module.scss';
import Button from '../Button/Button';
import IconFavoriteSvg from '../IconFavoriteSvg/IconFavoriteSvg';
import IconFavoriteFillSvg from '../IconFavoriteFillSvg/IconFavoriteFillSvg';
import withFavorite from '../HOC/FavoriteWrapper/FavoriteWrapper';

export const FavoriteButton = ({
  itemData,
  favoriteData,
  addItemToFavorite,
  deleteItemFromFavorite
}) => {
  // eslint-disable-next-line no-console
  console.log('render ===== FavoriteButton');
  const { id } = itemData;
  const isItemOnFavorite = favoriteData.has(id);
  const onFavoriteButtonClick = () => {
    if (isItemOnFavorite) {
      deleteItemFromFavorite(id);
    } else {
      addItemToFavorite({ ...itemData });
    }
  };

  const Icon = isItemOnFavorite ? IconFavoriteFillSvg : IconFavoriteSvg;

  return (
    <Button className={styles.favoriteButton} onClick={onFavoriteButtonClick}>
      {' '}
      <Icon
        containerClass={styles.favoriteContainer}
        pathClass={styles.favoritePath}
      />
    </Button>
  );
};

FavoriteButton.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  itemData: PropTypes.object.isRequired, // from parent component
  favoriteData: PropTypes.instanceOf(Map).isRequired, // from HOC
  addItemToFavorite: PropTypes.func.isRequired, // from HOC
  deleteItemFromFavorite: PropTypes.func.isRequired // from HOC
};

export default withFavorite(FavoriteButton);
