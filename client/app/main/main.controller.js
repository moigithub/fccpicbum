'use strict';

angular.module('basej5pintApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.imgList=[];
    


    $http.get("/api/images").success(function(images){
      $scope.imgList=images;
    });
  });
