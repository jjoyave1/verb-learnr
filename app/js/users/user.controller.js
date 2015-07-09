;(function (){

  'use strict';

  angular.module('Unoverb')

    .controller('User', ['$scope', '$http', 'UserService', 'HEROKU', '$location', '$cookies', '$mdToast', '$q', '$mdBottomSheet', '$state',

      function ($scope, $http, UserService, HEROKU, $location, $cookies, $mdToast, $q, $mdBottomSheet, $state) {

      var User = function(options) {

        this.username = options.username;
        this.first_name = options.first_name;
        this.last_name = options.last_name;
        this.email = options.email;
        this.password = options.password;

      };

      $scope.userSignUp = function (x) {

        var user = new User({

          username : x.username,
          first_name : x.first_name,
          last_name : x.last_name,
          email : x.email,
          password : x.password

        });

        UserService.register(user);

      };

      $scope.login = function (x) {

        UserService.userLogin(x);

      };

      $scope.logout = function () {

        UserService.userLogout();
        $scope.showLogoutToast();
        // $scope.currentUser = {};

      };



///
/// LOGIN ACCORDION FUNCTIONS
///
      $scope.regSlide = function () {
        $('#reg-card').slideDown(500);
        $('#login-card').slideUp(500);
      };

      $scope.loginSlide = function () {
        $('#login-card').slideDown(500);
        $('#reg-card').slideUp(500);
      };
///
///
///

// ///
// /// PROFILE HANDLERS
// ///

//       $scope.getProfile = function () {

//         UserService.userProfile()
//         .then( function (data) {
//           return data;
//         });
//       };

//       $scope.currentUser = UserService.userProfile().then( function (data) { return data; });

//       $scope.updateProfile = function (x) {

//         var user = new User({

//           username : x.username,
//           first_name : x.first_name,
//           last_name : x.last_name,
//           email : x.email,
//           password : x.password

//         });

//         UserService.editProfile(user);

//       };

//       $scope.showDeleteSheet = function ($event) {
//         $mdBottomSheet.show({
//           templateUrl : "js/users/templates/deletesheet.tpl.html",
//           targetEvent : $event
//         });
//       };

//       $scope.deleteUser = function(pw) {

//         // console.log("ayy");

//         UserService.deleteProfile(pw);

//         $mdBottomSheet.hide();

//         $state.go('login');
//       };

//       $scope.enableInputs = function () {
//         $('#prof-firstname').prop('disabled', false);
//         $('#prof-lastname').prop('disabled', false);
//         $('#prof-email').prop('disabled', false);
//         $('#prof-avatar').prop('disabled', false);
//         $('#prof-submit').prop('disabled', false);
//       };

// ///
// ///
// ///

///
/// LOGIN TOAST FUNCTION
///

      $scope.toastPosition = {
          bottom: true,
          top: true,
          left: false,
          right: false
        };
        $scope.getToastPosition = function() {
          return Object.keys($scope.toastPosition)
            .filter(function(pos) { return $scope.toastPosition[pos]; })
            .join(' ');
        };
        $scope.showLoginToast = function() {
          $mdToast.show({
            controller: 'ToastCtrl',
            templateUrl: 'js/users/templates/logtoast.tpl.html',
            hideDelay: 6000,
            position: $scope.getToastPosition()
          });
        };
        $scope.showLogoutToast = function() {
          $mdToast.show({
            controller: 'ToastCtrl',
            templateUrl: 'js/users/templates/logouttoast.tpl.html',
            hideDelay: 6000,
            position: $scope.getToastPosition()
          });
        };

///
///
///

///
/// TOAST CLOSE HANDLER
///

  }])

  .controller('ToastCtrl', function ($scope, $mdToast) {
    $scope.closeToast = function() {
      $mdToast.hide();
    };
  });

///
///
///

}());
