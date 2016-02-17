describe('store test', function () {

  beforeEach(module('store'));

  var $controller;
  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('size', function () {

    it('Size of array equal 2', function () {
      var $scope = {};
      var controller = $controller('StoreController', {  });

      expect(controller.products.length).toBe(2);
    });
  });
});
