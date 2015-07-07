;(function (){

  'use strict';

  angular.module('Unoverb').service('VerbService', ['$http', 'HEROKU', '$routeParams', function ($http, HEROKU, $routeParams) {

    var endpoint = HEROKU.URL;

  }]);

}());
