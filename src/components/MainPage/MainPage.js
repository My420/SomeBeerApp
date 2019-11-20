import React from 'react';
import Main from '../Main/Main';
import SlideShow from '../SlideShow/SlideShow';
import Container from '../Container/Container';
import styles from './MainPage.module.scss';
import Logo from '../Logo/Logo';
import SloganShakespeare from '../SloganGallery/SloganShakespeare/SloganShakespeare';
import SloganJohnnyDepp from '../SloganGallery/SloganJohnnyDepp/SloganJohnnyDepp';
import SloganChurchhill from '../SloganGallery/SloganChurchhill/SloganChurchhill';
import SloganLuther from '../SloganGallery/SloganLuther/SloganLuther';
import PopularGoods from '../PopularGoods/PopularGoods';

const MainPage = () => {
  return (
    <Main className={styles.main}>
      <Container className={styles.container}>
        <Logo />
        <SlideShow>
          <SloganShakespeare />
          <SloganJohnnyDepp />
          <SloganChurchhill />
          <SloganLuther />
        </SlideShow>
        <PopularGoods />
      </Container>
    </Main>
  );
};

export default MainPage;
