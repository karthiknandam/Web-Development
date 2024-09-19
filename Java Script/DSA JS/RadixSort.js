function findIndexVal(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
function getNumLength(num) {
  if (num === 0) return 1; //   To avoid this confilct -Infinity
  return Math.floor(Math.log10(num)) + 1;
}
function maxValLength(arr) {
  let maxVal = 0;
  for (let i of arr) {
    maxVal = Math.max(maxVal, getNumLength(i));
  }
  return maxVal;
}

function RadixSort(arr) {
  const maxVal = maxValLength(arr);
  for (let k = 0; k < maxVal; k++) {
    let boxVal = Array.from({ length: 10 }, () => []);
    // Pushing the values based on their index last vlaues into the boxVal and updating through the end of MaxVal;
    for (let i = 0; i < arr.length; i++) {
      let indexVal = findIndexVal(arr[i], k);
      boxVal[indexVal].push(arr[i]);
    }
    arr = [].concat(...boxVal);
    // Updating arr thought the section to get precise value;
  }
  return arr;
}

const x = RadixSort([2333, 4556, 12345]);
console.log(x);
