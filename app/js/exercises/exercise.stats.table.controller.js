;(function (){

  'use strict';

  angular.module('Unoverb')

  .controller('StatsTable', ['$scope','$q', 'ExerciseService', '$stateParams', function ($scope, $q, ExerciseService, $stateParams) {

    $scope.toggleSearch = false;
    $scope.statheaders = [
      {
        name:'Question',
        field:'question'
      },
      {
        name: 'Attempts',
        field: 'attempts'
      },
      {
        name:'Correct',
        field: 'correct'
      },
      {
        name: 'Accuracy',
        field: 'accuracy'
      }
    ];

    console.log($scope.headers);

    ExerciseService.getExerciseStats($stateParams.exerciseId).then( function (data) {
      $scope.exerciseScores = data;
      console.log($scope.exerciseScores);
    });

    $scope.custom = {name: 'bold', description:'grey',last_modified: 'grey'};
    $scope.sortable = ['name', 'description', 'last_modified'];

    $scope.classSearchParam = "top";
    $scope.pageCount = 1;

  }]);

}());
