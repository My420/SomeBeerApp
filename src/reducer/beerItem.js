import { Record } from 'immutable';
import {
  BEER_ID__GET_REQUEST,
  BEER_ID__GET_FAILURE,
  BEER_ID__GET_SUCCESS
} from '../utils/constants';
import BeerDataRecord from '../utils/BeerDataRecord';

const ReducerState = Record({
  isLoaded: false,
  isLoading: false,
  isError: false,
  errorMessage: '',
  data: BeerDataRecord()
});

export const BeerItemInitialState = ReducerState();

const beerItem = (state = BeerItemInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case BEER_ID__GET_REQUEST:
      return state.set('isLoading', true);
    case BEER_ID__GET_FAILURE:
      return state.merge({
        isLoading: false,
        isError: true,
        errorMessage: payload.errorMessage
      });
    case BEER_ID__GET_SUCCESS: {
      const data = BeerDataRecord(payload.data[0]);
      return state
        .merge({
          isLoaded: true,
          isLoading: false,
          isError: false,
          errorMessage: ''
        })
        .set('data', data);
    }
    default:
      return state;
  }
};

export default beerItem;
