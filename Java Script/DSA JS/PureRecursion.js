function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr;
  if (arr[0] % 2 !== 0) newArr.push(arr[0]);

  newArr = newArr.concat(collectOddValues(arr.slice(1)));

  return newArr;
}

const x = collectOddValues([2, 1, 4, 5, 3, 9, 15]);
console.log(x);
