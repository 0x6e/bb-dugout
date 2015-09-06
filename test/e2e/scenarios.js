'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('The Dugout App', function() {

  it('should redirect index.html to index.html#/races', function() {
    browser.get('index.html');
    browser.getLocationAbsUrl().then( function(url) {
      expect(url).toEqual('/races');
    });
  });

  describe('Race list view', function() {

    beforeEach(function() {
      browser.get('index.html#/races');
    });

    it('should filter the race list as a user types into the search box', function() {

      var raceList = element.all(by.repeater('race in races'));
      var query = element(by.model('query.name'));

      expect(raceList.count()).toBe(5);

      query.sendKeys('Human');
      expect(raceList.count()).toBe(1);

      query.clear();
      query.sendKeys('chaos');
      expect(raceList.count()).toBe(2);
      query.clear()
    });

    it('should render race specific links', function() {

      var query = element(by.model('query.name'));
      query.sendKeys('amazon');
      element.all(by.css('.races li a')).first().click();
      browser.getLocationAbsUrl().then(function(url) {
        expect(url).toBe('/races/amazon');
      });
    });
  });

  describe('Race detail view', function() {
    beforeEach(function() {
      browser.get('index.html#/races/amazon');
    });

    it('should display a placeholder page with raceId', function() {
      expect(element(by.binding('raceId')).getText()).toBe('amazon');
    });
  });
});
