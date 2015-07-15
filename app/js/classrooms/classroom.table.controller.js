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
      var params = {
        sort_by : $scope.classSearchParam,
        language : 'spanish',
        page : $scope.pagecount
      };

      ClassroomService.getClassrooms(params).success( function (data) {
        console.log(data);
        $scope.classroomList = data;
        return $scope.classroomList;
      });
    };

    $scope.custom = {name: 'bold', description:'grey',last_modified: 'grey'};
    $scope.sortable = ['name', 'description', 'last_modified'];

    // set switch handlers

    // $scope.searchByParam = {val1:false};

    $scope.setSearchParam = function () {
      // console.log($('#classroom-search-switch'));
      // if ($('#classroom-search-switch').val() === true) {
      //   $scope.classSearchParam = "new";
      // } else {
      //   $scope.classSearchParam = "top";
      // }
    };

    $scope.classSearchParam = "top";
    $scope.pageCount = 1;

  }]);


  // .filter('startFrom',function (){
  //   return function (input,start) {
  //     start = +start;
  //     return input.slice(start);
  //   }
  // });
  $scope.getClassroomTable();
}());
