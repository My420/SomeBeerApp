import getDataFromAPI from '../utils/getDataFromAPI';
import createCatalogRequestAddress from '../utils/createCatalogRequestAddress';
import {
  CATALOG_BEER__GET_REQUEST,
  CATALOG_BEER__GET_FAILURE,
  CATALOG_BEER__GET_SUCCESS
} from '../utils/constants';

const getCatalogBeerData = options => {
  return async dispatch => {
    dispatch({
      type: CATALOG_BEER__GET_REQUEST
    });

    try {
      const request = createCatalogRequestAddress(options);
      console.log(request);
      const data = await getDataFromAPI(request);
      dispatch({
        type: CATALOG_BEER__GET_SUCCESS,
        payload: { data }
      });
    } catch (error) {
      dispatch({
        type: CATALOG_BEER__GET_FAILURE,
        payload: { errorMessage: error.message }
      });
    }
  };
};

export default getCatalogBeerData;
