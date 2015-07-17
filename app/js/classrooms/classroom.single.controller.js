;(function (){

  'use strict';

  angular.module('Unoverb')

    .controller('SingleClassroom', ['$scope', '$stateParams', 'HEROKU', 'ClassroomService', '$cookies', function ($scope, $stateParams, HEROKU, ClassroomService, $cookies) {

    var endpoint = HEROKU.URL;

    ClassroomService.getSingleClassroom($stateParams.id).then( function (data) {
      console.log(data);
      $scope.singleClassroomData = data.data;

      if ($cookies.get('sessionToken')) {
        $scope.instructors = data.data.teachers;
        $scope.students = data.data.students;
        console.log($scope.instructors);
      } else {
        $scope.instructors = "Sign in to view instructors";
        $scope.students = "Sign in to see who is enrolled in this class";
      }

    });

  }]);

}());
