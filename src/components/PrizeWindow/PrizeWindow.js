import React from 'react';
import styles from './PrizeWindow.module.scss';
import Button from '../Button/Button';
import GridItemCard from '../GridItemCard/GridItemCard';

const PrizeWindow = ({ prize, onButtonClick }) => {
  // eslint-disable-next-line no-console
  console.log('render ============= RoulettePanel', prize);
  return (
    <section className={styles.prize}>
      <h3 className="visually-hidden">Prize</h3>
      <div className={styles.wrapper}>
        <GridItemCard data={prize} />
      </div>
      <Button className={styles.closeButton} onClick={onButtonClick}>
        Close
      </Button>
    </section>
  );
};

export default PrizeWindow;
