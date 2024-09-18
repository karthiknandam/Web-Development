function pivot(arr, start = 0, end = arr.length) {
  function swap(arr, pivotIndex, i) {
    [arr[pivotIndex], arr[i]] = [arr[i], arr[pivotIndex]];
  }
  let pivotIndex = start;
  let pivotVal = arr[start];

  for (let i = start + 1; i <= end; i++) {
    if (pivotVal > arr[i]) {
      pivotIndex++;
      swap(arr, pivotIndex, i);
    }
  }
  swap(arr, start, pivotIndex);
  return pivotIndex;
}
// pivot([4, 5, 2, 1, 3, 8, 9]);

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
const x = quickSort([4, 5, 2, 1, 3, 9, 8]);
console.log(x);
