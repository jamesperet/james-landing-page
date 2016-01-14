'use strict';

/**
 * @ngdoc function
 * @name landingPageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the landingPageApp
 */
angular.module('landingPageApp')
  .controller('NowCtrl', ['$window', function ($window) {
    var lang = $window.navigator.language || $window.navigator.userLanguage;
    console.log(lang);
    if (lang === 'pt-BR') {
      console.log("language is portuguese");
    } else {
      console.log("language is english");
    }
    console.log("Showing page NOW");
  }]);
