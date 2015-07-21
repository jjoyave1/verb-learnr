;(function (){

  'use strict';

  angular.module('Unoverb')

    .service('GameService', ['$http', 'HEROKU', '$cookies', '$q', function ($http, HEROKU, $cookies, $q) {


  var endpoint = HEROKU.URL;

  this.getQuestions = function (id) {

    var deferred = $q.defer();

    HEROKU.CONFIG.headers["Access-Token"] = $cookies.get('sessionToken');

    $http({
      method: 'GET',
      url: endpoint + "/exercises/" + id + "/games/play",
      headers: HEROKU.CONFIG.headers
    }).then( function (res) {
      return deferred.resolve(res.data);
    });
    return deferred.promise;
  };

    }]);

}());
