function sortedArray(arr, val) {
  let [left, right] = [0, arr.length - 1];
  let middle = Math.floor((left + right) / 2);
  while (left <= right && arr[middle] !== val) {
    if (val < arr[middle]) right = middle - 1;
    else left = middle + 1;
    middle = Math.floor((left + right) / 2);
  }
  return arr[middle] === val ? middle : -1;
}

console.log(
  sortedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 15, 16, 18, 19], 999)
);
