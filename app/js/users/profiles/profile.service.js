;(function (){

  'use strict';

  angular.module('Unoverb')

    .service('ProfileService', ['$http', 'HEROKU', '$location', '$cookies', '$state', '$q', '$rootScope',

      function ($http, HEROKU, $location, $cookies, $state, $q, $rootScope) {

    var endpoint = HEROKU.URL;

    this.getUserClassrooms = function () {

      var deferred = $q.defer();

      HEROKU.CONFIG.headers["Access-Token"] = $cookies.get('sessionToken');

      $http({
        method: 'GET',
        url: endpoint + "user/classrooms/",
        headers: HEROKU.CONFIG.headers
      }).then( function (res) {

        return deferred.resolve(res.data);

      });

      return deferred.promise;
    };

    // this.getJoinRequests = function (id) {
    //   $http({
    //     method: 'GET',
    //     url: endpoint + "/classrooms/" + id + "/requests";
    //   })
    // };

  }]);

}());
