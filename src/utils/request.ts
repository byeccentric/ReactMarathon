import Url from 'url';
import { ENDPOINT } from 'config/urls';

import getUrlWithParamsConfig from './getUrlWithParamsConfig';

function req(endpoint: ENDPOINT, query: object) {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));
  return fetch(uri).then((response) => response.json());
}

export default req;
