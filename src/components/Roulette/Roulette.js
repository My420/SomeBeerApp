import React from 'react';
import PropTypes from 'prop-types';
import styles from './Roulette.module.scss';
import ListGroup from '../ListGroup/ListGroup';
import ListGroupItem from '../ListGroupItem/ListGroupItem';
import { ROULETTE_CELLS_AMOUNT } from '../../utils/constants';
import spin from '../../utils/spin';
import generateID from '../../utils/generateID';

const Roulette = ({
  components, // components in roulette must have unique prop id
  firstRowX,
  secondRowX,
  onNewWinner,
  changeData
}) => {
  // eslint-disable-next-line no-console
  console.log('render ==================== Roulette');

  const startButtonRef = React.createRef();
  const changeButtonRef = React.createRef();
  const firstRowRef = React.createRef();
  const secondRowRef = React.createRef();
  const middle = ROULETTE_CELLS_AMOUNT / 2;

  const cells = components.map(elem => {
    let { id } = elem.props;

    if (!id) {
      console.warn('components in roulette must have unique prop id');
      id = generateID();
    }

    return (
      <ListGroupItem className={styles.cell} key={id}>
        {elem}
      </ListGroupItem>
    );
  });

  const onButtonClick = async () => {
    const startButton = startButtonRef.current;
    const changeButton = changeButtonRef.current;
    const firstRow = firstRowRef.current;
    const secondRow = secondRowRef.current;

    startButton.disabled = true;
    changeButton.disabled = true;
    const result = await spin(firstRow, secondRow, firstRowX, secondRowX);
    const { winner, row1Pos, row2Pos } = result;
    startButton.disabled = false;
    changeButton.disabled = false;

    onNewWinner(winner, row1Pos, row2Pos);
  };

  return (
    <div className={styles.wrapper}>
      <ListGroup className={styles.window}>
        <div className={styles.pointer} />
        <div
          className={styles.firstRow}
          ref={firstRowRef}
          style={{ transform: `translateX(${firstRowX}px)` }}
        >
          {cells.slice(0, middle)}
        </div>
        <div
          className={styles.secondRow}
          ref={secondRowRef}
          style={{ transform: `translateX(${secondRowX}px)` }}
        >
          {cells.slice(middle, ROULETTE_CELLS_AMOUNT + 1)}
        </div>
      </ListGroup>
      <div className={styles.controls}>
        <button
          className={styles.startButton}
          type="button"
          ref={startButtonRef}
          onClick={onButtonClick}
        >
          Spin
        </button>
        <button
          className={styles.changeButton}
          type="button"
          ref={changeButtonRef}
          onClick={changeData}
        >
          Change
        </button>
      </div>
    </div>
  );
};

Roulette.propTypes = {
  components: PropTypes.arrayOf(PropTypes.node).isRequired,
  firstRowX: PropTypes.number.isRequired,
  secondRowX: PropTypes.number.isRequired,
  onNewWinner: PropTypes.func.isRequired,
  changeData: PropTypes.func.isRequired
};

export default Roulette;
