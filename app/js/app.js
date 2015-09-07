var dugoutApp = angular.module('dugoutApp', [
  'ngRoute',
  'dugoutControllers',
  'dugoutFilters'
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
  otherwise({
    redirectTo: '/races'
  });
}]);
