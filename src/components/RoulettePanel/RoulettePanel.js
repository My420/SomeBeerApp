import React from 'react';
import styles from './RoulettePanel.module.scss';
import Main from '../Main/Main';
import Container from '../Container/Container';
import Roulette from '../Roulette/Roulette';
import RouletteItem from '../RouletteItem/RouletteItem';

const RoulettePanel = ({ data }) => {
  // eslint-disable-next-line no-console
  console.log('render ============= RoulettePanel');

  const components = data.toJS().map(elem => {
    return <RouletteItem data={elem} />;
  });

  return (
    <Main className={styles.main}>
      <Container className={styles.container}>
        <section className={styles.roulettePage}>
          <h2 className="visually-hidden">Roulette!</h2>
          <Roulette components={components} />
        </section>
      </Container>
    </Main>
  );
};

export default RoulettePanel;
