;(function (){

  'use strict';

  angular.module('Unoverb')
    .controller('Exercise', ['$scope', '$stateParams', 'ExerciseService', '$location', 'HEROKU', '$cookies',
      function ($scope, $stateParams, ExerciseService, $location, HEROKU, $cookies) {

    var endpoint = HEROKU.URL;

    ExerciseService.getVerbForms().then( function (data) {
      $scope.verbForms = data;
    });

    ExerciseService.getVerbTenses().then( function (data) {
      $scope.verbTenses = data;
    });

    // $scope.searchAPI = ExerciseService.searchVerbs(verb);

    $scope.dataFormat = function(str) {

      var params = {
        language : "spanish"
      };

      HEROKU.CONFIG.headers["Access-Token"] = $cookies.get('sessionToken');
      return {
        search: str,
        headers: HEROKU.CONFIG.headers,
        language: "spanish"
      };
    };


  }]);
}());
