;(function (){

  'use strict';

  angular.module('Unoverb')

    .controller('SingleClassroom', ['$scope', '$stateParams', '$location', 'HEROKU', 'ClassroomService', 'ExerciseService', '$cookies',
      function ($scope, $stateParams, $location, HEROKU, ClassroomService, ExerciseService, $cookies) {

    var endpoint = HEROKU.URL;

    var currentId = $stateParams.id;

    ClassroomService.getSingleClassroom($stateParams.id).then( function (data) {
      // console.log(data);
      $scope.singleClassroomData = data.data;

      if ($cookies.get('sessionToken')) {
        $scope.instructors = data.data.teachers;
        $scope.students = data.data.students;
        // console.log($scope.instructors);
      } else {
        $scope.instructors = "Sign in to view instructors";
        $scope.students = "Sign in to see who is enrolled in this class";
      }

    });
///
/// Request Handlers
///
    $scope.goToJoinPage = function () {
      $location.path('classrooms/' + $stateParams.id + "/join");
    };

    $scope.sendJoinRequest = function (x) {
      ClassroomService.joinClassroom(x, currentId);
    };

    $scope.goToRequestsPage = function () {
      $location.path('classrooms/' + $stateParams.id + '/joinrequests');
    };

///
///
///

///
/// Exercise Handlers
///

    $scope.newExercise = function (info, id) {
      ExerciseService.createExercise(info, id);
    };

    ExerciseService.getClassroomExercises($stateParams.id).then( function (data) {
      $scope.thisClassroomExercises = data;
    });

    $scope.goToExerciseEditPage = function (exerciseId) {
      $location.path('classrooms/' + $stateParams.id + "/exercises/" + exerciseId);
    };
///
///
///

  }]);

}());
