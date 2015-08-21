'use strict';

var app = angular.module('angularTrainingApp', [
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ngResource',	  
  'ngSanitize',
  'ngTouch',
  'ui.router',
  'angulike'
]);  

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/main.html'
  });
  $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html'
  });
  $stateProvider
    .state('blog', {
      url: '/blog',
      templateUrl: 'views/blog.html',
  });
  $stateProvider
    .state('contact', {
      url: '/contact',
      templateUrl: 'views/contact.html',
  }); 	 	    
  $stateProvider
    .state('blog-link', {
      url: '/blog-detail',
      templateUrl: 'views/blog-detail.html',
  });       
});