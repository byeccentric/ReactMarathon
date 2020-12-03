import Url from 'url';
import { ENDPOINT } from 'config/urls';

import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req<T>(endpoint: ENDPOINT, query: object): Promise<T> {
  const uri: string = Url.format(getUrlWithParamsConfig(endpoint, query));
  return fetch(uri).then((response) => response.json());
}

export default req;
