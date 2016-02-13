describe("Teste de function", function() {
  var a;

  it("verifica que os valores sao iguais", function() {
    a = true;

    expect(a).toBe(true);
  });
});

  describe("The 'toEqual' matcher", function() {

    it("teste de funcionamento com variaveis", function() {
      var a = 12;
      expect(a).toEqual(12);
    });

    it("funciona com objetos tbm", function() {
      var foo = {
        a: 12,
        b: 34
      };
      var bar = {
        a: 12,
        b: 34
      };
      expect(foo).toEqual(bar);
    });
  });
