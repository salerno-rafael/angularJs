(function(){
	var app = angular.module('store',[]);

	app.controller('StoreController', function(){
		this.products = gems; //product deixa o gem disponivel par ao controller  
	});

	var gems = [  // array de produtos
	{
		name:'meias',
		price: 1.99,
		description: 'meia branca tamanho 20',
		canPurchase : true
	},
	{
		name:'casaco',
		price: 20.50,
		description: 'tamanho G',
		canPurchase : false
	},
	{
		name:'camisetas',
		price: 8.99,
		description: 'tamanho 3 azul',
		canPurchase : true
	}
	];

})();