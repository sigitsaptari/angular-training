'use strict';

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/main.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .state('blog', {
      url: '/blog',
      templateUrl: 'views/blog.html',
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'views/contact.html',
    })
    .state('blog.detail', {
      url: '/detail',
      templateUrl: 'views/blog-detail.html',
      controller : 'SocmedCtrl'
    })
    .state('blog.fazrin', {
      url: '/fazrin',
      templateUrl: 'views/blog-fazrin.html',
      controller : 'BlogfazrinCtrl'
    })
    .state('blog.sigit', {
      url: '/sigit',
      templateUrl: 'views/blog-sigit.html',
      controller : 'SocmedCtrl'
    });       
});