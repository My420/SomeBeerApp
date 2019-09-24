import createOptions from './createOptions';
import { API_HOST } from './constants';

const createCatalogRequestAddress = props => {
  const options = createOptions(props);
  const request = `${API_HOST}${options}`;

  return request;
};

export default createCatalogRequestAddress;
