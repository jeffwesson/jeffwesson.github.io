'use strict';

/**
 * @ngdoc function
 * @name jeffwessonApp.controller:FooterCtrl
 * @description
 * # FooterCtrl
 * Controller of the jeffwessonApp
 */
angular.module('jeffwessonApp')
  .controller('FooterCtrl', ['$scope',
    function ($scope) {
      $scope.year = new Date().getFullYear();
    }]);
