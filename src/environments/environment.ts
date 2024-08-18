export const environment = {
  production: true,
  auth: {
    domain: 'teardrop.eu.auth0.com',
    clientId: 'ZMTpocN8zhb48RPBFY99Lt54rgGjbmr2',
    authorizationParams: {
      audience: 'idp-backend',
      redirect_uri: window.location.origin,
    }
  },
  httpInterceptor: {
    allowedList: ['/api/*'],
  },
};
