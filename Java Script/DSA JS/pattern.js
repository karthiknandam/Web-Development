function p1(n) {
  for (let i = 1; i <= n; i++) {
    for (j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

// *
// * *
// * * *
// * * * *
// * * * * *

function px(n) {
  for (let i = n; i >= 0; i--) {
    for (j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

// * * * * *
// * * * *
// * * *
// * *
// *
function p2(n) {
  for (let i = n - 1; i >= 0; i--) {
    for (let k = n - i; k > 0; k--) {
      process.stdout.write("  ");
    }
    for (j = 0; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}
// p2(5);

// * * * * *
//   * * * *
//     * * *
//       * *
//         *

function p3(num) {
  for (let i = 1; i <= num; i++) {
    for (j = 1; j <= i; j++) {
      process.stdout.write(`${j}`);
    }
    console.log();
  }
}
// 1
// 12
// 123
// 1234

function p4(num) {
  for (let i = 1; i <= num; i++) {
    for (j = 1; j <= i; j++) {
      process.stdout.write(`${i}`);
    }
    console.log();
  }
}

// 1
// 22
// 333
// 4444
// 55555

function p5(num) {
  for (let i = num; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

// * * * * *
// * * * *
// * * *
// * *
// *

function p6(num) {
  for (let i = num; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`${j} `);
    }
    console.log();
  }
}
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

function p7(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num - i - 1; j++) {
      process.stdout.write("  ");
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *

// use this formula too 2n - (2i +1)
function p8(num) {
  for (let i = num; i > 0; i--) {
    for (let j = 0; j < num - i; j++) {
      process.stdout.write("  ");
    }
    for (let k = 0; k < i * 2 - 1; k++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}
// * * * * * * * * * * * * *
//   * * * * * * * * * * *
//     * * * * * * * * *
//       * * * * * * *
//         * * * * *
//           * * *
//             *

// p7(7);
// p8(7); -> combination of these two values;

//             *
//           * * *
//         * * * * *
//       * * * * * * *
//     * * * * * * * * *
//   * * * * * * * * * * *
// * * * * * * * * * * * * *
// * * * * * * * * * * * * *
//   * * * * * * * * * * *
//     * * * * * * * * *
//       * * * * * * *
//         * * * * *
//           * * *
//             *

function p9(n) {
  for (let i = 1; i <= 2 * n - 1; i++) {
    let stamp = i;
    if (i > n) stamp = 2 * n - i;
    for (let j = 0; j < stamp; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}
// *
// * *
// * * *
// * * * *
// * * * * * -> here we need to flip the section of j  < value for that we can do it like this 2n - i;
// * * * *
// * * *
// * *
// *

function p10(n) {
  let state;
  for (let i = 0; i < n; i++) {
    i % 2 === 0 ? (state = 1) : (state = 0);
    for (let j = 0; j <= i; j++) {
      process.stdout.write(`${state}`);
      state = 1 - state;
    }

    console.log();
  }
}

// 1
// 01
// 101
// 0101
// 10101

function p11(num) {
  for (let i = 1; i <= num; i++) {
    for (j = 1; j <= i; j++) {
      process.stdout.write(`${j} `);
    }
    for (let k = 0; k < 2 * num - 2 * i; k++) {
      process.stdout.write("  ");
    }
    for (let m = i; m >= 1; m--) {
      // -> stopping at the value of 1 not i
      process.stdout.write(`${m} `);
    }
    console.log();
  }
}

// 1                 1
// 1 2             2 1
// 1 2 3         3 2 1
// 1 2 3 4     4 3 2 1
// 1 2 3 4 5 5 4 3 2 1

function p13(n) {
  let num = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`${num} `);
      num++;
    }
    console.log();
  }
}

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

function p14(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write(`${String.fromCharCode(65 + j)} `);
    }
    console.log();
  }
}
// A
// A B
// A B C
// A B C D
// A B C D E

function p15(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= n - i; j++) {
      process.stdout.write(`${String.fromCharCode(65 + j)} `);
    }
    console.log();
  }
}
// A B C D E
// A B C D
// A B C
// A B
// A

function p16(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write(`${String.fromCharCode(65 + i)}`);
    }
    console.log();
  }
}
// A
// BB
// CCC
// DDDD
// EEEEE

function p17(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write("  ");
    }
    let num = 0;
    for (let k = 0; k < 2 * i + 1; k++) {
      process.stdout.write(`${String.fromCharCode(65 + num)} `);
      k >= i ? num-- : num++;
    }
    console.log();
  }
}
// ? For decriment purpose:
// for (let m = i - 1; m >= 0; m--) {
//   process.stdout.write(`${String.fromCharCode(65 + m)} `);
// }
//         A
//       A B A
//     A B C B A
//   A B C D C B A
// A B C D E D C B A

function p18(n) {
  for (let i = 1; i <= n; i++) {
    for (j = n - i; j < n; j++) {
      process.stdout.write(`${String.fromCharCode(65 + j)} `);
    }
    console.log();
  }
}
// E
// D E
// C D E
// B C D E
// A B C D E

function p19(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      process.stdout.write("* ");
    }
    for (let k = 0; k < 2 * i; k++) {
      process.stdout.write("  ");
    }
    for (let m = 0; m < n - i; m++) {
      process.stdout.write("* ");
    }
    console.log();
  }
  for (let x = 1; x <= n; x++) {
    for (let y = 0; y < x; y++) {
      process.stdout.write("* ");
    }
    for (let z = 0; z < 2 * n - 2 * x; z++) {
      process.stdout.write("  ");
    }
    for (let w = 0; w < x; w++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}
// * * * * * * * * * *
// * * * *     * * * *
// * * *         * * *
// * *             * *
// *                 *
// *                 *
// * *             * *
// * * *         * * *
// * * * *     * * * *
// * * * * * * * * * *

function p20(n) {
  for (let i = 1; i <= 2 * n; i++) {
    let barter = i;
    if (i > n) barter = 2 * n - i;
    for (let j = 1; j <= barter; j++) {
      process.stdout.write("* ");
    }
    for (let k = 0; k < 2 * n - 2 * barter; k++) {
      process.stdout.write("  ");
    }
    for (let m = 1; m <= barter; m++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}
// -> use a condition which satisfy's if the vlaue i is more than the n give value then decrease it by 1 each time for that
// -> for that give the condition that it should run until this barter and also the condition is 2n - i;
// *                 *
// * *             * *
// * * *         * * *
// * * * *     * * * *
// * * * * * * * * * *
// * * * *     * * * *
// * * *         * * *
// * *             * *
// *                 *

function p21(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
        process.stdout.write("* ");
      } else process.stdout.write("  ");
    }
    console.log();
  }
}
// * * * * *
// *       *
// *       *
// *       *
// * * * * *
function returnIndex(num, i, j, val) {
  if (i === num || i === num - 1 || j === num || j === num - 1) {
    process.stdout.write(`${val}`);
  } else process.stdout.write("  ");
}
function p22(n) {
  for (let i = 0; i < 2 * n - 1; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
      // calcthe min distance to the boundary in this case wall
      //   top = i , left = j , roight = 2*n-2 - j , bottom = 2*n-2-i get the min val ma
      let num = n - Math.min(i, j, 2 * n - 2 - i, 2 * n - 2 - j);
      process.stdout.write(`${num} `);
    }
    console.log();
  }
}
// * let num = n - Math.min(i, j, 2 * n - 2 - i, 2 * n - 2 - j); is important for this kind of problem;
// 4 4 4 4 4 4 4
// 4 3 3 3 3 3 4
// 4 3 2 2 2 3 4
// 4 3 2 1 2 3 4
// 4 3 2 2 2 3 4
// 4 3 3 3 3 3 4
// 4 4 4 4 4 4 4
