import React from 'react';
import styles from './RoulettePanel.module.scss';
import Roulette from '../Roulette/Roulette';
import RouletteItem from '../RouletteItem/RouletteItem';
import PrizeWindow from '../PrizeWindow/PrizeWindow';
import { SHOP_NAME } from '../../utils/constants';

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
        <h2 className={styles.name}>
          <span className={styles.shopName}>{SHOP_NAME}</span>
          <span className={styles.pageName}>Roulette!</span>
        </h2>
        <p className={styles.slogan}>We will decide which beer you get!</p>
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

export default RoulettePanel;
