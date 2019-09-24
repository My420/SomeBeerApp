import { combineReducers } from 'redux';
import popularBeer from './popularBeer';
import catalog from './catalog';
import cart from './cart';
import favorite from './favorite';

export default combineReducers({
  popularBeer,
  catalog,
  cart,
  favorite
});
