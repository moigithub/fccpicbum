'use strict';

angular.module('basej5pintApp')
  .controller('MainCtrl', function ($scope, $http, Auth) {
    $scope.imgList=[];
    $scope.getCurrentUser = Auth.getCurrentUser;


    $http.get("/api/images").success(function(images){
      $scope.imgList=images;
    });


    $scope.addPic = function(){
      console.log($scope.pic);


      var picObj= {
        description:$scope.pic.title,
        link:$scope.pic.link,
        userlikes:[],
        userid:$scope.getCurrentUser()._id
      };
console.log(picObj);
      $http.post("/api/images", picObj).success(function(image){
        $scope.imgList.push(image);
      });

      $scope.pic.link="";
      $scope.pic.title="";
    };


    $scope.meLike = function(image){
      var myid = $scope.getCurrentUser()._id;
      if(image.userlikes.indexOf(myid)===-1){
        image.userlikes.push(myid);
        $http.put("/api/images", image).success(function(images){
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