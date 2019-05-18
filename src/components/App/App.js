import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <h2>Main</h2>} />
      <Route path="/search" render={() => <h2>Search</h2>} />
      <Route path="/random" render={() => <h2>Random</h2>} />
      <Route render={() => <h2>404 error</h2>} />
    </Switch>
  );
}
export default App;
