 var mainApp = angular.module("mainApp", []);
         
         mainApp.controller("shapeController", function($scope) {
            $scope.message = "controller Shape ";
            $scope.type = "Shape";
         });
         
         mainApp.controller("circleController", function($scope) {
             $scope.message = "controller circulo";
         });
         
         mainApp.controller("squareController", function($scope) {
            $scope.message = "controller quadrado";
            $scope.type = "quadrado";
         });