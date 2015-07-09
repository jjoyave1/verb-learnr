;(function (){

  'use strict';

  angular.module('Unoverb')

    .controller('Profile', ['$scope', '$http', 'UserService', 'HEROKU', '$location', '$cookies', '$mdToast', '$q', '$mdBottomSheet', '$state',

      function ($scope, $http, UserService, HEROKU, $location, $cookies, $mdToast, $q, $mdBottomSheet, $state) {

      var User = function(options) {

        this.username = options.username;
        this.first_name = options.first_name;
        this.last_name = options.last_name;
        this.email = options.email;
        this.password = options.password;

      };

///
/// PROFILE HANDLERS
///

      $scope.getProfile = function () {

        UserService.userProfile()
        .then( function (data) {
          return data;
        });
      };

      $scope.currentUser = UserService.userProfile().then( function (data) { return data; });

      $scope.updateProfile = function (x) {

        var user = new User({

          username : x.username,
          first_name : x.first_name,
          last_name : x.last_name,
          email : x.email,
          password : x.password

        });

        UserService.editProfile(user);

      };

      $scope.showDeleteSheet = function ($event) {
        $mdBottomSheet.show({
          templateUrl : "js/users/templates/deletesheet.tpl.html",
          targetEvent : $event
        });
      };

      $scope.deleteUser = function(pw) {

        // console.log("ayy");

        UserService.deleteProfile(pw);

        $mdBottomSheet.hide();

        $state.go('login');
      };

      $scope.enableInputs = function () {
        $('#prof-firstname').prop('disabled', false);
        $('#prof-lastname').prop('disabled', false);
        $('#prof-email').prop('disabled', false);
        $('#prof-avatar').prop('disabled', false);
        $('#prof-submit').prop('disabled', false);
      };

      $scope.showPasswordSheet = function ($event) {
        $mdBottomSheet.show({
          templateUrl : "js/users/templates/passwordsheet.tpl.html",
          targetEvent : $event
        });
      };

      $scope.modifyPassword = function (pw) {

        UserService.changePw(pw);
        $mdBottomSheet.hide();
        $state.go('profile');

      };

///
///
///
  }]);


}());
