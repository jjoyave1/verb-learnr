;(function (){

  'use strict';

  angular.module('Unoverb', ['ui.router', 'ngCookies', 'ngMaterial'])

    .config(function ($urlRouterProvider, $stateProvider, $mdThemingProvider) {

    $mdThemingProvider.theme('default').primaryPalette('amber').accentPalette('deep-orange');

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home',{

        url: '/',
        templateUrl: "js/users/templates/login.tpl.html"

      })

      .state('login', {

        url: '/login',
        templateUrl: "js/users/templates/login.tpl.html"

      })

      .state('profile', {

        url: '/profile',
        templateUrl: "js/users/templates/profile.tpl.html",
        controller: 'Profile'
        // resolve: {
        //   profileResolved: function ( UserService ) {
        //     return UserService.userProfile();
        //   }
        // }

      })

      .state('dashboard', {
        url: '/dashboard',
        templateUrl: "js/users/templates/dash.tpl.html"
      })

      .state('classroomdash', {
        url: '/createclassroom',
        templateUrl: "js/classrooms/templates/classroom.dash.tpl.html",
        controller: "Classroom"
      })

      .state('classroomtable', {
        url: '/classrooms',
        templateUrl: "js/classrooms/templates/classroom.table.tpl.html",
        controller: "ClassroomTable"
      })

      .state('singleclassroom', {
        url: '/classrooms/:id',
        templateUrl: 'js/classrooms/templates/singleclassroom.tpl.html',
        controller: 'SingleClassroom'
      });

  })

    .constant('HEROKU', {

    URL: 'https://protected-scrubland-4220.herokuapp.com/',
    CONFIG: {
      headers: {
        "Access-Token" : ""
      }
    }

  })
    .run(['$rootScope', '$stateParams', '$state', '$cookies',

      function ($rootScope, $stateParams, $state, $cookies) {

        $rootScope.$on('$stateChangeSuccess', function () {

          console.log($state.current.name);

          var sessionUser;

          var dashCheck = function () {
            sessionUser = $cookies.get('sessionToken') !== undefined;
            if (sessionUser) {
              $state.go('dashboard');
            }
          };

          var loginCheck = function () {
            sessionUser = $cookies.get('sessionToken') !== undefined;
            if (sessionUser !== true) {
              $state.go('home');
            }
          };

          if ($state.current.name === 'home') {
            dashCheck();
          }

          if ($state.current.name === 'login') {
            dashCheck();
          }

          if ($state.current.name === 'classroomtable') {

          }

          else {
            loginCheck();
          }

        });

      }

    ]);


}());
