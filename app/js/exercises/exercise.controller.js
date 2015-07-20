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



  }]);
}());
