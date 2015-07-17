;(function (){

  'use strict';

  angular.module('Unoverb')

    .controller('Classroom', ['$scope', '$http', 'UserService', 'ClassroomService', 'HEROKU', '$location', '$cookies', '$q', '$state',

      function ($scope, $http, UserService, ClassroomService, HEROKU, $location, $cookies, $q, $state) {

    $scope.startClass = function (info) {

      var classInfo = {

        name : info.name,
        description : info.description,
        code : info.code,
        language : info.language

      };

      ClassroomService.createClassroom(classInfo);
    };



  }]);

}());
