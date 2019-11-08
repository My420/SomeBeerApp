import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import styles from './RoulettePanel.module.scss';
import Roulette from '../Roulette/Roulette';
import RouletteItem from '../RouletteItem/RouletteItem';
import PrizeWindow from '../PrizeWindow/PrizeWindow';

class RoulettePanel extends React.Component {
  state = {
    firstRowX: 0,
    secondRowX: 0,
    winner: null
  };

  onNewWinner = (winner, firstRowX, secondRowX) => {
    this.setState({ winner, firstRowX, secondRowX });
  };

  deleteWinner = () => {
    this.setState({ winner: null });
  };

  render() {
    // eslint-disable-next-line no-console
    console.log('render ============= RoulettePanel');

    const { data, changeData } = this.props;
    const { winner, firstRowX, secondRowX } = this.state;

    const components = data.toJS().map(elem => {
      return <RouletteItem data={elem} />;
    });

    const prize = winner && data.get(winner - 1).toJS();

    return (
      <section className={styles.roulettePage}>
        <Roulette
          components={components}
          firstRowX={firstRowX}
          secondRowX={secondRowX}
          onNewWinner={this.onNewWinner}
          changeData={changeData}
        />
        {winner && (
          <PrizeWindow prize={prize} onButtonClick={this.deleteWinner} />
        )}
      </section>
    );
  }
}

RoulettePanel.propTypes = {
  data: PropTypes.instanceOf(List).isRequired,
  changeData: PropTypes.func.isRequired
};

export default RoulettePanel;
