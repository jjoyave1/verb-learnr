;(function (){

  'use strict';

  angular.module('Unoverb')

    .service('ClassroomService', ['$http', 'HEROKU', '$location', '$cookies', '$state', '$q',

      function ($http, HEROKU, $location, $cookies, $state, $q) {

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

    this.getClassrooms = function () {

      var deferred = $q.defer();
      var params = {sort_by : "top", language : "spanish" };
      $http({

        method: 'GET',
        url: endpoint + 'classrooms',
        params: params

      }).then( function (res) {
        return deferred.resolve(res.data);
      });

      // console.log(deferred.promise);
      return deferred.promise;
    };


  }]);

}());
