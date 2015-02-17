/*
Funciones de manera global
var sumaCuadrados = 0;
var suma = 0;
var i = 1;

for(i ; i<= 10; i++){
    sumaCuadrados += Math.pow(i,2);
    suma += i;
}
suma = Math.pow(suma, 2);
console.log(sumaCuadrados - suma);
*/

function diferencia(n){
 	var sumaCuadrados = 0;
	var suma = 0;
	var i = 1;
    for(i ; i<= n; i++){
        sumaCuadrados += Math.pow(i,2);
        suma += i;
    }  
    suma = Math.pow(suma, 2);
    
    return suma - sumaCuadrados;
}
console.log(diferencia(100));

/*
Objetos son mutables y manipulables por referencia
*/

var miObjeto = {
	valor: 20,
	velocidad: 30
};
console.log(miObjeto.valor);

var otroObjeto = miObjeto;//no es una copia, solo una referencia (JAVA Style)
otroObjeto.velocidad = 100;

console.log(miObjeto.velocidad);

var otroObjeto2 = Object.create(miObjeto);
console.log(miObjeto.velocidad);
console.log(otroObjeto2.velocidad);

/*
EJEMPLO 3
*/

var libro = {
	autor : "Stephen King",
	titulo : "Pet Sematary"
};
console.log(libro.autor);

libro.autor = "J.K. Rowling";
console.log(libro.autor);

console.log(libro.fechaLanzamiento);//propiedad indefinida: undefined

delete libro.autor;//la propiedad pierde el valor asignado
console.log(libro.autor);

/*
EJEMPLO 4: 
Clases, contener que tiene propiedades tales como metodos y variables.

JavaScripot usa funciones como clases (llamadas constructoras)
*/
 var 


