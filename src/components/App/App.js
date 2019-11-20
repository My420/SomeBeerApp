import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../HeaderCreator/HeaderCreator';
import styles from './App.module.scss';
import Container from '../Container/Container';
import MainPage from '../MainPage/MainPage';
import Footer from '../Footer/Footer';
import CatalogPage from '../CatalogPage/CatalogPage';
import FavoritePage from '../FavoritePage/FavoritePage';
import CartPage from '../CartPage/CartPage';
import ItemPage from '../ItemPage/ItemPage';
import Roulette from '../RoulettePage/RoulettePage';
import AboutPage from '../AboutPage/AboutPage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <Header />
      </Container>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/catalog" component={CatalogPage} />
        <Route exact path="/favorite" component={FavoritePage} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/id/:id" component={ItemPage} />
        <Route exact path="/roulette" component={Roulette} />
        <Route exact path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Container className={styles.container}>
        <Footer />
      </Container>
    </div>
  );
};
export default App;
