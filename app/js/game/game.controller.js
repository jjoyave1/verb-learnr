;(function (){

  'use strict';

  angular.module('Unoverb')

    .controller('Game', ['$scope','$http', 'HEROKU', '$cookies', '$q', 'GameService', 'ExerciseService', '$stateParams',
      function ($scope, $http, HEROKU, $cookies, $q, GameService, ExerciseService, $stateParams) {

    $scope.startGame = function () {

      GameService.getQuestions($stateParams.exerciseId).then (function (data) {
        $scope.questionData = data;

        // $scope.current = $scope.questionData.pop();
        $scope.current1 = $scope.questionData.pop();
        $scope.current2 = $scope.questionData.pop();
        $scope.current3 = $scope.questionData.pop();
        $scope.finalData = [];

        for (var i = 0; i <= 2 ; i++) {

        }

        $("#game-start-field").fadeOut();
        $("#game-quest1").fadeIn();

        $scope.submitGuessOne = function (answer) {
          var answerData = {
            question_id : $scope.current1.question_id,
            guess : answer.guess
          };

          $scope.finalData.push(answerData);

          $("#game-quest1").fadeOut();
          $("#game-quest2").fadeIn();

        };

        $scope.submitGuessTwo = function (answer) {
          var answerData = {
            question_id : $scope.current2.question_id,
            guess : answer.guess
          };

          $scope.finalData.push(answerData);

          $("#game-quest2").fadeOut();
          $("#game-quest3").fadeIn();
        };

        $scope.submitGuessThree = function (answer) {
          var answerData = {
            question_id : $scope.current3.question_id,
            guess : answer.guess
          };

          $scope.finalData.push(answerData);

          $("#game-quest2").fadeOut();
          $("#game-quest3").fadeIn();

          GameService.sendAnswers($scope.finalData, $stateParams.exerciseId);
        };

      });

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


///
/// SP CHAR HANDLERS
///

    $('#accent-a').on('click', function () {
      var answer = $('#answer-field');
      answer.val(answer.val() + "á");
    });
    $('#accent-e').on('click', function () {
      var answer = $('#answer-field');
      answer.val(answer.val() + "é");
    });
    $('#accent-i').on('click', function () {
      var answer = $('#answer-field');
      answer.val(answer.val() + "í");
    });
    $('#accent-o').on('click', function () {
      var answer = $('#answer-field');
      answer.val(answer.val() + "ó");
    });
    $('#accent-u').on('click', function () {
      var answer = $('#answer-field');
      answer.val(answer.val() + "ú");
    });
    $('#accent-n').on('click', function () {
      var answer = $('#answer-field');
      answer.val(answer.val() + "ñ");
    });

    $('#accent-a2').on('click', function () {
      var answer = $('#answer-field2');
      answer.val(answer.val() + "á");
    });
    $('#accent-e2').on('click', function () {
      var answer = $('#answer-field2');
      answer.val(answer.val() + "é");
    });
    $('#accent-i2').on('click', function () {
      var answer = $('#answer-field2');
      answer.val(answer.val() + "í");
    });
    $('#accent-o2').on('click', function () {
      var answer = $('#answer-field2');
      answer.val(answer.val() + "ó");
    });
    $('#accent-u2').on('click', function () {
      var answer = $('#answer-field2');
      answer.val(answer.val() + "ú");
    });
    $('#accent-n2').on('click', function () {
      var answer = $('#answer-field2');
      answer.val(answer.val() + "ñ");
    });

    $('#accent-a3').on('click', function () {
      var answer = $('#answer-field3');
      answer.val(answer.val() + "á");
    });
    $('#accent-e3').on('click', function () {
      var answer = $('#answer-field3');
      answer.val(answer.val() + "é");
    });
    $('#accent-i3').on('click', function () {
      var answer = $('#answer-field3');
      answer.val(answer.val() + "í");
    });
    $('#accent-o3').on('click', function () {
      var answer = $('#answer-field3');
      answer.val(answer.val() + "ó");
    });
    $('#accent-u3').on('click', function () {
      var answer = $('#answer-field3');
      answer.val(answer.val() + "ú");
    });
    $('#accent-n3').on('click', function () {
      var answer = $('#answer-field3');
      answer.val(answer.val() + "ñ");
    });
  }]);

}());
