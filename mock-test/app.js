(function(){
	var app = angular.module('store',[]); //store depende do panel-module

	app.controller('StoreController',['$http', function($http){
		var store =this;

		$http.get('https://randomuser.me/api/').success(function(data){
			store.products = data.results;
		});
	}]);

})();