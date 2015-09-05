'use strict';

/* jasmine specs for controllers go here */

describe('RaceListCtrl', function() {

  beforeEach(module('dugoutApp'));

  it('should create "races" model with 2 races', inject(function($controller) {
    var scope = {},
      ctrl = $controller('RaceListCtrl', {$scope:scope});

    expect(scope.races.length).toBe(2);
  }));

});
