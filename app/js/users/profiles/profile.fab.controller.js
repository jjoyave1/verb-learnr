;(function (){

  'use strict';

  angular.module('Unoverb')
    .controller('profileFabCtrl', [ '$scope',  function ($scope) {
      $scope.isOpen = false;

      $scope.profEditBar = {
        isOpen : false,
        count : 20,
        selectedAlignment: 'md-right'
      };

    }]);

}());
