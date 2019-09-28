import { combineReducers } from 'redux';
import popularBeer from './popularBeer';
import catalog from './catalog';
import cart from './cart';
import favorite from './favorite';
import beerItem from './beerItem';

export default combineReducers({
  popularBeer,
  catalog,
  cart,
  favorite,
  beerItem
});
