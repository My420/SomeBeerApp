import getDataFromAPI from '../utils/getDataFromAPI';
import createBeerByIdAdress from '../utils/createBeerByIdAdress';
import {
  BEER_ID__GET_REQUEST,
  BEER_ID__GET_FAILURE,
  BEER_ID__GET_SUCCESS
} from '../utils/constants';

const getBeerById = id => {
  return async dispatch => {
    dispatch({
      type: BEER_ID__GET_REQUEST
    });

    try {
      const request = createBeerByIdAdress(id);
      const data = await getDataFromAPI(request);
      dispatch({
        type: BEER_ID__GET_SUCCESS,
        payload: { data }
      });
    } catch (error) {
      dispatch({
        type: BEER_ID__GET_FAILURE,
        payload: { errorMessage: error.message }
      });
    }
  };
};

export default getBeerById;
