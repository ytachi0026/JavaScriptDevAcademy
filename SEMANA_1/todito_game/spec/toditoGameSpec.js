//En los SPEC, van las pruebas
/*TODITO es un juego para emborrachar, usa solamente un dado.
En este juego se da un castigo de acuerdo al número que te haya tocado al tirar el dado:
Si sale 1 (T): Toman todos
Si sale 2 (O): El jugador que lanzó el dado ordena que tome otro jugador
Si sale 3 (D): Toma el jugador que está a la derecha del jugador que tiró el dado
Si sale 4 (I): Toma el jugador que está a la izquierda del jugador que tiró el dado
Si sale 5 (T): Toman todos
Si sale 6 (O): El jugador que lanzó el dado ordena que tome otro jugador
*/
/*
Estados del TDD
rojo: en donde uno implementa el describe, el it. 
DEBE CORRER EL RUNNER, verificar que sale ROJO

verde: funciona el test

refactor: pones bonito el codigo :D

*/
describe("Todito Game", function(){

	describe("Lanzar dado" , function(){
		it("Devuelve un número entre 1 y 6", function(){
			expect(lanzarDado() >= 1 &&  lanzarDado() <=6).toBeTruthy();
		});
	});

	describe("Definir castigo", function(){
		it("Dado indica 1 o 5: TOMAN TODOS", function(){
			expect(definirCastigo(1)).toEqual("TOMAN TODOS");
			expect(definirCastigo(5)).toEqual("TOMAN TODOS");
		});

		it("Dado indica 2 o 6: ORDENA A OTRO TOMAR", function(){
			expect(definirCastigo(2)).toEqual("ORDENA A OTRO TOMAR");
			expect(definirCastigo(6)).toEqual("ORDENA A OTRO TOMAR");
		});

		it("Dado indica 3: DERECHA TOMA", function(){
			expect(definirCastigo(3)).toEqual("DERECHA TOMA");
		});

		it("Dado indica 4: IZQUIERDA TOMA", function(){
			expect(definirCastigo(4)).toEqual("IZQUIERDA TOMA");
		});

	});

});