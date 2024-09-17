function takerval(str, check) {
  
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < check.length; j++) {
      //   Accesing the value of the index of the upper value by using i+j for next iteration if not the break
      if (check[j] !== str[i + j]) break;
      if (j === check.length - 1) count++;

    }
  }
  return count;
}
console.log(takerval("hey hithere hi", "hi"));
