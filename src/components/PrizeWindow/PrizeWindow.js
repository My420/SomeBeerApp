import React from 'react';
import PropTypes from 'prop-types';
import styles from './PrizeWindow.module.scss';
import Button from '../Button/Button';
import GridItemCard from '../GridItemCard/GridItemCard';
import IconCrossCss from '../IconCrossCss/IconCrossCss';

const PrizeWindow = ({ prize, onButtonClick }) => {
  // eslint-disable-next-line no-console
  console.log('render ============= RoulettePanel');

  return (
    <section className={styles.prize}>
      <h3 className="visually-hidden">Prize</h3>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <GridItemCard data={prize} />
        </div>
        <Button className={styles.closeButton} onClick={onButtonClick}>
          <span className="visually-hidden">Close</span>
          <IconCrossCss />
        </Button>
      </div>
    </section>
  );
};

PrizeWindow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  prize: PropTypes.object.isRequired,
  onButtonClick: PropTypes.func.isRequired
};

export default PrizeWindow;
