'use strict';

/**
 * @ngdoc overview
 * @name fontdownApp
 * @description
 * # fontdownApp
 *
 * Main module of the application.
 */
angular
  .module('fontdownApp', [
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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
