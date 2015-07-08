;(function (){

  'use strict';

  angular.module('Unoverb')

    .service('UserService', ['$http', 'HEROKU', '$location', '$cookies', '$state', function ($http, HEROKU, $location, $cookies, $state) {

    var endpoint = HEROKU.URL;


////
////  Built in methods, where st = sessionToken
////

    var _routeUser = function (st) {
      if (st === undefined) {

        //route to login
        $location.path('/login');

      } else if ($location.path === '/login') {

        //route home
        $location.path('/');

      }
    };


    var _updateToken = function (st) {

      if (st !== undefined) {
        $cookies.put('sessionToken', st);
      }

      _routeUser(st);
    };

    var _successLog = function (data) {

      $cookies.put('sessionToken', data.access_token);
      $cookies.put('username', data.username);
      // $cookies.put('full_name', data.first_name + " " + data.last_name);
      // $cookies.put('email', data.email);
      // $cookies.put('password', data.password);

      $location.path('/dashboard');

    };

    var _currentUser = function (data) {

    };
///
///
///

///
/// USER SESSION FUNCTIONS
///

    this.register = function (user) {

      $http.post(HEROKU.URL + 'users/signup', user)
        .success( function (data) {
          console.log(data);
        }
      );
    };


    // this.checkUser = function () {

      // var st = $cookies.get('sessionToken');
      // _updateToken(st);

    // };


    this.userLogin = function (user) {

      var params = {
        username : user.username,
        password : user.password
      };

      $http({
        method: 'POST',
        url: endpoint + 'users/login',
        params: params
      }).success( function (data) {
        _successLog(data);
      });

      $state.go('dashboard');

    };


    this.userLogout = function() {

      $cookies.remove('sessionToken');
      $cookies.remove('username');
      // $cookies.remove('full_name');
      // $cookies.remove('email');
      // $cookies.remove('password');

      // var tst = $cookies.get('sessionToken');
      $state.go('home');
    };

    this.userProfile = function () {

      HEROKU.CONFIG.headers["Access-Token"] = $cookies.get('sessionToken');

      $http({
        method : 'GET',
        url : endpoint + 'users/profile',
        params : HEROKU.CONFIG.headers
      }).success( function (data) {
        console.log(data);
      });

    };


  }]);

}());
