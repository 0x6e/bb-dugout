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

dugoutControllers.controller('TeamCreationCtrl', ['$scope', '$routeParams', 'Race',
  function($scope, $routeParams, Race) {
    $scope.raceId = $routeParams.raceId;
    $scope.race = Race.get({
      raceId: $routeParams.raceId
    });

    $scope.team = {name: "Team name",
    description: "A brand new team",
    numberOfRerolls: 0,
    treasury: 1000000,
    players: []};

    $scope.addPlayer = function(title) {
      console.log("Clicked " + title);
      for (var i = 0, length = $scope.race.players.length; i < length; ++i) {
        var player = $scope.race.players[i];
        if (player.title == title) {
          if ($scope.team.treasury - player.cost < 0)
            return;
          $scope.team.treasury -= player.cost;
          $scope.team.players.push(player);
        }
      }
    }
  }]);
