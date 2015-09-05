var dugoutApp = angular.module('dugoutApp', []);

dugoutApp.controller('RaceListCtrl', function ($scope) {
    $scope.races = [
      {
        "name": "Human",
        "description": "Although Human teams do not have the individual strengths or outstanding abilities available to other races, they do not suffer from any outstanding weakness either."
      },
      {
        "name": "Orc",
        "description": "Orcs have been playing Blood Bowl since the game was invented, and Orc teams such as the Gouged Eye and Severed Heads are amongst the best in the league."
      }
    ]
});
