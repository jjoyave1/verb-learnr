;(function (){

  'use strict';

  angular.module('Unoverb')

    .service('ProfileService', ['$http', 'HEROKU', '$location', '$cookies', '$state', '$q', '$rootScope',

      function ($http, HEROKU, $location, $cookies, $state, $q, $rootScope) {

    var endpoint = HEROKU.URL;

    this.getUserClassrooms = function () {

      HEROKU.CONFIG.headers["Access-Token"] = $cookies.get('sessionToken');

      return $http({
        method: 'GET',
        url: endpoint + "user/classrooms/",
        headers: HEROKU.CONFIG.headers
      });

    };

    // this.getJoinRequests = function (id) {
    //   $http({
    //     method: 'GET',
    //     url: endpoint + "/classrooms/" + id + "/requests";
    //   })
    // };

  }]);

}());
