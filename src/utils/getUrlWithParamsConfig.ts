import config, { ENDPOINT } from '../config/urls';

export default function getUrlWithParamsConfig(endpointConfig: ENDPOINT, query: any) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
    query: {},
  };

  const queryEdited = { ...query };

  const pathname = Object.keys(queryEdited).reduce((acc, value) => {
    if (acc.indexOf(`{${value}}`) !== -1) {
      const result = acc.replace(`{${value}}`, queryEdited[value]);
      delete queryEdited[value];

      return result;
    }
    return acc;
  }, url.pathname);

  url.pathname = pathname;
  url.query = queryEdited;

  return url;
}
