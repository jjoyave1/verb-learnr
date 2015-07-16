;(function (){

  'use strict';

  angular.module('Unoverb')

  .controller('ClassroomTable', ['$scope', 'ClassroomService','$q', function ($scope, ClassroomService, $q) {

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
      },
      {
        name: 'Members',
        field: 'num_participants'
      }
    ];

    $scope.classroomTable = ClassroomService.getClassrooms();
    console.log($scope.classroomTable);

    $scope.custom = {name: 'bold', description:'grey',last_modified: 'grey'};
    $scope.sortable = ['name', 'description', 'last_modified'];

    $scope.classSearchParam = "top";
    $scope.pageCount = 1;

    $scope.setSearchParam = function () {
      // console.log($('#classroom-search-switch'));
      // if ($('#classroom-search-switch').val() === true) {
      //   $scope.classSearchParam = "new";
      // } else {
      //   $scope.classSearchParam = "top";
      // }
    };

  }]);


  // .filter('startFrom',function (){
  //   return function (input,start) {
  //     start = +start;
  //     return input.slice(start);
  //   }
  // });
}());
