import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../HeaderCreator/HeaderCreator';
import styles from './App.module.scss';
import Container from '../Container/Container';
import MainPage from '../MainPage/MainPage';
import Footer from '../Footer/Footer';
import CatalogPage from '../CatalogPage/CatalogPage';
import FavoritePage from '../FavoritePage/FavoritePage';
import ItemPage from '../ItemPage/ItemPage';

const App = () => {
  // eslint-disable-next-line no-console
  console.log('render ===== App');
  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <Header />
      </Container>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/catalog" component={CatalogPage} />
        <Route exact path="/favorite" component={FavoritePage} />
        <Route exact path="/id/:id" component={ItemPage} />
        <Route path="/random" render={() => <h2>Random</h2>} />
        <Route render={() => <h2>404 error</h2>} />
      </Switch>
      <Container className={styles.container}>
        <Footer />
      </Container>
    </div>
  );
};
export default App;
