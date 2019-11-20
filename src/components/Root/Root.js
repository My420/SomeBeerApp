import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from '../AppRouter/AppRouter';
import store from '../../store/store';

const Root = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default Root;
