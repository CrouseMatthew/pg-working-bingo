'use strict';

/**
 * @ngdoc function
 * @name androidApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the androidApp
 */
angular.module('androidApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
