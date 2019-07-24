import getPopularBeer from '../utils/getPopularBeer';
import {
  POPULAR_BEER__GET_REQUEST,
  POPULAR_BEER__GET_FAILURE,
  POPULAR_BEER__GET_SUCCESS
} from '../utils/constants';

const downloadPopularBeerData = () => {
  return async dispatch => {
    dispatch({
      type: POPULAR_BEER__GET_REQUEST
    });

    try {
      const data = await getPopularBeer();
      dispatch({
        type: POPULAR_BEER__GET_SUCCESS,
        payload: { data }
      });
    } catch (error) {
      dispatch({
        type: POPULAR_BEER__GET_FAILURE,
        payload: { errorMessage: error.message }
      });
    }
  };
};

export default downloadPopularBeerData;
