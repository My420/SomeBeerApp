import React from 'react';
import Button from '../../Button/Button';
import IconFavoriteSvg from '../../IconFavoriteSvg/IconFavoriteSvg';
import IconInfoSvg from '../../IconInfoSvg/IconInfoSvg';

import IconCartSvg from '../../IconCartSvg/IconCartSvg';
import styles from './GridCardControl.module.scss';

const GridCardControl = ({ isDescriptionOpen, onToggleButtonClick }) => {
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
      <Button className={styles.cartButton}>
        {' '}
        <IconCartSvg
          containerClass={styles.cartContainer}
          pathClass={styles.cartPath}
        />
        <span className={styles.cartText}>Add to Cart</span>
      </Button>
    </div>
  );
};

export default GridCardControl;
