'use strict';

/* jasmine specs for controllers go here */

describe('Dugout controllers', function() {

  describe('RaceListCtrl', function() {
    var scope, ctrl, $httpBackend;

    beforeEach(module('dugoutApp'));
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
});
