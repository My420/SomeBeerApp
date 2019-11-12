import React from 'react';
import Button from '../../Button/Button';
import IconInfoSvg from '../../Icons/IconInfoSvg/IconInfoSvg';
import styles from './GridCardControl.module.scss';
import CartBtn from '../../CartButton/CartButton';
import FavoriteBtn from '../../FavoriteButton/FavoriteButton';

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
      <FavoriteBtn itemData={data} />
      <CartBtn itemData={data} />
    </div>
  );
};

export default GridCardControl;
