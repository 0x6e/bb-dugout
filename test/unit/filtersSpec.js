'use strict'

/* jasmine specs for filters go here */

describe('filter', function() {
  beforeEach(module('dugoutFilters'));

  describe('skill', function() {

    it('should replace empty skill lists with "None"', inject(function(skillFilter) {
      expect(skillFilter([])).toBe('None');
    }));

    it('should add a comma between two or more skills', inject(function(skillFilter) {
      expect(skillFilter(['Block', 'Dodge'])).toBe('Block, Dodge');
    }));

    it('should not add a comma to a single skill', inject(function(skillFilter) {
      expect(skillFilter(['Tackle'])).toBe('Tackle');
    }));
  });

  describe('skillType', function() {

    it('should return the first character of the skillType', inject(function(skillTypeFilter) {
      expect(skillTypeFilter(['General'])).toBe('G');
    }));

    it('should concatonate the skill types', inject(function(skillTypeFilter) {
      expect(skillTypeFilter(['Strength', 'Mutation'])).toBe('SM');
    }));
  });
});
