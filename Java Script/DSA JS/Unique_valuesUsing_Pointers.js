function uniqueValueCount(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (!(arr[i] === arr[j])) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

// ^ jumping on to the new value
// ^ taking the values form i , j if it  not == just + i and make arr[i] = arr[j] if not do nothing cause it is in loop so be on it so ill add to the value if the so do nothing it is o(n) times

const x = uniqueValueCount([1, 1, 2, 2, 2, 2, 3, 5, 7, 8, 9, 9, 10]);
console.log(x);

const set = new Set([1, 1, 2, 2, 2, 2, 3, 5, 7, 8, 9, 9, 10]);
console.log([...set].length);
