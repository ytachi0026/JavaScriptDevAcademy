describe("Persona", function(){
	it("tiene constructor", function(){
		var persona = new Persona();
		//jasmine.any(Persona), permite verificar que la variable sea del tipo indicado
		expect(persona).toEqual(jasmine.any(Persona));
	});

	it("tiene propiedad nombre", function(){
		var persona = new Persona();
		persona.nombre = "Ytalo";
		expect(persona.nombre).toEqual("Ytalo");
	});

	it("acepta el nombre en el constructor", function(){
		//al crear de esta manera, no olvidar de setear el atributo con el parametro en el constructor
		var persona = new Persona("Ytalo");
		expect(persona.nombre).toEqual("Ytalo");
	});

	it("saluda a sus amigos", function(){
		var persona = new Persona("Ytalo");
		expect(persona.saludar("Ytalo")).toEqual("Hola mi nombre es Ytalo");
	});
});

/*Constructores built-in
Hacerlo de la segunda forma, es más rápida y es fácil de crear porque es fácil de recordar

*/
