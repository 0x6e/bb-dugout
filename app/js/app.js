var dugoutApp = angular.module('dugoutApp', [
  'ngRoute',
  'dugoutControllers',
  'dugoutFilters',
  'dugoutAuthentication',
  'dugoutServices',
  'dugoutFactories'
]);

dugoutApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/races', {
    templateUrl: 'partials/race-list.html',
    controller: 'RaceListCtrl'
  }).
  when('/races/:raceId', {
    templateUrl: 'partials/race-details.html',
    controller: 'RaceDetailCtrl'
  }).
  when('/create/:raceId', {
    templateUrl: 'partials/create-team.html',
    controller: 'TeamCreationCtrl'
  }).
  when('/login', {
    templateUrl: 'partials/login.html',
    controller: 'LoginController'
  }).
  otherwise({
    redirectTo: '/races'
  });
}]);
