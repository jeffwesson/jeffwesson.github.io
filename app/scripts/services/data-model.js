'use strict';

/**
 * @ngdoc service
 * @name jeffwessonApp.dataModel
 * @description
 * # dataModel
 * Factory in the jeffwessonApp.
 */
angular.module('jeffwessonApp')
  .factory('dataModel', ['$http',
    function ($http) {
      var dataModel = {};
      dataModel.getData = function () {
        $http.get('./scripts/models/data-model.c44h60m0.json')
          .success(function (response) {
            dataModel.content = response ? response : [];
          });
      };
      return dataModel;
    }]);
