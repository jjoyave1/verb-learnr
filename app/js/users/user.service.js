;(function (){

  'use strict';

  angular.module('Unoverb')

    .service('UserService', ['$http', 'HEROKU', '$location', '$cookies', '$state', '$q',

      function ($http, HEROKU, $location, $cookies, $state, $q) {


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
      // $cookies.put('username', data.username);

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
        console.log(deferred);
        return deferred.resolve(res.data);

      });

      return deferred.promise;
    };

    this.editProfile = function (user) {

      HEROKU.CONFIG.headers["Access-Token"] = $cookies.get('sessionToken');

      $http.put(endpoint + 'users/profile', user, HEROKU.CONFIG)
        .success( function (data) {
          // console.log(data);
        });

    };

    this.deleteProfile = function(data) {

      HEROKU.CONFIG.headers["Access-Token"] = $cookies.get('sessionToken');

      console.log(HEROKU.CONFIG);

      $http({

        method: 'DELETE',
        url: endpoint + 'users/delete',
        headers: HEROKU.CONFIG.headers,
        params: data

      }).success( function (x) {

        console.log(x);

        HEROKU.CONFIG.headers["Access-Token"] = "";

        $cookies.remove('sessionToken');
      });
    };

    this.changePw = function (pw) {
      var params = {
        password: pw.password,
        new_password: pw.new_password
      };

      HEROKU.CONFIG.headers["Access-Token"] = $cookies.get('sessionToken');

      $http({

        method: 'PUT',
        url: endpoint + 'users/password',
        headers: HEROKU.CONFIG.headers,
        params: params

      }).success( function (data) {
        console.log(data);
      });
    };



  }]);

}());
