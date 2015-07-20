;(function (){

  'use strict';

  angular.module('Unoverb')

    .controller('SingleClassroom', ['$scope', '$stateParams', '$location', 'HEROKU', 'ClassroomService', '$cookies', function ($scope, $stateParams, $location, HEROKU, ClassroomService, $cookies) {

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

    $scope.goToJoinPage = function () {
      $location.path('classrooms/' + $stateParams.id + "/join");
    };

    $scope.sendJoinRequest = function (x) {
      ClassroomService.joinClassroom(x, currentId);
    };

  }]);

}());
