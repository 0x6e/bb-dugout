'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('The Dugout App', function() {

  describe('Race list view', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    var query = element(by.model('query'));

    it('should filter the race list as a user types into the search box', function() {

      var raceList = element.all(by.repeater('race in races'));

      expect(raceList.count()).toBe(2);

      query.sendKeys('Human');
      expect(raceList.count()).toBe(1);

      query.clear();
      query.sendKeys('Orc');
      expect(raceList.count()).toBe(1);
      query.clear()
    });

    it('should display the current filter value in the title bar', function() {

      expect(browser.getTitle()).toMatch(/The Dugout\s*$/);
      query.sendKeys('Orc');
      expect(browser.getTitle()).toMatch(/The Dugout: Orc$/);

    });
  });
});
