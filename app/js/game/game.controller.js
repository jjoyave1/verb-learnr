;(function (){

  'use strict';

  angular.module('Unoverb')

    .controller('Game', ['$scope','$http', 'HEROKU', '$cookies', '$q', 'GameService', 'ExerciseService', '$stateParams',
      function ($scope, $http, HEROKU, $cookies, $q, GameService, ExerciseService, $stateParams) {

    GameService.getQuestions($stateParams.exerciseId).then (function (data) {
      $scope.gameQuestions = [];
      $scope.gameQuestions.push( data );
      console.log($scope.gameQuestions);
    });

  }]);

}());
