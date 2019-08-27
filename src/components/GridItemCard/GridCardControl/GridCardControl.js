import React from 'react';
import Button from '../../Button/Button';
import IconFavoriteSvg from '../../IconFavoriteSvg/IconFavoriteSvg';
import IconInfoSvg from '../../IconInfoSvg/IconInfoSvg';
import styles from './GridCardControl.module.scss';
import CartButton from '../CartButton/CartButton';

const GridCardControl = ({ data, isDescriptionOpen, onToggleButtonClick }) => {
  // eslint-disable-next-line no-console
  console.log('render ===== GridCardControl');

  return (
    <div className={styles.controls}>
      <Button className={styles.toggleButton} onClick={onToggleButtonClick}>
        <IconInfoSvg
          containerClass={styles.infoContainer}
          pathClass={
            isDescriptionOpen ? styles.infoPathOpen : styles.infoPathClose
          }
        />
      </Button>

      <Button className={styles.favoriteButton}>
        <IconFavoriteSvg
          containerClass={styles.favoriteContainer}
          pathClass={styles.favoritePath}
        />
      </Button>
      <CartButton itemData={data} />
    </div>
  );
};

export default GridCardControl;
