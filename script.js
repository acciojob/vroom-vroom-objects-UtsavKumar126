// Complete the js code
function Car(make, model) {
	this.make=make,
	this.model=model	
}
Car.prototype.getMakeModel = function() {
	return ${this.make}+' '+${this.model};
}

function SportsCar(make, model, topSpeed) {
	this.topSpeed=topSpeed;
	Car.call(this,make,model);
}
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Method added to SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
