var Dado = function () {
	var resultado = 0;

	this.lanzar = function () {
		resultado = Math.floor(Math.random() * 6) + 1;
	};

	this.getResultado = function () {
		return resultado;
	};
};

var Cubilete = function () {
	var dados = []; //se inicializa el array
	this.cargar = function (numeroDado) {
		var cont = 0;
		for (cont ; cont < numeroDado; cont++){
			var dado = new Dado();
			dados.push(dado); //metodo para agregar un elemento al array
		}
	};

	this.getDados = function () {
		return dados;
	};

};

//no violar el principio de responsabilidad unica
var Tortuga = function () {
	var CAPARAZON = 6;//en constante poner MAYUSCULA
	var PATA = 1;

	var lanzamientos = [];
	var tortugaArmada = [];//va almacenando el progreso de la tortuga

/*	this.lanzar = function(){
		var cubilete = new Cubilete();
		cubilete.cargar();
		return cubilete;
	};

	this.jugar = function(numeroLanzamiento){
		var cont = 0;
		for(cont; cont< numeroLanzamiento; cont++){
			lanzamientos.push(this.lanzar());
		}
		return lanzamientos;
	}
*/
	this.evaluar = function(lanzamiento){
		lanzamiento.forEach(function(dadoResultado) {
			
			if(this.tieneTortugaCaparazon()){
				if(this.esPata(dadoResultado)){
					tortugaArmada.push(dadoResultado);
				}
			} else {
				if(this.esCaparazon(dadoResultado)){
					tortugaArmada.push(dadoResultado);
				}
			}
		});
	};

	this.tieneTortugaArmada = function(){
		if(tieneTortugaCaparazon()){
			var patasCont = 0;
			tortugaArmada.forEach(function(tortugaParte) {
				if(esPata(tortugaParte)){
					patasCont++;
				}
			});
			if(patasCont === 4){
				return true;
			}
		}
		return false;
	};

	this.tieneTortugaCaparazon = function(){
		if(esCaparazon(tortugaArmada[0])){
			return true;
		}
		return false;
	};

	this.esCaparazon = function(dadoResultado){
		if(dadoResultado === CAPARAZON){
			return true;
		}
		return false;
	};

	this.esPata = function(dadoResultado){
		if(dadoResultado === PATA){
			return true;
		}
		return false;
	};

};