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
        templateUrl: "js/users/templates/profile.tpl.html"

      })

      .state('dashboard', {
        url: '/dashboard',
        templateUrl: "js/users/templates/dash.tpl.html"
      });

  })

    .constant('HEROKU', {

    URL: '',
    CONFIG: {
      headers: {}
    }

  });

}());
