'use strict';

/**
 * @ngdoc function
 * @name jeffwessonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jeffwessonApp
 */
angular.module('jeffwessonApp')
  .controller('MainCtrl', ['$scope',
    function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }]);
