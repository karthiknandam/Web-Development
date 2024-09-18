function InsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let minVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > minVal; j--) {
      arr[j + 1] = arr[j];
      arr[j] = minVal;
    }
  }
  return arr;
}
const x = InsertionSort([2, 1, 3, 6, 9, 10, 5]);
console.log(x);
