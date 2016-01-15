'use strict';

/**
 * @ngdoc function
 * @name landingPageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the landingPageApp
 */
angular.module('landingPageApp')
  .controller('NowCtrl', ['$window', '$scope', '$timeout', function ($window, $scope, $timeout) {
    var lang = $window.navigator.language || $window.navigator.userLanguage;
    console.log(lang);
    if (lang === 'pt-BR') {
      console.log("language is portuguese");
    } else {
      console.log("language is english");
    }

    $scope.textAnimationStart = false;
    $timeout(function(){
      $scope.textAnimationStart = true;
    }, 1000);

  }]);
