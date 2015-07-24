;(function (){

  'use strict';

  angular.module('Unoverb')
    .controller('Exercise', ['$scope', '$stateParams', 'ExerciseService', '$location', 'HEROKU', '$cookies',
      function ($scope, $stateParams, ExerciseService, $location, HEROKU, $cookies) {

    var endpoint = HEROKU.URL;

    function numgen (arr) {
      var repeats = arr.length;
      var num = 1;
      var numbers = [];

      for (var i = 0; i < repeats; i++) {
        numbers.push(num);
        num++;
      }
      return numbers;
    }

    ExerciseService.getVerbForms().then( function (data) {
      $scope.verbForms = data;
    });

    ExerciseService.getVerbTenses().then( function (data) {
      $scope.verbTenses = data;
    });

    $scope.submitQuestion = function (data) {
      ExerciseService.addExerciseQuestion(data, $stateParams.exerciseId);
    };

    ExerciseService.populateQuestionsForExercise($stateParams.exerciseId).then( function (data) {
      $scope.exerciseQuestions = data;

      $scope.exerciseNumbers = numgen($scope.exerciseQuestions);

    });



    $scope.dataFormat = function(str) {

      var params = {
        language : "spanish"
      };

      HEROKU.CONFIG.headers["Access-Token"] = $cookies.get('sessionToken');
      return {
        search: str,
        language: "spanish"
      };
    };

    $scope.goToGame = function () {
      $location.path('classrooms/' + $stateParams.id + '/exercises/' + $stateParams.exerciseId + '/play');
    };

///
/// LOADING STATISTICS
/// implementing table template/controller with some of the same functions
    ExerciseService.getExerciseStats($stateParams.exerciseId).then( function (data) {
      $scope.exerciseScores = data;
      console.log($scope.exerciseScores);
    });

    $scope.goToQuestionStats = function (questionId) {
      $location.path('classrooms/' + $stateParams.id + '/exercises/' + $stateParams.exerciseId + '/statistics/' + questionId);
    };

    $scope.trunc = function (x) {
      return Math.trunc(x);
    };


///
///
///

  }]);
}());
