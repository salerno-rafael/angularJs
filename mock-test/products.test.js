describe('products category service', function () {
  it('should return the expected categories', function () {
    angular.mock.module('products');

    var service;

    // Get the service from the injector
    angular.mock.inject(function GetDependencies(CategoryService) {
      service = CategoryService;
    });

    var categories = service.getCategories();

    expect(categories).toEqual({ 1: 'Maca', 2: 'Banana' });
  });
});

describe('products service tests', function () {

  beforeEach(angular.mock.module('products'));

  it('should append category names to products', function () {
    var service;

    angular.mock.inject(function GetDependencies(ProductsService) {
      service = ProductsService;
    });

    var products = service.getProducts();
    expect(products[0].categoryName).toBe('Maca');
    expect(products[1].categoryName).toBe('Banana');
  });
});


describe('products service tests33', function () {

  beforeEach(angular.mock.module('products'));

  it('should append category names to products', function () {

	 angular.mock.module({
    'CategoryService': { 
      getCategories: function() { 
        return { 1: 'Electronics', 2: 'DVDs' }; 
      } 
    }
  });

  var service;

  angular.mock.inject(function GetDependencies(ProductsService) {
    service = ProductsService;
  });

  var products = service.getProducts();
  expect(products[0].categoryName).toBe('Electronics');
  expect(products[1].categoryName).toBe('DVDs');
});
});


