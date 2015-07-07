;(function (){

  'use strict';

  angular.module('Unoverb')

    .service('UserService', ['$http', 'HEROKU', '$location', function ($http, HEROKU, $location) {

    // var endpoint = HEROKU.URL;


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

      // if (st !== undefined) {
      //   HEROKU.CONFIG.headers[''] = st;
      // }

      // _routeUser(st);
    };


    this.checkUser = function () {

      var st = $cookies.get('sessionToken');
      _updateToken(st);

    };


    this.userLogin = function (data) {

      var params = "";
      console.log('logging in', params);

    };


    this.userLogout = function() {

      // $http.post(endpoint + 'logout', {}, HEROKU.CONFIG)
      //   .success( function () {
      //     $cookies.remove('sessionToken');
      //     $cookies.remove('userObjectId');
      //     $location.path('/register');
      //     HEROKU.CONFIG.headers[''] = '';
      //   }
      // );

      console.log('logging out');
    };


  }]);

}());
