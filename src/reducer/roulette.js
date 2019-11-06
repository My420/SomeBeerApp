import { Record, List } from 'immutable';
import {
  ROULETTE__GET_REQUEST,
  ROULETTE__GET_FAILURE,
  ROULETTE__GET_SUCCESS
} from '../utils/constants';
import convertApiDataToImmutable from '../utils/convertApiDataToImmutable';

const ReducerState = Record({
  isLoaded: false,
  isLoading: false,
  isError: false,
  errorMessage: '',
  data: List([])
});

export const rouletteInitialState = ReducerState();

const roulette = (state = rouletteInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ROULETTE__GET_REQUEST:
      return state.set('isLoading', true);
    case ROULETTE__GET_FAILURE:
      return state.merge({
        isLoading: false,
        isError: true,
        errorMessage: payload.errorMessage
      });
    case ROULETTE__GET_SUCCESS: {
      const data = convertApiDataToImmutable(payload.data);
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

export default roulette;
