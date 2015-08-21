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
    })
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html'
    })
    .state('blog', {
      url: '/blog',
      templateUrl: 'views/blog.html',
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'views/contact.html',
    }) 	 	
    .state('blog.fazrin', {
      url: '/fazrin',
      templateUrl: 'views/blog-fazrin.html',
    })
    .state('blog.sigit', {
      url: '/sigit',
      templateUrl: 'views/blog-sigit.html',
    });       
});