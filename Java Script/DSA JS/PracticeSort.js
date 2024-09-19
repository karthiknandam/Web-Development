//^ Bubble Sort:

function BubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let sort = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        sort = false;
      }
    }
    if (sort) break;
  }
}

BubbleSort([6, 2, 4, 1, 2]);

//^ Insert Sort;
// comparing the first value with the below avalues  if + the swap with the min value:
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let minVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > minVal; j--) {
      arr[j + 1] = arr[j];
      arr[j] = minVal;
    }
  }
  return arr;
}
insertionSort([6, 2, 4, 1, 2]);

// ^ Merge sort :

function merge(arr1, arr2) {
  let arr = [];
  let [i, j] = [0, 0];
  while (arr1.length > i && arr2.length > j) {
    if (arr1[i] < arr2[j]) {
      arr.push(arr1[i]);
      i++;
    } else {
      arr.push(arr2[j]);
      j++;
    }
  }
  // this condition when the arrays are more than each other make sure that two arrays are must sorted:
  //   note this point that we should use only i and j if the i < arr1.length like this
  while (arr1.length > i) {
    arr.push(arr1[i]);
    i++;
  }
  while (arr2.length > j) {
    arr.push(arr2[j]);
    j++;
  }
  return arr;
}

function MergeSort(arr) {
  if (arr.length === 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = MergeSort(arr.slice(0, middle));
  let right = MergeSort(arr.slice(middle));
  return merge(left, right);
}
// const x = MergeSort([2, 8, 10, 32, 14, 13, 1, 23, 11, 10, 1, 4, 6]);
// console.log(x);

//^ quick sort -> handing with one loop and checking the pivote index and updating the value:

function sorterQuick(arr, start = 0, end = arr.length) {
  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  let pivotIndex = start;
  let pivotVal = arr[start];

  // here we use the start +1 in order to prevent all the iterative calls from the quickSort function :

  for (let i = start + 1; i <= end; i++) {
    if (pivotVal > arr[i]) {
      pivotIndex++;
      swap(arr, pivotIndex, i);
    }
  }
  swap(arr, pivotIndex, start);
  return pivotIndex;
}

function Quick(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = sorterQuick(arr, left, right);
    Quick(arr, left, pivotIndex - 1);
    Quick(arr, pivotIndex + 1, right);
  }
  return arr;
}

const m = Quick([4, 2, 1, 6, 3, 8, 9, 10]);
console.log(m);

// ^Radix sort:

function getLastDigit(val, i) {
  return Math.floor(Math.abs(val) / Math.pow(10, i)) % 10;
}
function getLength(val) {
  return Math.floor(Math.log10(Math.abs(val))) + 1;
}
function getMaxVal(arr) {
  let maxVal = 0;
  for (let i = 0; i < arr.length; i++) {
    maxVal = Math.max(maxVal, getLength(arr[i]));
  }
  return maxVal;
}

function radixSort(arr) {
  const maxIteration = getMaxVal(arr);
  for (let k = 0; k < maxIteration; k++) {
    let boxModel = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let lastIn = getLastDigit(arr[i], k);
      boxModel[lastIn].push(arr[i]);
    }
    arr = [].concat(...boxModel);
    console.log(...boxModel);
  }
  return arr;
}
const rd = radixSort([122, 12, 34, 55, 678, 112]);
console.log(rd);
