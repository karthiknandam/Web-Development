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



// ^ -> Challenge #4 Car and EV class by implimenting chaining methods and making private charge method here ;


class Carcl {
    constructor(name , speed){
        this.name= name ;
        this.speed = speed;
    }

    accelerate(){
        this.speed += 10;
        console.log(`You are moving at a speed of ${this.speed}`);
        return this;
    }

    break(){
        this.speed -=5;
        console.log(`You are moving at a speed of ${this.speed}`);
        return this;
    }
}

class ElectricCl extends Carcl{
    #charge;
    constructor(name , speed , chargePer){
        super(name , speed);
        this.#charge = chargePer;
    }

    accelerate(){
        this.speed +=20;
        console.log(`Your ${this.name} car is going at a speed of ${this.speed}`);
        return this;
        
    }
    set charging(charge){
        this.speed--;
        this.#charge = charge;
        console.log(`Your charging is ${this.#charge} and going at a speed of ${this.speed}`);
        return this;
    }
}

const Punch = new ElectricCl('Punch',110,35);

Punch.accelerate().accelerate().break().charging = 33;
console.log(Punch);