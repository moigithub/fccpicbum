'use strict';

angular.module('basej5pintApp')
	.factory('effects',function(){
		var effects=[
		      "ZoomInUp",
//		      "ZoomInRight",
//		      "ZoomInLeft",
		      "ZoomInDown",
		      "ZoomIn",
//		      "slideInRight",
//		      "slideInLeft",
		      "slideInDown",
		      "slideInUp",
		      "rotateIn",
		      "lightSpeedIn",
		      "flipInY",
		      "flipInX",
		      "flip",
		      "bounceInUp",
//		      "bounceInRight",
//		      "bounceInLeft",
		      "bounceInDown",
		      "bounceIn",
		      "wobble",
		      "tada",
		      "swing",
		      "shake",
		      "rubberBand",
		      "bounce"
		    ];

		    
		return {
			randomEffect: function(){
		      var num = Math.floor(Math.random()*effects.length);
		      return "animated "+effects[num];
		    }
		}
	});