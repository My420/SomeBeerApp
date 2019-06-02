import React from 'react';
import { HashRouter } from 'react-router-dom';
import App from '../App/App';

const AppRouter = () => {
  // eslint-disable-next-line no-console
  console.log('render ===== AppRouter');
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
};
export default AppRouter;
