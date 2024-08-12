

// ^ Some more Array methods 

// const app = (movements , sort=false)=>{
//     const src = sort?movements.sort((a,b)=>a-b):movements;
//     console.log(src);
// }
// app([2,1,3,55,43,12,32]);

// Array methods 

// const a = new Array(7);
// a.fill(1,2);
// console.log(a);

// const b = Array.from({length:7},(f,i)=>i*2);
// console.log(b);

// const al = ["a","b","c","d","e","f"];
// const typem = ["a",12,{name:"karthikeya"}];
// const af = Array.from(typem);
// af[0] = "Mixy";
// af[2].name = "Width";
// console.log(typem);
// console.log(af);


// const ArrFrom = Array.from(al);
// ArrFrom[0] = "c"
// console.log(ArrFrom);
// ^ non primitive store in some where else so we can't take the original one shallow copy vs deep copy
//! shallow copy vs deep copy -> 
// ? O/p
// [ 'a', 12, { name: 'Width' } ]
// [ 'Mixy', 12, { name: 'Width' } ]
// [ 'c', 'b', 'c', 'd', 'e', 'f' ]


//^ Reduce method with object ;

// const apple = [1,-1,-3,-20,-50,13,12,14,155,111,12,-3,-44];
// const obj = apple.reduce(function(sum,cur){
//     cur>0?sum.deposits+=cur:sum.Withdrwal+=cur;
//     return sum;
// },{deposits:0,Withdrwal:0})
// console.log(obj);
// ? O/P
// { deposits: 318, Withdrwal: -121 }

//^ Parse int and Parse Float;

// console.log(Number.parseInt("20fs"));20
// console.log(Number.parseFloat("20fs"));20

// isFinite;
// isNaN;

// ^ Random values ;

// const values = [];
// for(i=1 ; i<10 ; i++){
//     const value = Math.trunc(Math.random()*5)+1;
//     values.push(value)
// }
// console.log(values);


// ~ range from max and min only;

// const values = [];
// for(i=1 ; i<10 ; i++){
// const range = (max,min)=>{
//     const val = Math.trunc(Math.random()*(max-min)+1)+min;
//     values.push(val);
// }
// range(20,10);
// }

// console.log(values) [
//   16, 11, 19, 20, 17,
//   13, 13, 15, 12
// ];

// ^ More Math functions ;
// round -> round to the closest value;
// ceil -> alwaz to the upwards ;
// floor -> "23" and 23.3 to 23 and "-23.3" -> 24;

// toFixed -> fixes to the closest values base upon the given value ;

// console.log(2.7.toFixed(0));3
// console.log(2.7.toFixed(2));2.70
// console.log(2.7.toFixed(3));2.700
// console.log(2.3.toFixed(0));2

// 

// const future = Date.now();

// const time = new Intl.NumberFormat('en-in').format(Date.now());
// console.log(time);

// ~ Calc days;

const calcDays = (day1 , day2)=>(day2-day1)/(24*3600*1000);
console.log(calcDays(new Date(2024,10,10), new Date(2024,10,15)));



