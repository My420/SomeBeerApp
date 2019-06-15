import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HeaderCreator from '../HeaderCreator/HeaderCreator';
import styles from './App.module.scss';
import Container from '../Container/Container';

const App = () => {
  // eslint-disable-next-line no-console
  console.log('render ===== App');
  return (
    <React.Fragment>
      <Container className={styles.container}>
        <HeaderCreator />
      </Container>
      <Switch>
        <Route exact path="/" render={() => <h2>Main</h2>} />
        <Route path="/search" render={() => <h2>Search</h2>} />
        <Route path="/random" render={() => <h2>Random</h2>} />
        <Route render={() => <h2>404 error</h2>} />
      </Switch>
    </React.Fragment>
  );
};
export default App;
