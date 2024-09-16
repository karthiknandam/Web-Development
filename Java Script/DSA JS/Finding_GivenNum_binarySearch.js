// ^ Dividing the array by half and searching is it below or above;


function findGivenNumber(arr, num) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let foundVal = arr[middle];

    if (foundVal > num) max = middle - 1;
    else if (foundVal < num) min = middle + 1;
    else return middle;
  }
}
const x = 
findGivenNumber([1, 3, 4, 5, 6, 7, 8, 9, 10, 23, 34, 44, 76], 23);
console.log(x);

// ^ LOG(N)
