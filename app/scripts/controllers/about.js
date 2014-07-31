'use strict';

/**
 * @ngdoc function
 * @name jeffwessonApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jeffwessonApp
 */
angular.module('jeffwessonApp')
  .controller('AboutCtrl', ['$scope',
    function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    }]);
