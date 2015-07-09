;(function (){

  'use strict';

  angular.module('Unoverb')

    .service('UserService', ['$http', 'HEROKU', '$location', '$cookies', '$state', '$q', function ($http, HEROKU, $location, $cookies, $state, $q) {

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
      HEROKU.CONFIG.headers["Access-Token"] = "";
      $cookies.remove('username');

      $state.go('home');
    };

    this.userProfile = function () {

      var deferred = $q.defer();
      HEROKU.CONFIG.headers["Access-Token"] = $cookies.get('sessionToken');
      $http.get(endpoint + 'users/profile', HEROKU.CONFIG).then( function (res) {

        return deferred.resolve(res.data);

      });

      return deferred.promise;
    };


  }]);

}());
