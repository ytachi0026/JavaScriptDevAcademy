//HolaMundoSpec
//En los SPEC, van las pruebas
describe("holaMundo", function(){
	it('saluda', function(){
		expect(holaMundo()).toEqual("Hola Mundo!");
	});
});