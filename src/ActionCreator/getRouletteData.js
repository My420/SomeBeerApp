import getDataFromAPI from '../utils/getDataFromAPI';
import createRouletteRequestAddress from '../utils/createRouletteRequestAddress';
import {
  ROULETTE__GET_REQUEST,
  ROULETTE__GET_FAILURE,
  ROULETTE__GET_SUCCESS
} from '../utils/constants';

const getRouletteData = () => {
  return async dispatch => {
    dispatch({
      type: ROULETTE__GET_REQUEST
    });

    try {
      const request = createRouletteRequestAddress();
      const data = await getDataFromAPI(request);
      dispatch({
        type: ROULETTE__GET_SUCCESS,
        payload: { data }
      });
    } catch (error) {
      dispatch({
        type: ROULETTE__GET_FAILURE,
        payload: { errorMessage: error.message }
      });
    }
  };
};

export default getRouletteData;
