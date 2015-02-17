//TODITO OBJETO
function Dado() {
	this.resultado = 0;
	this.lanzar = function(){
		this.resultado = Math.floor(Math.random() * 6) + 1;
	};
}
/*
var dado = new Dado();
dado.lanzar();
console.log(dado.resultado);
*/

var Todito = function(){
	this.jugar = function(){
		var dado = new Dado();
		dado.lanzar();
		this.definirCastigo(dado.resultado);
	};

	this.definirCastigo = function(n){
		switch(n){
			case 1:
			case 5: console.log("TOMAN TODOS");break;
			case 2: 
			case 6: console.log("ORDENA TOMAR A OTRO");break;
			case 3: console.log("TOMA DERECHA");break;
			case 4: console.log("TOMA IZQUIERDA");break;
		}
	};

};

var toditoTali = new Todito();
toditoTali.jugar();