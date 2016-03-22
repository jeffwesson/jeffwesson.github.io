'use strict';

/**
 * @ngdoc overview
 * @name jeffwessonApp
 * @description
 * # jeffwessonApp
 *
 * Main module of the application.
 */
angular
  .module('jeffwessonApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl',
        controllerAs: 'portfolio',
        resolve: {
          get: ['dataModel', function (dataModel) {
            return dataModel.getData();
          }]
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
