'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ui.bootstrap',
  'pascalprecht.translate'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'templates/bienvenido.html',
  })
  .when('/programa', {
    templateUrl: 'templates/programa.html',
  })
  .when('/compromisos', {
    templateUrl: 'templates/compromisos.html',
  })
  .when('/quienes', {
    templateUrl: 'templates/quienes.html',
  })
  .when('/multimedia', {
    templateUrl: 'templates/multimedia.html',
  })
  .otherwise({redirectTo: '/'});
}]);
