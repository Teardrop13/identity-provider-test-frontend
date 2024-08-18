export const environment = {
  production: false,
  auth: {
    domain: 'teardrop.eu.auth0.com',
    clientId: '9ZmHWMKo19BJ6hLaAW4906renJXwJQaZ',
    authorizationParams: {
      audience: 'idp-backend-local',
      redirect_uri: window.location.origin,
    }
  },
  httpInterceptor: {
    allowedList: ['/api/*'],
  },
};
