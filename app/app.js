'use strict';

// Declare app level module which depends on views, and components
angular.module('goalie', [])
  .controller('mainCtrl', function ($scope, dataService) {
  $scope.editing = false;

  $scope.toggleEditing = function () {
    this.editing = !this.editing;
  };

  $scope.tasks = [
    {name : 'task1'},
    {name : 'task2'},
    {name : 'task3'},
    {name : 'task4'},
    {name : 'task5'},
    {name : 'task6'},
  ];

  $scope.helloConsole = dataService.helloConsole;

})
  .service('dataService', function () {
  this.helloConsole = function () {
    console.log('Hello console.');
  }
});
