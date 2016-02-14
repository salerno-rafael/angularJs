angular.module('products', []);

angular.module('products').service('CategoryService', function CategoryService() {
  return {
    getCategories: function() {
      return { 1: 'Maca', 2: 'Banana' };
    }
  }; 
});

angular.module('products').service('ProductsService', function ProductService (CategoryService) {
  return {
    getProducts: function () {
      var product1 = { name: 'Melancia', categoryId: 1 };
      var product2 = { name: 'Abacate', categoryId: 2 };
      var products = [product1, product2];

      var categories = CategoryService.getCategories();

      products.forEach(function (p) {
        p.categoryName = categories[p.categoryId];
      });

      return products;
    }
  };
});


