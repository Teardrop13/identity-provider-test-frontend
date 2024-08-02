import config from '../auth_config.json';

const { domain, clientId, audience, apiUri } = config as {
  domain: string;
  clientId: string;
  audience?: string;
  apiUri: string;
};

export const environment = {
  production: false,
  auth: {
    domain,
    clientId,
    authorizationParams: {
      audience,
      redirect_uri: window.location.origin,
    }
  },
  httpInterceptor: {
    allowedList: ['/api/*'],
  },
};