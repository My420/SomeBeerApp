import {
  POPULAR_BEER__GET_REQUEST,
  POPULAR_BEER__GET_FAILURE
} from '../../utils/constants';

const downloadPopularBeerData = () => {
  return dispatch => {
    dispatch({
      type: POPULAR_BEER__GET_REQUEST
    });

    setTimeout(() => {
      dispatch({
        type: POPULAR_BEER__GET_FAILURE,
        payload: { errorMessage: 'aaaaaaaaaa' }
      });
    }, 3000);
  };
};

export default downloadPopularBeerData;
