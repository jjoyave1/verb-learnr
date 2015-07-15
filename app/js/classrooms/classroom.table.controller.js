;(function (){

  'use strict';

  angular.module('Unoverb')

  .controller('ClassroomTable', ['$scope', 'ClassroomService', function ($scope, ClassroomService) {

    $scope.toggleSearch = false;
    $scope.headers = [
      {
        name:'Avatar',
        field:'avatar'
      },
      {
        name: 'Name',
        field: 'name'
      },
      {
        name:'Description',
        field: 'description'
      },
      {
        name: 'Language',
        field: 'language'
      }
    ];

    $scope.getClassroomTable = function () {
    };

    $scope.custom = {name: 'bold', description:'grey',last_modified: 'grey'};
    $scope.sortable = ['name', 'description', 'last_modified'];

    //sets count displayed in table
    $scope.count = 3;
  }]);


  // .filter('startFrom',function (){
  //   return function (input,start) {
  //     start = +start;
  //     return input.slice(start);
  //   }
  // });

}());
