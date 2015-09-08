'use strict';

/* jasmine specs for services go here */

describe('service', function() {

  // load modules
  beforeEach(module('dugoutApp'));

  // Test service availability
  it('check the existence of Race factory', inject(function(Race) {
    expect(Race).toBeDefined();
  }));
});
