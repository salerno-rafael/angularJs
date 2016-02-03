(function(){
	var app = angular.module('store',[]);

	app.controller('StoreController', function(){
		this.products = gems; 
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
		comments: 'produto bom hein o Batista',
		canPurchase : true,
		image:'meia.jpg'
	},
	{
		name:'camisetas',
		price: 8.99,
		description: 'tamanho 3 azul',
		comments: 'produto bom hein o Batista',
		canPurchase : true,
		image:'camiseta.jpg'
	}
	];

})();