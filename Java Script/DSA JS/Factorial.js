function recursion(num) {
  if (num === 1) return 1;
  return num * recursion(num - 1);
}
const x = recursion(4);
console.log(x);
