;(function (){

  'use strict';

  angular.module('Unoverb')

    .service('ExerciseService', ['$http', 'HEROKU', function ($http, HEROKU) {

      var endpoint = HEROKU.URL;

      this.createExercise = function () {

        var test1 = {test: 'test'},
            test2 = {test: 'test'},
                x = [test1, test2],
            stuff = angular.toJson({data: x});

        console.log(stuff);

        HEROKU.CONFIG.headers['Content-Type'] = "application/json";

        $http({
          method: 'POST',
          url: endpoint + "exercises/2/question",
          headers: HEROKU.CONFIG.headers,
          data: stuff
        }).then( function (data) {
          console.log( data );
        });
      };

    }]);

}());
