//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this


var Vector = function(x,y){
	//con this, se puede acceder desde afuer, si hubiera declarado var, tendria que hacer 
	//getter and setter, ya que es una variable :D

	this.x = x;
	this.y = y;

	this.incrementar = function(otroVector){
		this.x += otroVector.x;
		this.y += otroVector.y;
	};

	this.disminuir = function(otroVector){
		this.x -= otroVector.x;
		this.y -= otroVector.y;
	};

	this.getLongitud = function(){
		var resultado = Math.sqrt(this.x * this.x + this.y * this.y);
		return "La longitud es " + resultado;
	};
}

var vector = new Vector(3,4);
console.log(vector.getLongitud());

vector.incrementar(new Vector(2,6));
console.log(vector.x);
console.log(vector.y);
console.log(vector.getLongitud());

