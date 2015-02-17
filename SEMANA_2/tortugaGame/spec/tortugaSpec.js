describe("Dado", function() {
	describe("lanzar", function() {
		it("valor aleatorio entre 1 y 6", function() {
			var dado = new Dado();
			dado.lanzar();
			expect(dado.getResultado() >= 1 && dado.getResultado() <= 6).toBeTruthy();
		});
	});
});

describe("Cubilete", function() {
	describe("cargar", function() {
		it("tiene 5 dados", function() {
			var cubilete = new Cubilete();
			cubilete.cargar(5);
			expect(cubilete.getDados().length).toEqual(5);
		});
	});
});

/*
El juego te permite 3 jugadas, es decir, 3 lanzamientos
En el primer lanzamiento se colocan 5 dados en el cubilete
Si sale 6 en algún dado, ya tienes el caparazón
Por cada dado que tenga el 1, cuenta como una pata
No se pueden contar las patas si aun no has obtenido el caparazón
Para conformar la tortuga se necesita un caparazón y 4 patas
El lanzamiento siguiente sólo juegas con el número de dados que necesites para completar la tortuga
*/
describe("Tortuga", function(){
	describe("evaluar", function() {
		var tortuga;
		beforeEach(function(){
			tortuga = new Tortuga();
		});

		//hacer expects simples, luego implementar, que rayada, muahahaha
		it("tiene 0 patas", function() {
			expect(tortuga.evaluar([2,5,5,4,4,1])).toBeEqual(0);
		});

	});


});