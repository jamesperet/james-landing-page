'use strict';

/**
 * @ngdoc overview
 * @name landingPageApp
 * @description
 * # landingPageApp
 *
 * Main module of the application.
 */
angular
  .module('landingPageApp', [
    'ngAnimate',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])

  .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {

    // Configs
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
    //Remove the header used to identify ajax call  that would prevent CORS from working
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    // UI router
    // For any unmatched url, redirect to /state1

    $stateProvider
    .state('main', {
      url: "/",
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .state('now', {
      url: "/now",
      templateUrl: 'views/now.html',
      controller: 'NowCtrl'
    })
    $urlRouterProvider.otherwise("/");


  }]);
