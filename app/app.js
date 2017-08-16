'use strict';

// Declare app level module which depends on views, and components
angular.module('goalie', [])
  .controller('mainCtrl', function ($scope) {
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
});
