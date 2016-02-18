(function(){
	var app = angular.module('store',[]);

	app.directive('productHeader',function(){
		return{
			restrict:'E',
			templateUrl:'product-header.html'
		};
	});

	app.directive('productHeaderAttribute',function(){
		return{
			restrict:'A',
			templateUrl:'product-header-attribute.html'
		};
	});

	app.controller('CommentController', function(){
		this.comment ={};

		this.addComment = function(product){
			product.comments.push(this.comment);
			this.comment ={};
		};

	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

	app.controller('StoreContoller', function ($scope) {

	 $scope.showData = function( ){

	 $scope.itemsPerPage = 1;
	 $scope.currentPage = 0;
	 $scope.datalists = gems;

	   $scope.range = function() {
	    var rangeSize = 2;
	    var ps = [];
	    var start;

	    start = $scope.currentPage;
	    if ( start > $scope.pageCount()-rangeSize ) {
	      start = $scope.pageCount()-rangeSize+1;
	    }

	    for (var i=start; i<start+rangeSize; i++) {
	      ps.push(i);
	    }
	    return ps;
	  };

	  $scope.prevPage = function() {
	    if ($scope.currentPage > 0) {
	      $scope.currentPage--;
	    }
	  };

	  $scope.DisablePrevPage = function() {
	    return $scope.currentPage === 0 ? "disabled" : "";
	  };

	  $scope.pageCount = function() {
	    return Math.ceil($scope.datalists.length/$scope.itemsPerPage)-1;
	  };

	  $scope.nextPage = function() {
	    if ($scope.currentPage < $scope.pageCount()) {
	      $scope.currentPage++;
	    }
	  };

	  $scope.DisableNextPage = function() {
	    return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
	  };

	  $scope.setPage = function(n) {
	    $scope.currentPage = n;
	  };

	}

	});

app.filter('pagination', function()
	{
	  return function(input, start) {
	    start = parseInt(start, 10);
	    return input.slice(start);
	  };
	});

	var gems = [
	{
		name:'meias',
		price: 1.99,
		description: 'meia branca tamanho 20',
		canPurchase : true,
		image:'meia.jpg',
		comments:[
			{
				stars:5,
				body:'produto bom hein o Batista',
				author:'salerno.rafael@gmail.com'
			},
			{
				stars:2,
				body:'produto bem meia boca',
				author:'salerno.rafael@gmail.com'
			}
		]
	},
	{
		name:'camisetas',
		price: 8.99,
		description: 'tamanho 3 azul',
		canPurchase : true,
		image:'camiseta.jpg',
		comments:[
			{
				stars:3,
				body:'produto de qualidade',
				author:'salerno.rafael@gmail.com'
			}
		]
	}
	];

})();
