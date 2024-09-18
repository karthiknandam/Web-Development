// ^ sorting two sorted arrays using while loop and exteran i and j 's;

function Merge(arr1, arr2) {
  let arr = [];
  let [i, j] = [0, 0];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr.push(arr1[i]);
      i++;
    } else {
      arr.push(arr2[j]);
      j++;
    }
  }
  //   if the length is too small for 1st or second we just take te previous value of the i or j and increment the rest of the values to the array;
  while (i < arr1.length) {
    arr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    arr.push(arr2[j]);
    j++;
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let midVal = Math.floor(arr.length / 2);
  console.log(midVal);
  let left = mergeSort(arr.slice(0, midVal));
  //   -> stored the part and divide it into entirity; -> final store the global in and each val got return for the left and right for the fianl
  let right = mergeSort(arr.slice(midVal));
  //   Returning the value here is very important it shows evry iteration to return the value to left or it may be right;

  return Merge(left, right);
}

const x = mergeSort([2, 8, 3, 10, 5]);
const y = Merge([2, 8], [3, 5, 10]);
console.log(x, y);
