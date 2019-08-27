import { combineReducers } from 'redux';
import popularBeer from './popularBeer';
import cart from './cart';

export default combineReducers({
  popularBeer,
  cart
});
