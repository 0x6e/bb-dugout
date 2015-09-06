'use strict';

/* jasmine specs for controllers go here */

describe('Dugout controllers', function() {

  beforeEach(module('dugoutApp'));

  describe('RaceListCtrl', function() {
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('races/races.json').respond([{name: 'Human'}, {name: 'Orc'}]);

      scope = $rootScope.$new();
      ctrl = $controller('RaceListCtrl', {$scope: scope});
    }));

    it('should create "races" model with 2 races fetched from xhr', inject(function($controller) {
      expect(scope.races).toBeUndefined();
      $httpBackend.flush();

      expect(scope.races).toEqual([{name: 'Human'}, {name: 'Orc'}]);
    }));
  });

  describe('RaceDetailCtrl', function() {
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('races/race.json').respond([{name: 'A Race'}]);

      $routeParams.raceId = 'race';
      scope = $rootScope.$new();
      ctrl = $controller('RaceDetailCtrl', {$scope: scope});
    }));

    it('should fetch phone details', function() {
      expect(scope.race).toBeUndefined();
      $httpBackend.flush();

      expect(scope.race).toEqual([{name: 'A Race'}]);
    });
  });
});
