// ^Works for only sorted array

function calculate(arr) {
  let left = 0;
  let right = arr.length - 1;
  //   ? we write beacuse we want to stop the value of the left at some point in order to get the value we must stop it
  while (left < right) {
    const sum = arr[left] + arr[right];
    console.log([arr[left], arr[right]]);
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
const x = calculate([-3, -2, -1, 0, 3, 2, 8, 4, 5].sort((a, b) => a - b));
console.log(x);
