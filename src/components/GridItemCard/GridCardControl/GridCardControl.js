import React from 'react';
import Button from '../../Button/Button';
import IconInfoSvg from '../../IconInfoSvg/IconInfoSvg';
import styles from './GridCardControl.module.scss';
import CartButton from '../CartButton/CartButton';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

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
      <FavoriteButton itemData={data} />
      <CartButton itemData={data} />
    </div>
  );
};

export default GridCardControl;
