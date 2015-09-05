var dugoutApp = angular.module('dugoutApp', []);

dugoutApp.controller('TeamCtrl', function ($scope) {
    $scope.players = [
        {
            "max": 16,
            "title": "Lineman",
            "cost": 70000,
            "ma": 6,
            "st": 3,
            "ag": 4,
            "av": 8,
            "skills": [],
            "normal": ["General", "Agility"],
            "double": ["Strength", "Passing"]
        }
        ,{
            "max": 2,
            "title": "Thrower",
            "cost": 90000,
            "ma": 6,
            "st": 3,
            "ag": 4,
            "av": 8,
            "skills": ["Pass", "Safe Throw"],
            "normal": ["General", "Agility", "Passing"],
            "double": ["Strength"]
        },
        {
            "max": 4,
            "title": "Catcher",
            "cost": 90000,
            "ma": 8,
            "st": 3,
            "ag": 4,
            "av": 7,
            "skills": ["Catch"],
            "normal": ["General", "Agility"],
            "double": ["Strength", "Passing"]
        },
        {
            "max": 2,
            "title": "Blitzer",
            "cost": 100000,
            "ma": 7,
            "st": 3,
            "ag": 4,
            "av": 8,
            "skills": ["Block"],
            "normal": ["General", "Agility"],
            "double": ["Strength", "Passing"]
        }
    ];
});
