'use strict';

/**
 * @ngdoc function
 * @name angularTrainingApp.controller:SocmedctrlCtrl
 * @description
 * # SocmedctrlCtrl
 * Controller of the angularTrainingApp
 */
angular.module('angularTrainingApp')
  .controller('SocmedCtrl', function ($scope) {
    $scope.myModel = {
        Url: 'http://jasonwatmore.com/post/2014/08/01/AngularJS-directives-for-social-sharing-buttons-Facebook-Like-GooglePlus-Twitter-and-Pinterest.aspx',
        Name: 'auoo', 
        ImageUrl: 'http://www.jasonwatmore.com/pics/jason.jpg'
    };
  });