;(function (){

  'use strict';

  angular.module('Unoverb')

    .service('ClassroomService', ['$http', 'HEROKU', '$location', '$cookies', '$state', '$q', '$stateParams',

      function ($http, HEROKU, $location, $cookies, $state, $stateParams, $q) {

    var endpoint = HEROKU.URL;


    this.createClassroom = function (params) {

      HEROKU.CONFIG.headers["Access-Token"] = $cookies.get('sessionToken');

      $http({
        method: 'POST',
        url: endpoint + 'classrooms/create',
        params: params,
        headers: HEROKU.CONFIG.headers
      }).success( function (data) {
        console.log(data);
      });
    };

    this.getClassroomTable = function () {

      var params = {sort_by : "top", language : "spanish" };
      return $http({

        method: 'GET',
        url: endpoint + 'classrooms',
        params: params

      });
    };

    this.getSingleClassroom = function (id) {
      if ($cookies.sessionToken !== 0) {

        HEROKU.CONFIG.headers["Access-Token"] = $cookies.get('sessionToken');

        return $http({

          method: 'GET',
          url: endpoint + 'classrooms/' + id,
          headers: HEROKU.CONFIG.headers

        });
      }
    };

    this.joinClassroom = function (role, message) {

      var params = {
        role : role,
        message : message
      };

      HEROKU.CONFIG.headers["Access-Token"] = $cookies.get('sessionToken');

      $http({
        method: 'POST',
        url: endpoint + "classrooms/" + $stateParams.id + "/join",
        params: params,
        headers: HEROKU.CONFIG.headers
      });
    };

  }]);

}());
