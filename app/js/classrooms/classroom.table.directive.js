;(function (){

  'use strict';

  angular.module('Unoverb')
  .directive('mdTable', function () {
    return {
      restrict: 'E',
      scope: {
        headers: '=',
        content: '=',
        sortable: '=',
        filters: '=',
        customClass: '=customClass',
        thumbs:'=',
        count: '='
      },

      controller: function ($scope,$filter,$window) {
        var orderBy = $filter('orderBy');
        $scope.tablePage = 0;
        $scope.nbOfPages = function () {
          return Math.ceil($scope.content.length / $scope.count);
        },
          $scope.handleSort = function (field) {
            if ($scope.sortable.indexOf(field) > -1) { return true; } else { return false; }
        };
        $scope.order = function(predicate, reverse) {
            $scope.content = orderBy($scope.content, predicate, reverse);
            $scope.predicate = predicate;
        };
        $scope.order($scope.sortable[0],false);
        $scope.getNumber = function (num) {
                  return new Array(num);
        };
        $scope.goToPage = function (page) {
          $scope.tablePage = page;
        };
      },

      // template: angular.element(document.querySelector('#md-table-template')).html()
      template: "js/classrooms/classroom.table.tpl.html"
    }
  });

  // .directive('mdColresize', function ($timeout) {

  //   return {
  //     restrict: 'A',
  //     link: function (scope, element, attrs) {
  //       scope.$evalAsync(function () {

  //         $timeout( function () {
  //           element.colResizable({

  //           liveDrag: true,
  //           fixed: true

  //           })

  //         },100);

  //       });
  //     }
  //   };
  // })

}());
