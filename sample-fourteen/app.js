(function(){
	var app = angular.module('store',[]);

	app.controller('StoreController', function(){
		this.products = gems; 
	});


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