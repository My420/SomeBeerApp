import React from 'react';
import { HashRouter } from 'react-router-dom';
import App from '../App/App';
import ResizeProvider from '../ResizeContext/ResizeProvider';

const AppRouter = () => {
  return (
    <HashRouter>
      <ResizeProvider>
        <App />
      </ResizeProvider>
    </HashRouter>
  );
};
export default AppRouter;
