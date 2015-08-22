'use strict';

angular.module('basej5pintApp')
  .controller('PicboardCtrl', function ($scope, $http, Auth) {
    $scope.imgList=[];
    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.pic={link:"", size:"Standard"};

    $http.get("/api/images/user/"+$scope.getCurrentUser()._id).success(function(images){
      $scope.imgList=images;
    });


    $scope.addPic = function(){
      console.log($scope.pic);


      var picObj= {
        description:$scope.pic.title,
        link:$scope.pic.link,
        size:$scope.pic.size,
        userlikes:[],
        user:$scope.getCurrentUser()._id
      };
console.log(picObj);
      $http.post("/api/images", picObj).success(function(image){
        $scope.imgList.push(image);
      });

      $scope.pic.link="";
      $scope.pic.title="";
    };

    $scope.remove =function(image){
    	$http.delete("/api/images/"+image._id).success(function(result){
    		console.log("deleted", result);
    		// filter out image deleted
    		$scope.imgList=$scope.imgList.filter(function(img){
    			//console.log(img,"****",image._id);
    			return img._id!==image._id;
    		});
    	});
    };

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



    $scope.getClass=function(){
      return $scope.pic.size;
    }


  });


/*
var ImageSchema = new Schema({
  description: String,
  link: String,
  userlikes: Array,
  userid: { type:Schema.ObjectId, ref:"User"}
});
*/