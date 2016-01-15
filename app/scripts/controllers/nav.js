'use strict';

/**
 * @ngdoc function
 * @name landingPageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the landingPageApp
 */
angular.module('landingPageApp')
  .controller('NavCtrl', ['$window', '$scope', '$timeout', "$rootScope", "$state", function ($window, $scope, $timeout, $rootScope, $state) {
    var lang = $window.navigator.language || $window.navigator.userLanguage;
    console.log(lang);
    if (lang === 'pt-BR') {
      console.log("language is portuguese");
    } else {
      console.log("language is english");
    }

    $scope.logoAnimationStart = false;
    $scope.menuAnimationStart = false;
    $timeout(function(){
      $scope.logoAnimationStart = true;
      $timeout(function(){
        $scope.menuAnimationStart = true;
      }, 500);
    }, 500);

  }]);
