'use strict';

/**
 * @ngdoc function
 * @name landingPageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the landingPageApp
 */
angular.module('landingPageApp')
  .controller('NowCtrl', ['$window', '$scope', '$timeout', '$mixpanel', function ($window, $scope, $timeout, $mixpanel) {

    // Mixpanel Analytics Tracking
    $mixpanel.track('Now view');

    $scope.textAnimationStart = false;
    $timeout(function(){
      $scope.textAnimationStart = true;
    }, 1000);

  }]);
