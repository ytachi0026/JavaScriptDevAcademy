//ACA va la logica
function lanzarDado(){
	//Math.floor(Math.random() * 11); returns a random number between 0 and 10
	//http://www.w3schools.com/js/js_math.asp
	return Math.floor(Math.random() * 6) + 1; 
}

function definirCastigo(dadoLanzado){
	switch(dadoLanzado){
		case 1:
		case 5: return "TOMAN TODOS";
		
		case 2:
		case 6: return "ORDENA A OTRO TOMAR";

		case 3: return "DERECHA TOMA";

		case 4: return "IZQUIERDA TOMA";

		default: return "SIGUIENTE RONDA";
	}
}