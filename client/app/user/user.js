'use strict';

angular.module('basej5pintApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/user/:id', {
        templateUrl: 'app/user/user.html',
        controller: 'UserCtrl'
      });
  });
