// ~ ES6 class creation and using constructor method for creating the new object;

class Person {
    constructor(fullName , birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge(){
        console.log(`Hey ${this.fullName} your age is ${2024-this.birthYear}`);
    }

    get calcAgeGet(){
        console.log('23');
    }

    set fullName(name){ // -> full name should be same in the declaring section other wise we will not able to make it the set method
        name.includes(' ') ? this._fullName = name : alert("This is not the full name");
        // ->this.fullName we already decalred so we should use a special keyword which will not throw any error "_"
    }
    get fullName(){
        return this._fullName;
    }
};

const karthik = new Person('Karthik Nadam',2003);
const micky = new Person('Micky Jonsan',2004);
// -> set and get methods exicute automatically when we call the new object make sure that;
// other wise in noramal object we should call them to exicute 
// -> Set and get methods should have the same name but in set we should mension a parameter to pass into it or sprea the array of array ;
karthik.calcAge();
karthik.calcAgeGet;
console.log(karthik);
console.log(micky);

Person.prototype.getIncome = function(){
    this.birthYear === 2003 ? console.log("You can get upto 50k a month"): console.log("You can get more than 1 lakh a month");
}

karthik.getIncome();
micky.getIncome();

// ~Get and setter methods in the OOP

const Value = {
    name:'Karthik',
    age:21,

    get info(){
        console.log(`welcome Mr.${this.name} your age is ${this.age}`);
    },

    set info(age){
        this.age+=age;
    }
};

Value.info = 1;
console.log(Value.age);


// ^ More ES6 classes 

class account{
    // -> public fields

    locale = navigator.language;

    // -> private fields (can not acces outside of the account class)

    #movements = [];

    constructor(name , accType){
        this.name = name;
        this.accType = accType;
    }


    // -> public methods here
    deposit(val){
        // if(this._accountCheck){ --> protected use case scenario
        if(this.#accountCheck){
            this.#movements.push(val);
        }
    }
    withdrawl(val){
        this.deposit(-val);
    }


    // -> protected method (Use _ infront of any method to protect the data but it can be access ouside make sure that)
    // _accountCheck(val){

    // -> private methods are working now with the next to the prototype


    #accountCheck(val){
        return true;
    }

    // PrivateMethods[1]
    // 0
    // :
    // #accountCheck(val){ return true; } {name: '#accountCheck', value: ƒ}
}

const bish = new account('Bish','Savings');
bish.deposit(200);
bish.withdrawl(100);
console.log(bish);

//  public fields , methods
//  private fields , methods
// -> private methods not works exept the chrome

// # use infront of any value to make it to private;
// just mension the value above the constructor to make the field public
