'use strict';

angular.module('basej5pintApp')
  .controller('MainCtrl', function ($scope, $http, Auth) {
    $scope.imgList=[];
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $http.get("/api/images").success(function(images){
      $scope.imgList=images;
      console.log(images);
    });



    $scope.meLike = function(image){
      var myid = $scope.getCurrentUser()._id;
      // only like 1 time
      if(image.userlikes.indexOf(myid)===-1){
        image.userlikes.push(myid);
        $http.put("/api/images/"+ image._id, image).success(function(images){
          console.log("like saved");
        });
      }
    };

  });
