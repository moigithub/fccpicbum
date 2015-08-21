'use strict';

angular.module('basej5pintApp')
  .controller('UserCtrl', function ($scope, $http, Auth, $routeParams) {
    $scope.imgList=[];
    $scope.getCurrentUser = Auth.getCurrentUser;
    

    $http.get("/api/images/user/"+$routeParams.id).success(function(images){
      $scope.imgList=images;
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


/*
var ImageSchema = new Schema({
  description: String,
  link: String,
  userlikes: Array,
  userid: { type:Schema.ObjectId, ref:"User"}
});
*/