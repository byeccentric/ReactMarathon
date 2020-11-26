import config, { ENDPOINT } from '../config/urls';

export default function getUrlWithParamsConfig(endpointConfig: ENDPOINT, query: object) {
  return {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
    query,
  };
}
