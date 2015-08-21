'use strict';

/**
 * @ngdoc function
 * @name angularTrainingApp.controller:BlogfazrinCtrl
 * @description
 * # BlogfazrinCtrl
 * Controller of the angularTrainingApp
 */
angular.module('angularTrainingApp')
  .controller('BlogfazrinCtrl', function ($scope, $http) {

  	$scope.myModel = {
        Url: 'http://jasonwatmore.com/post/2014/08/01/AngularJS-directives-for-social-sharing-buttons-Facebook-Like-GooglePlus-Twitter-and-Pinterest.aspx',
        Name: 'auoo', 
        ImageUrl: 'http://www.jasonwatmore.com/pics/jason.jpg'
    };

    $http.get('dummy/color.json').success(function(data) {
	    $scope.colors = data.colorsArray;
	    console.log($scope.colors);
	  })
  });
