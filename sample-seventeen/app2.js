
(function(){

var app = angular.module('store', []);
app.controller('StoreController', function($scope,$http) {
    $http({
        method : 'GET',
        url : 'http://uinames.com/api/'
    }).then(function mySucces(response) {
    $scope.people = response.data;
    }, function myError(response) {
        $scope.message = 'erro ao renderizar';
    });
});
})();
