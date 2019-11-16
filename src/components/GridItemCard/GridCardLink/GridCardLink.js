import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import GridCardDescription from '../GridCardDescription/GridCardDescription';
import styles from './GridCardLink.module.scss';
import animation from './animation.module.css';
import replaceEmptyImageUrl from '../../../utils/replaceEmptyImageUrl';

const GridCardLink = ({
  data,
  isDescriptionOpen,
  onCursorEnter,
  onCursorLeave
}) => {
  const parameter = {
    abv: data.abv,
    ibu: data.ibu,
    ebc: data.ebc
  };

  const addEndListener = (node, done) => {
    node.addEventListener('transitionend', done, false);
  };

  // eslint-disable-next-line no-console
  console.log('render ===== GridCardLink');

  return (
    <Link
      className={styles.link}
      to={`id/${data.id}`}
      onMouseEnter={onCursorEnter}
      onMouseLeave={onCursorLeave}
    >
      <div className={styles.wrapper}>
        <TransitionGroup component={null}>
          {isDescriptionOpen ? (
            <CSSTransition
              classNames={{ ...animation }}
              timeout={200}
              addEndListener={addEndListener}
            >
              <GridCardDescription parameter={parameter} title={data.tagline} />
            </CSSTransition>
          ) : null}
        </TransitionGroup>
        <img
          className={styles.image}
          src={replaceEmptyImageUrl(data.image_url)}
          alt={data.name}
        />
      </div>
      <p className={styles.description}>
        <span className={styles.beerName}>{data.name}</span>
      </p>
    </Link>
  );
};

GridCardLink.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  isDescriptionOpen: PropTypes.bool.isRequired,
  onCursorEnter: PropTypes.func.isRequired,
  onCursorLeave: PropTypes.func.isRequired
};

export default GridCardLink;
