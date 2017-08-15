'use strict';

// Declare app level module which depends on views, and components
angular.module('goalie', [
  'ngRoute',
  'goalie.view1',
  'goalie.view2',
  'goalie.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
