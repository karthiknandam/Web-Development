function checkSquares(arr1, arr2) {
  // checks if the length is same or not ;
  if (arr1.length !== arr2.length) {
    return false;
  }
  // if not store them in the objects;

  let [freq1, freq2] = [{}, {}];
  addToObj(arr1, freq1);
  addToObj(arr2, freq2);

  for (let val in freq1) {
    // here in checks the value of the key itself not the value of the key value (in)
    if (!(val ** 2 in freq2)) {
      return false;
    }

    if (freq1[val] !== freq2[val ** 2]) {
      // checking the value for the freqency of the second and finding if it is there or not
      return false;
    }
  }
  return true;
}
function addToObj(arr, freq) {
  for (let val of arr) {
    freq[val] = ++freq[val] || 1;
  }
}

console.log(checkSquares([1, 4, 3], [9, 1, 16]));
