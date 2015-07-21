;(function (){

  'use strict';

  angular.module('Unoverb')

    .service('ExerciseService', ['$http', 'HEROKU', '$cookies', '$q', function ($http, HEROKU, $cookies, $q) {

      var endpoint = HEROKU.URL;

      this.createExercise = function (info, id) {

        var data = {
          name : info.name,
          description : info.description
        };

        HEROKU.CONFIG.headers['Access-Token'] = $cookies.get('sessionToken');

        $http({
          method: 'POST',
          url: endpoint + "classrooms/" + id + "/exercise",
          headers: HEROKU.CONFIG.headers,
          data: data
        }).then( function (data) {
          console.log( data );
        });
      };

      this.getClassroomExercises = function (id) {

        var deferred = $q.defer();

        HEROKU.CONFIG.headers['Access-Token'] = $cookies.get('sessionToken');

          $http({
            method: 'GET',
            url: endpoint + "classrooms/" + id + "/exercises",
            headers: HEROKU.CONFIG.headers
          }).then ( function (res) {
            return deferred.resolve(res.data);
          });
          return deferred.promise;
        };
///
/// VERB HANDLERS
///
      this.getVerbForms = function () {

        var deferred = $q.defer();

        var language = {language: "spanish"};

        HEROKU.CONFIG.headers['Access-Token'] = $cookies.get('sessionToken');

        $http({
          method: 'GET',
          url: endpoint + "forms",
          headers: HEROKU.CONFIG.headers,
          params: language
        }).then ( function (res) {
          return deferred.resolve(res.data);
        });
        return deferred.promise;
      };

      this.getVerbTenses = function () {

        var deferred = $q.defer();

        var language = {language: "spanish"};

        HEROKU.CONFIG.headers['Access-Token'] = $cookies.get('sessionToken');

        $http({
          method: 'GET',
          url: endpoint + "tenses",
          headers: HEROKU.CONFIG.headers,
          params: language
        }).then ( function (res) {
          return deferred.resolve(res.data);
        });
        return deferred.promise;
      };

      this.getVerbSearch = function (info) {

        var deferred = $q.defer();

        var params = {
          language : "spanish",
          search : info.search
        };

        HEROKU.CONFIG.headers['Access-Token'] = $cookies.get('sessionToken');

        $http({
          method: 'GET',
          url: endpoint + "verbs/search",
          headers: HEROKU.CONFIG.headers,
          params: params
        }).then ( function (res) {
          return deferred.resolve(res.data);
        });
        return deferred.promise;
      };

      this.addExerciseQuestion = function (info, id) {


        var data = {
          form : info.form,
          combined_tense_english : info.combined_tense_english,
          verb : $("#hidden_verb_value").val()
        },
            dataArray = [];

        dataArray.push(data);



        HEROKU.CONFIG.headers['Access-Token'] = $cookies.get('sessionToken');
        HEROKU.CONFIG.headers['Content-Type'] = "application/json";


        $http({
          method : 'POST',
          url: endpoint + 'exercises/' + id + "/questions",
          headers: HEROKU.CONFIG.headers,
          data: {data: dataArray}
        }).success (function (res) {
          console.log(res);
        });
      };

      this.populateQuestionsForExercise = function (id) {

        var deferred = $q.defer();

        HEROKU.CONFIG.headers['Access-Token'] = $cookies.get('sessionToken');

        $http({
          method : 'GET',
          url: endpoint + "exercises/" + id + "/questions",
          headers: HEROKU.CONFIG.headers
        }).then(function (res){
          return deferred.resolve(res.data);
        });
        return deferred.promise;
      };
///
///
///
    }]);

}());
