;(function (){

  'use strict';

  angular.module('Unoverb')

    .controller('Game', ['$scope','$http', 'HEROKU', '$cookies', '$q', 'GameService', 'ExerciseService', '$stateParams',
      function ($scope, $http, HEROKU, $cookies, $q, GameService, ExerciseService, $stateParams) {

    $scope.startGame = function () {

      GameService.getQuestions($stateParams.exerciseId).then (function (data) {
        $scope.questionData = data;
        $scope.current1 = $scope.questionData.pop();
        $scope.current2 = $scope.questionData.pop();
        $scope.current3 = $scope.questionData.pop();
        $scope.finalData = [];

        $("#game-start-field").fadeOut();
        $("#game-quest").fadeIn();

      });

    };

    $scope.submitGuess = function (answer) {
      var answerData = {
        question_id : $scope.current.question_id,
        guess : answer.guess
      };

      // $scope.finalData.push(answerData);
      // $("#game-quest").fadeOut();

      // setTimeout(function () {
      //   $("#interim").fadeIn();
      //   $("#interim-btn").fadeIn();
      // }, 500);

      // return $scope.finalData;
      return answerData;
    };

    $scope.continueGame = function () {

      $("#game-quest").fadeIn();

      if ($scope.questionData > 0) {
        $scope.current = $scope.questionData.pop();
        console.log($scope.current, "current");
      } else {
        console.log("no data");
      }
    };

  }]);

}());
