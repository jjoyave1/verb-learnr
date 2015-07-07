;(function (){

  'use strict';

  angular.module('Unoverb')

    .controller('User', ['$scope', '$http', 'UserService', 'HEROKU', '$location', '$cookies',

      function ($scope, $http, UserService, HEROKU, $location, $cookies) {

      var User = function(options) {
        this.username = options.username;
        this.password = options.password;
        this.email = options.email;
      };

      $scope.userSignUp = function (x) {
        var user = new User(x);

        // $http.post(HEROKU.URL + 'users/', user, HEROKU.CONFIG)
        // .success( function() {

        //   $location.path('/');
        //   $scope.user = {};

        // });
      };

      $scope.login = function () {
        // UserService.userLogin(x);
      };

      $scope.logout = function () {
        // UserService.userLogout();
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

      $scope.username = $cookies.get('username');

  }]);

}());
