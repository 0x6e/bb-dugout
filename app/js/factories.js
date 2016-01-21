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
    for (var i = 0, length = this.race.players.length; i < length; ++i) {
      var player = this.race.players[i];
      if (player.title == title) {
        if (player.count >= player.max)
          return;

        if (this.treasury - player.cost < 0)
          return;

        this.treasury -= player.cost;
        ++player.count

        this.players.push(player);
        return;
      }
    }
  }

  Team.prototype.setRace = function(raceId) {
    this.race = Race.get({raceId: raceId}, function(race) {
      /* Callback function */

      //Add additional properties
      for (var i = 0, length = race.players.length; i < length; ++i) {
        var player = race.players[i];
        if (!player.hasOwnProperty('count'))
          player.count = 0;
      }
    });
  }


  // return the constructor function
  return Team;
}]);
