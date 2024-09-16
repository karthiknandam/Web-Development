function maxSubarraySum(arr, val) {
  if (arr.length < val) return false;

  let [tempval, maxValue] = [0, 0];

  for (let i = 0; i < val; i++) {
    maxValue += arr[i];
  }
  tempval = maxValue;

  for (let i = val; i < arr.length; i++) {
    tempval = tempval - arr[i - val] + arr[i];
    maxValue = Math.max(tempval, maxValue);
  }
  return maxValue;
}

const x = maxSubarraySum([4, 2, 1, 6, 2], 4);
console.log(x);

// ^ O(N) space = O(1)
