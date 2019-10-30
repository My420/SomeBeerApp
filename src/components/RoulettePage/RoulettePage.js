import React from 'react';
import styles from './RoulettePage.module.scss';
import Main from '../Main/Main';
import Container from '../Container/Container';
import Roulette from '../Roulette/Roulette';

const RoulettePage = () => {
  // eslint-disable-next-line no-console
  console.log('render ==================== RoulettePage');

  const components = [];

  for (let i = 1; i < 13; i += 1) {
    components.push(<span>{i}</span>);
  }

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

export default RoulettePage;
