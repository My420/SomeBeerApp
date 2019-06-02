import React from 'react';

import AppRouter from '../AppRouter/AppRouter';
// import store from "../../store/store";
// import { Provider } from "react-redux";

const Root = () => {
  // eslint-disable-next-line no-console
  console.log('render ===== root');
  return (
    // <Provider store={store}>
    <AppRouter />
    // </Provider>
  );
};

export default Root;
