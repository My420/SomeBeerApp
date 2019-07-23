import { createStore, applyMiddleware } from 'redux';
/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import reducer from '../reducer/index';

const enhancer = applyMiddleware(ReduxThunk);

const withReduxDevTools = composeWithDevTools(enhancer);

const store = createStore(reducer, {}, withReduxDevTools);

export default store;
