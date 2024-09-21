// Works for only odd numbers cause it takes the value of middle one soo..

function p1(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (
        i === 0 ||
        j === 0 ||
        i === n - 1 ||
        j === n - 1 ||
        i + j === n - 1 ||
        i === j
      ) {
        process.stdout.write("* ");
      } else process.stdout.write("  ");
    }
    console.log();
  }
}
// * * * * * * * * *
// * *           * *
// *   *       *   *
// *     *   *     *
// *       *       *
// *     *   *     *
// *   *       *   *
// * *           * *
// * * * * * * * * *

function SquareCircle(n) {
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));
  let [top, right, left, bottom] = [0, n - 1, 0, n - 1];
  let value = 1;
  while (value <= n * n) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = value++;
    }
    top++;
    for (let j = top; j <= bottom; j++) {
      matrix[j][right] = value++;
    }
    right--;
    for (let k = right; k >= left; k--) {
      matrix[bottom][k] = value++;
    }
    bottom--;
    for (let m = bottom; m >= top; m--) {
      matrix[m][left] = value++;
    }
    left++;
  }
  return matrix;
}
function matrix(mat) {
  mat.forEach((row, index) => {
    console.log(row.join(`${index === 0 ? "  " : " "}`));
  });
}
matrix(SquareCircle(5));

// 1  2  3  4  5
// 16 17 18 19 6
// 15 24 25 20 7
// 14 23 22 21 8
// 13 12 11 10 9
