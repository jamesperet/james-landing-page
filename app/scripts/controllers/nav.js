'use strict';

/**
 * @ngdoc function
 * @name landingPageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the landingPageApp
 */
angular.module('landingPageApp')
  .controller('NavCtrl', ['$window', '$scope', '$timeout', "$rootScope", "$state", '$mixpanel', function ($window, $scope, $timeout, $rootScope, $state, $mixpanel) {

    // Mixpanel Analytics Tracking
    $mixpanel.track('Site Loaded');

    $scope.track = function(action){
      $mixpanel.track(action);
      //console.log("Tracking action with Mixpanel: " + action)
    }

    // Get Language
    var lang = $window.navigator.language || $window.navigator.userLanguage;
    if (lang === 'pt-BR') {
      //console.log("language is portuguese");
    } else {
      //console.log("language is english");
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
