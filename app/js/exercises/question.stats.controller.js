;(function (){

  'use strict';

  angular.module('Unoverb')
    .controller('Question', ['$scope', '$stateParams', 'ExerciseService', '$location', 'HEROKU', '$cookies',
      function ($scope, $stateParams, ExerciseService, $location, HEROKU, $cookies) {

    ExerciseService.getQuestionStats($stateParams.questionId).then (function (data) {

      $scope.questionParams = data.question;
      $scope.questionStats = data.score_data;
      $scope.userStats = data.user_scores;
      console.log($scope.questionParams);
    });

    $scope.trunc = function (x) {
      return Math.trunc(x);
    };
  }]);
}());
