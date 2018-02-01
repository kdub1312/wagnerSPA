//create the module
var testApp = angular.module('testApp', []);

testApp.controller('mainController', function($scope) {
  //create message to display in view
  $scope.message = "Just take a look-see here at the home page";
});
