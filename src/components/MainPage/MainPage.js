import React from 'react';
import Main from '../Main/Main';
import SlideShow from '../SlideShow/SlideShow';
import Container from '../Container/Container';
import styles from './MainPage.module.scss';
import Logo from '../Logo/Logo';

const MainPage = () => {
  // eslint-disable-next-line no-console
  console.log('render ===== MainPage');
  return (
    <Main className={styles.main}>
      <Container className={styles.container}>
        <Logo />
        <SlideShow>
          <h3>slide 1</h3>
          <span>slide 2</span>
          <h3>slide 3</h3>
          <h3>slide 4</h3>
          <span>slide 5</span>
          <h3>slide 6</h3>
        </SlideShow>
      </Container>
    </Main>
  );
};

export default MainPage;
