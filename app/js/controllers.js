var dugoutControllers = angular.module('dugoutControllers', []);

dugoutControllers.controller('RaceListCtrl', ['$scope', 'Race',
  function ($scope, Race) {
    $scope.races = Race.query();
  }]);

dugoutControllers.controller('RaceDetailCtrl', ['$scope', '$routeParams', 'Race',
  function($scope, $routeParams, Race) {
    $scope.raceId = $routeParams.raceId;
    $scope.race = Race.get({
      raceId: $routeParams.raceId
    });
  }]);

dugoutControllers.controller('TeamCreationCtrl', ['$scope', '$routeParams', 'Team',
  function($scope, $routeParams, Team) {

    $scope.team = new Team("Team name", "A brand new team");
    $scope.team.setRace($routeParams.raceId)

  }]);

dugoutControllers.controller('LoginController', ['$scope', '$rootScope', 'AUTH_EVENTS', 'AuthService',
  function($scope, $rootScope, AUTH_EVENTS, AuthService) {
    $scope.signup = false;
    $scope.credentials = {
      name: '',
      password: ''
    };

    $scope.submit = function(credentials) {
      if ($scope.signup)
        $scope.signup(credentials);
      else
        $scope.login(credentials);
    }

    $scope.login = function(credentials) {
      AuthService.login(credentials).then(function () {
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        console.log('login success!');
      }, function(result) {
        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        console.log('login FAILED', result.data.msg);
      });
    };

    $scope.signup = function(credentials) {
      AuthService.signup(credentials).then(function () {
        console.log('signup success!');
      }, function(result) {
        console.log('signup FAILED', result.data.msg);
      });
    }
  }]);
