(function(){
	var app = angular.module('store',[]);

	app.controller('StoreController', function(){
		this.product = gem; //product deixa o gem disponivel par ao controller  
	});

	var gem = {
		name:'meias',
		price: 1.99,
		description: 'meia branca tamanho 20',
		canPurchase : true
	}

})();