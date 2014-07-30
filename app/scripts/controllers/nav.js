'use strict';

/**
 * @ngdoc function
 * @name jeffwessonApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the jeffwessonApp
 */
angular.module('jeffwessonApp')
  .controller('NavCtrl', ['$scope', '$location',
    function ($scope, $location) {
      $scope.isActive = function (route) {
        return route === $location.path();
      };
      $scope.loadingData = false;
      $scope.$on('$routeChangeStart', function() {
        $scope.loadingData = true;
      });
      $scope.$on('$routeChangeSuccess', function() {
        $scope.loadingData = false;
      });
    }]);
