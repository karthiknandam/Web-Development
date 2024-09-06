const inp = 'Hi My name is Karthikeya';
const vowels = new Set('aeiou');
let count = 0;
for(let el of inp.toLowerCase()){
    if(vowels.has(el))count++;
};
console.log(count);

// ^ has method searches all the values in the inp;

// ~Lengthy method time complexity is much more higher than it looks


// const values  = inp.toLowerCase().replaceAll(' ','').split('');
// let count=0;
// values.forEach(v=>{
//     const calc = owels.find((x)=> x===v);
//     if(calc) count++;
// });

// console.log(count);

