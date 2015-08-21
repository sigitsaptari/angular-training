'use strict';

angular.module('angularTrainingApp')
  .controller('socmedCtrl', [
      '$scope', function ($scope) {
          $scope.myModel = {
              Url: 'http://jasonwatmore.com/post/2014/08/01/AngularJS-directives-for-social-sharing-buttons-Facebook-Like-GooglePlus-Twitter-and-Pinterest.aspx',
              Name: 'auoo', 
              ImageUrl: 'http://www.jasonwatmore.com/pics/jason.jpg'
          };
      }
  ]);