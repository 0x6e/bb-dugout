'use strict'

/* factories */

var dugoutFactories = angular.module('dugoutFactories', []);

dugoutFactories.factory('Team', function TeamFactory() {

  /**
   * Team constructor
   */
  function Team(teamName, description) {
    this.teamName = teamName;
    this.description = description;
    this.treasury = 1000000;
    this.players = [];
  };

  Team.prototype.addPlayer = function(title) {
    console.log('Stolen player ' + title)
  }


  // return the constructor function
  return Team;
});
