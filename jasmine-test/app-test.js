describe('Unit testing para angular', function() {
  var $compile,
      $rootScope;

  // carrega o módulo que será executado
  beforeEach(module('myApp'));

  beforeEach(inject(function(_$compile_, _$rootScope_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));
    
  it('Verifica conteudo dos elementos', function() {
    var element = $compile("<a-great-eye></a-great-eye>")($rootScope);
    $rootScope.$digest();
   
    expect(element.html()).toContain("lidless, wreathed in flame, 2 times");
  });
});
