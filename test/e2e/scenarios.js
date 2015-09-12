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

    it('should render race specific links', function() {

      element.all(by.css('.races .row .col-md-6 a')).first().click();
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
      expect(element(by.binding('race.name')).getText()).toBe('Amazon');
    });
  });
});
