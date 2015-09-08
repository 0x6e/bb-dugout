'use strict'

/* services */

var dugoutServices = angular.module('dugoutServices', ['ngResource']);

dugoutServices.factory('Race', ['$resource',
  function($resource) {
    return $resource('races/:raceId.json', {}, {
      query: {method:'GET', params:{raceId:'races'}, isArray:true}
    });
  }]);
