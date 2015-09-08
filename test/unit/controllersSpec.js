'use strict';

/* jasmine specs for controllers go here */

describe('Dugout controllers', function() {

  beforeEach(function() {
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('dugoutApp'));
  beforeEach(module('dugoutServices'));

  describe('RaceListCtrl', function() {
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('races/races.json').respond([{name: 'Human'}, {name: 'Orc'}]);

      scope = $rootScope.$new();
      ctrl = $controller('RaceListCtrl', {$scope: scope});
    }));

    it('should create "races" model with 2 races fetched from xhr', function() {
      expect(scope.races).toEqualData([]);
      $httpBackend.flush();

      expect(scope.races).toEqualData([{name: 'Human'}, {name: 'Orc'}]);
    });
  });

  describe('RaceDetailCtrl', function() {
    var scope, $httpBackend, ctrl,
      aRaceData = function() {
        return {name: 'A Race'};
      };

    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('races/race.json').respond(aRaceData());

      $routeParams.raceId = 'race';
      scope = $rootScope.$new();
      ctrl = $controller('RaceDetailCtrl', {$scope: scope});
    }));

    it('should fetch phone details', function() {
      expect(scope.race).toEqualData({});
      $httpBackend.flush();

      expect(scope.race).toEqualData(aRaceData());
    });
  });
});
