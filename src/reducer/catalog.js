import { Record, List } from 'immutable';
import {
  CATALOG_BEER__GET_REQUEST,
  CATALOG_BEER__GET_FAILURE,
  CATALOG_BEER__GET_SUCCESS
} from '../utils/constants';
import convertApiDataToImmutable from '../utils/convertApiDataToImmutable';

const ReducerState = Record({
  isLoaded: false,
  isLoading: false,
  isError: false,
  errorMessage: '',
  data: List([])
});

export const catalogInitialState = ReducerState();

const catalog = (state = catalogInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATALOG_BEER__GET_REQUEST:
      return state.set('isLoading', true);
    case CATALOG_BEER__GET_FAILURE:
      return state.merge({
        isLoading: false,
        isError: true,
        errorMessage: payload.errorMessage
      });
    case CATALOG_BEER__GET_SUCCESS: {
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

export default catalog;
