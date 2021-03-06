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
    const { data, changeData } = this.props;
    const { winner, firstRowX, secondRowX } = this.state;

    const components = data.toJS().map(elem => {
      const { image_url: url, name, id } = elem;
      return <RouletteItem url={url} name={name} id={id} />;
    });

    const prize = winner && data.get(winner - 1).toJS();

    return (
      <section className={styles.roulettePage}>
        <h3 className="visually-hidden">Roulette</h3>
        <Roulette
          components={components}
          firstRowX={firstRowX}
          secondRowX={secondRowX}
          onNewWinner={this.onNewWinner}
          changeData={changeData}
        />
        <PrizeWindow
          prize={prize}
          onButtonClick={this.deleteWinner}
          isOpen={!!winner}
        />
      </section>
    );
  }
}

RoulettePanel.propTypes = {
  data: PropTypes.instanceOf(List).isRequired,
  changeData: PropTypes.func.isRequired
};

export default RoulettePanel;
