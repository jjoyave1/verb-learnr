;(function (){

  'use strict';

  angular.module('Unoverb')

    .controller('ClassroomRequests', ['$scope', '$stateParams', '$location', 'HEROKU', 'ClassroomService', '$cookies', function ($scope, $stateParams, $location, HEROKU, ClassroomService, $cookies) {

  var endpoint = HEROKU.URL;


  ClassroomService.getJoinRequests($stateParams.id)
    .then( function (data) {
      $scope.userJoinRequests = data;
  });


  $scope.processRequest = function (id) {
    ClassroomService.processJoinRequest(id);
  };

  $scope.denyRequest = function (id) {
    ClassroomService.denyJoinRequest(id);
  };



  }]);

}());
