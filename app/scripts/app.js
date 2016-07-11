'use strict';

/**
 * @ngdoc overview
 * @name portfolioApp
 * @description
 * # portfolioApp
 *
 * Main module of the application.
 */
angular
  .module('portfolioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl',
        controllerAs: 'about'
      })
      .when('/resume', {
        templateUrl: 'views/resume.html',
        controller: 'MainCtrl',
        controllerAs: 'resume'
      })
      .when('/skills', {
        templateUrl: 'views/skills.html',
        controller: 'MainCtrl',
        controllerAs: 'skills'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'MainCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/about'
      });
  });
