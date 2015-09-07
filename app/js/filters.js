angular.module('dugoutFilters', []).filter('skill', function() {
  return function(input) {
    if (input.length == 0) {
      return 'None';
    } else {
      var skills = '';
      for (var i = 0; i < input.length; ++i) {
        skills += input[i];
        if (i != input.length -1)
          skills += ', ';
      }
      return skills;
    }
  }
}).filter('skillType', function() {
  return function(input) {
    var skills = '';
    for (var i = 0; i < input.length; ++i) {
      skills += input[i].charAt(0);
    }
    return skills;
  }
});
