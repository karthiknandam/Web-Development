const  Car = function (name , speed){
    this.name = name ;
    this.speed = speed ;
}


Car.prototype.accelerate = function(){
 this.speed+=10
}
Car.prototype.break = function(){
this.speed-=5;
}
const EV = function(name , speed , chargingPer){
Car.call(this,name , speed);
this.chargingPer = chargingPer;
}

EV.prototype = Object.create(Car.prototype);

EV.prototype.constructor = EV;

EV.prototype.accelerate = function(){
    this.speed+=20;
    this.chargingPer--;
    console.log(`${this.name} is going at spped of ${this.speed} with charging % of ${this.chargingPer}`)
}
EV.prototype.chargingInc = function(charge){
this.chargingPer+=charge;
};

const MHEV = new EV('EVA LECTUS',120);
MHEV.accelerate();
// -> this here accelerate will exicicute the value of the call class in which we called ev according to the java stack method 
MHEV.break();
console.log(MHEV);