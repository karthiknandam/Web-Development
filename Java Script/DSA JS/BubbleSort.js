function takeval(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
// console.log(takeval([32, 28, 8, 12, 45]));

// ^ if the code is some wise sorted what we gonna do:
// this time we are going to stop it whenever we do not need sorted:

function takeval2(arr) {
  let sorted;
  for (let i = arr.length; i > 0; i--) {
    sorted = true;
    for (let j = 0; j < i -1; j++) {
      if (arr[j] > arr[j + 1]) {
        console.log(arr[j], arr[j + 1]);
        // Swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        sorted = false;
      }
    }
    // Check if the array is sorted after each pass
    if (sorted) break;
  }
  return arr;
}

console.log(takeval2([1, 2, 3, 4, 5, 23, 12, 11, 9]));
