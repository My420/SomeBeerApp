import React from 'react';
import PropTypes from 'prop-types';
import styles from './Roulette.module.scss';
import ListGroup from '../ListGroup/ListGroup';
import ListGroupItem from '../ListGroupItem/ListGroupItem';
import { ROULETTE_CELLS_AMOUNT } from '../../utils/constants';
import Button from '../Button/Button';
import generateID from '../../utils/generateID';
import spin from '../../utils/spin';

const Roulette = ({ components }) => {
  // eslint-disable-next-line no-console
  console.log('render ==================== Roulette');

  const firstRowRef = React.createRef();
  const secondRowRef = React.createRef();
  const middle = ROULETTE_CELLS_AMOUNT / 2;

  const cells = components.map(elem => {
    return (
      <ListGroupItem className={styles.cell} key={generateID()}>
        {elem}
      </ListGroupItem>
    );
  });

  const onButtonClick = async () => {
    const firstRow = firstRowRef.current;
    const secondRow = secondRowRef.current;
    spin(firstRow, secondRow);
  };

  return (
    <div className={styles.wrapper}>
      <ListGroup className={styles.window}>
        <div className={styles.pointer} />
        <div className={styles.firstRow} ref={firstRowRef}>
          {cells.slice(0, middle)}
        </div>
        <div className={styles.secondRow} ref={secondRowRef}>
          {cells.slice(middle, ROULETTE_CELLS_AMOUNT + 1)}
        </div>
      </ListGroup>
      <Button className={styles.startButton} onClick={onButtonClick}>
        Start
      </Button>
    </div>
  );
};

Roulette.propTypes = {
  components: PropTypes.arrayOf(PropTypes.node).isRequired
};

export default Roulette;
