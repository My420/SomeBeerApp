import React from 'react';
import PropTypes from 'prop-types';
import styles from './Roulette.module.scss';
import ListGroup from '../ListGroup/ListGroup';
import ListGroupItem from '../ListGroupItem/ListGroupItem';
import { ROULETTE_CELLS_AMOUNT } from '../../utils/constants';
import Button from '../Button/Button';
import generateID from '../../utils/generateID';
import spin from '../../utils/spin';

/* const Roulette = ({ components }) => {
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

  const onButtonClick = async (evt) => {
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
}; */

class Roulette extends React.Component {
  constructor(props) {
    super(props);
    this.firstRowRef = React.createRef();
    this.secondRowRef = React.createRef();
    this.middle = ROULETTE_CELLS_AMOUNT / 2;
    this.state = {
      firstRowX: 0,
      secondRowX: 0,
      winner: null
    };
  }

  onButtonClick = async () => {
    const { firstRowX, secondRowX } = this.state;
    const firstRow = this.firstRowRef.current;
    const secondRow = this.secondRowRef.current;
    const result = await spin(firstRow, secondRow, firstRowX, secondRowX);

    const { winner, row1Pos, row2Pos } = result;
    this.setState({
      winner,
      firstRowX: row1Pos,
      secondRowX: row2Pos
    });
  };

  render() {
    const { winner } = this.state;
    // eslint-disable-next-line no-console
    console.log('render ==================== Roulette', winner);

    const { firstRowRef, secondRowRef, middle, onButtonClick } = this;
    const { components } = this.props;
    const { firstRowX, secondRowX } = this.state;

    const cells = components.map(elem => {
      return (
        <ListGroupItem className={styles.cell} key={generateID()}>
          {elem}
        </ListGroupItem>
      );
    });

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
        <Button className={styles.startButton} onClick={onButtonClick}>
          Start
        </Button>
      </div>
    );
  }
}

Roulette.propTypes = {
  components: PropTypes.arrayOf(PropTypes.node).isRequired
};

export default Roulette;
