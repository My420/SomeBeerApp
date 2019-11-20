import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button/Button';
import IconInfoSvg from '../../Icons/IconInfoSvg/IconInfoSvg';
import styles from './GridCardControl.module.scss';
import CartBtn from '../../CartButton/CartButton';
import FavoriteBtn from '../../FavoriteButton/FavoriteButton';

const GridCardControl = ({ data, isDescriptionOpen, onToggleButtonClick }) => {
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

GridCardControl.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  isDescriptionOpen: PropTypes.bool.isRequired,
  onToggleButtonClick: PropTypes.func.isRequired
};

export default GridCardControl;
