'use strict';

angular.module('basej5pintApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/picboard', {
        templateUrl: 'app/picboard/picboard.html',
        controller: 'PicboardCtrl'
      });
  });
