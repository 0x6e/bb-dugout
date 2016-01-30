'use strict'

var dugoutAuthentication = angular.module('dugoutAuthentication', ['ngResource']);


dugoutAuthentication.constant('API_ENDPOINT', {
  url: 'http://localhost:8080/api'
});


dugoutAuthentication.constant('AUTH_EVENTS', {
  loginSuccess: 'auth-login-success',
  loginFailed: 'auth-login-failed',
  notAuthenticated: 'auth-not-authenticated'
});


// Stores the user's session details
dugoutAuthentication.service('Session', function() {
  // TODO
});


// Handles the API to create a Session
dugoutAuthentication.service('AuthService', function($http, API_ENDPOINT, Session) {
  this.login = function(credentials) {
    return $http.post(API_ENDPOINT.url + '/authenticate', credentials)
    .then( function(result) {
      if (result.data.success) {
        console.log('Authenticated! ' + result.data.token);
      }
    });
  };

  this.signup = function(credentials) {
    return $http.post(API_ENDPOINT.url + '/signup', credentials)
    .then( function(result) {
      if (result.data.success) {
        console.log('Signed up! ');
      }
      else {
        console.log('Signup FAILED: ' + result.data.msg);
      }
    });
  };
});


// Attach the AuthInterceptor
dugoutAuthentication.config(function ($httpProvider) {
  $httpProvider.interceptors.push([
    '$injector',
    function ($injector) {
      return $injector.get('AuthInterceptor');
    }
  ]);
})


// Intercepts authentication responses and broadcasts the appropriate message
dugoutAuthentication.service('AuthInterceptor', function($rootScope, $q, AUTH_EVENTS) {
  this.responseError = function (response) {
    $rootScope.$broadcast({
      401: AUTH_EVENTS.notAuthenticated
    }[response.status], response);
    return $q.reject(response);
  }
});
