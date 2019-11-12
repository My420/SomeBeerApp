import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './PrizeWindow.module.scss';
import animation from './animation.module.css';
import Button from '../Button/Button';
import GridItemCard from '../GridItemCard/GridItemCard';
import IconCrossCss from '../IconCrossCss/IconCrossCss';

const PrizeWindow = ({ prize, onButtonClick, isOpen }) => {
  // eslint-disable-next-line no-console
  console.log('render ============= PrizeWindow');

  return (
    <TransitionGroup>
      {isOpen && (
        <CSSTransition classNames={{ ...animation }} timeout={300}>
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
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};

PrizeWindow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  prize: PropTypes.object,
  onButtonClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};
PrizeWindow.defaultProps = {
  prize: {}
};

export default PrizeWindow;
