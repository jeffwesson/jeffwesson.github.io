'use strict';

/**
 * @ngdoc function
 * @name jeffwessonApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the jeffwessonApp
 */
angular.module('jeffwessonApp')
  .controller('PortfolioCtrl', ['$scope', 'dataModel',
    function ($scope, dataModel) {
      this.projects = dataModel.content.projects;
    }]);
