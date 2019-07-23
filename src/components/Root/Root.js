import React from 'react';

import { Provider } from 'react-redux';
import AppRouter from '../AppRouter/AppRouter';
import store from '../../store/store';

const Root = () => {
  // eslint-disable-next-line no-console
  console.log('render ===== root');
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default Root;
