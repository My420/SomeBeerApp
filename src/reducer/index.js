import { combineReducers } from 'redux';
import popularBeer from './popularBeer';
import cart from './cart';
import favorite from './favorite';

export default combineReducers({
  popularBeer,
  cart,
  favorite
});
