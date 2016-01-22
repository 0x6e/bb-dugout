'use strict'

/* TeamFactory */

var dugoutFactories = angular.module('dugoutFactories', []);

dugoutFactories.factory('Team', [ 'Race', function TeamFactory(Race) {

  /**
   * Team constructor
   */
  function Team(teamName, description) {
    this.teamName = teamName;
    this.description = description;
    this.treasury = 1000000;
    this.players = [];
    this.race = {};
  };

  Team.prototype.addPlayer = function(title) {
    for (var i = 0, length = this.race.playerTypes.length; i < length; ++i) {
      var playerType = this.race.playerTypes[i];
      if (playerType.title == title) {
        if (playerType.count >= playerType.max)
          return;

        if (this.treasury - playerType.cost < 0)
          return;

        this.treasury -= playerType.cost;
        ++playerType.count

        this.players.push(playerType);
        return;
      }
    }
  }

  Team.prototype.setRace = function(raceId) {
    this.race = Race.get({raceId: raceId}, function(race) {
      /* Callback function */

      //Add additional properties
      for (var i = 0, length = race.playerTypes.length; i < length; ++i) {
        var playerType = race.playerTypes[i];
        if (!playerType.hasOwnProperty('count'))
          playerType.count = 0;
      }
    });
  }


  // return the constructor function
  return Team;
}]);
