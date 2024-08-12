
// *Topics covered in this file

// ~ [Set time out]

// ~ [Array methods]

// ~ [For Each loop];

// ~ [Map forEach ]

// ~ [Map , Reduce , Filter]

// ~ [Simple username creating without disturbing the original value in it;]

// ~ [Filter key word store the values in new array] ;

// ~ [Find and findindex ]

// ~ [Some and every] 

// ~ [Flat and FlatMap ;]

// ~ [Sorting arrays easily]



// * Let's Get Started ;



// ~ [Set time out]

// setTimeout(()=>{
//     const myName = "Mad";
//     console.log(myName);
// },3000);
// ~ [Array methods]

// let arr = [1,2,3,4,5];

// let m  = arr.slice(1,3);

// console.log(arr.splice(2)); 

// ? To delete one or more varibles;

// console.log(arr , m.reverse());

// console.log(arr.concat(m));
// let x = arr.splice(0,3);
// console.log(-arr.length+1);

// console.log(arr);

// ~ [For Each loop];

// const x = [1,2,3,4,5];
// x.forEach((a,i,ar)=>{
//     console.log(`a(${i}) -> ${a} of arr [${ar}]`);
// })

//? Vs for of loop;
// for(const [i,value] of x.entries())
// ? A/value for value of each item and i for index of that item and ar for entire array of the x;

// a(0) -> 1 of arr [1,2,3,4,5]
// a(1) -> 2 of arr [1,2,3,4,5]
// a(2) -> 3 of arr [1,2,3,4,5]
// a(3) -> 4 of arr [1,2,3,4,5]
// a(4) -> 5 of arr [1,2,3,4,5]

// ~ [Map forEach ]

// const mapValues = new Map([
//     ["Sports" , "Vollyball"],
//     ["Read","TXT book"]
// ]);
// mapValues.forEach((value,key,arr)=>{
//     console.log(value , key);
//     console.log(arr);
    
// })
// Vollyball Sports
// Map(2) { 'Sports' => 'Vollyball', 'Read' => 'TXT book' }
// TXT book Read
// Map(2) { 'Sports' => 'Vollyball', 'Read' => 'TXT book' }


// ~ [Map , Reduce , Filter]

// const c = [2,3,4,5,6,7];
// const y = c.map((v)=>{
//     let m =  v*2;
//     console.log(m);
//     return m ;
// })
// console.log(y);
// [ 4, 6, 8, 10, 12, 14 ]

// x.map((mov,i,arr)=>{
    // i for index and mov for value and arr for entire array})

// ~ [Simple username creating without disturbing the original value in it;]

// const acc1 = {
//     owner:"Karthik",
// }
// const acc2 = {
//     owner:"Vishal",
// }
// const acc = [acc1,acc2];
// acc.forEach((mov)=>{
//     const m = mov.owner.toLowerCase().split("").map((a)=>{return a}).join("").slice(0,2);
//     mov.userId = m;
// })
// console.log(acc1);

// ~ [Filter key word store the values in new array] ;

// const acc = [25,3,45,9,12,33,43,24,14,16,10];
// const a = acc.filter((ac)=>ac%2==0);
// console.log(a.sort((a,b)=>a-b));


// ~ [Reduce key reduces entire array give only single value not in the array form it gives only in the number format;]

// const x = [2,4,6,8,10,15];
// const y = x.reduce((ac,val,i,arr)=>{
//         return ac+val;
// },0);

// |
// Intitalizing the first parameter is very important so that we can add the original value to the quest;

// console.log(y);

// ? finding the max value using only reduce method;

// const x = [25,33,31,36,66,45,89,12];

// console.log(maxValue);
// const maxValue = x.reduce((acc,mov)=>{
//     if(mov>acc)return mov;
//     else return acc;
// },0)

// ~ [Find and findindex method by finding the object or any varible ;]

// const value1 = {
//     name : "kart",
//     ui : "ka",
//     score :2
// }
// const value2 = {
//     name : "tickj",
//     ui : "ti",
//     score :20
// }
// const value3 = {
//     name : "marrr",
//     ui : "mr",
//     score :0
// }
// const value4 = {
//     name : "ish",
//     ui : "is",
//     score :12
// }
// const value = [value1 , value2 , value3 ,value4];

// const findVal = value.find((val)=> {
//     return val.name === "ish"
// })
// const findInd = value.findIndex((val)=> {
//     return val.name === "ish"
// })
// console.log(findInd);

// ~ [Some and every] ;

// const findSome = value.some(val =>{
//     return val.score>12;
// })

// console.log(findSome);
// const findEvr = value.every(val =>{
//     return val.score>12;
// })
// console.log(findEvr);

// ? O/P
// { name: 'ish', ui: 'is', score: 12 }  
// 3
// true
// false

// ~ [Flat and FlatMap ;]

// let arr = [1,2,[2,4,5,6],[5,66,[2,33,22]]];
// Normal vs Deep Nested ,
// console.log(arr.flat());
// console.log(arr.flat(2));

// ? O/P ;

// [ 1, 2, 2, 4, 5, 6, 5, 66, [ 2, 33, 22 ] ]
// [
//    1, 2,  2, 4,  5,
//    6, 5, 66, 2, 33,
//   22
// ]

// const employees = [
//     {
//         place:"Swedish",
//         employes:["Jhon","Dev"]
//     },
//     {
//         place:"Gb",
//         employes:["Alex","Martin"]
//     },
//     {
//         place:"Swedish",
//         employes:["Json","Max"]
//     }
// ]
// const emplyNames = employees.flatMap(empl=>empl.employes);
// console.log(emplyNames);

// ? O/P

// [ 'Jhon', 'Dev', 'Alex', 'Martin', 'Json', 'Max' ]

// Or we can try the other method as well by using two arr methods which is flat and map methods ;
// Let's see how that's go here;

// const usingMF = employees.map(em=>em.employes).flat();
// console.log(usingMF);

// ? O/P

// [ 'Jhon', 'Dev', 'Alex', 'Martin', 'Json', 'Max' ]

// ~ [Sorting arrays easily];

// const am = [2,4,5,1,55,90,22,33,12,10,3];
// console.log(am.sort((a,b)=>a-b));





