// ^ use this for if there is same number of values inorder to check the iterations of them use this method
// ^ use method two for best practice

function cheker(val1, val2) {
  if (val1.length !== val2.length) return false;

  let [x1, x2] = [{}, {}];
  modified(val1, x1);
  modified(val2, x2);
  for (let key in x1) {
    if (!(key in x2)) return false;

    if (x1[key] !== x2[key]) return false;
  }
  return true;
}

function modified(arr, obj) {
  for (let i of arr.toLowerCase()) {
    obj[i] = ++obj[i] || 1;
  }
}
console.log(cheker("gf", "fg"));

// ! Second method best method Compare the same individual pieces:

function checker2(val1, val2) {
  if (val1.length !== val2.length) return false;

  let an1 = {};

  for (let i of val1) {
    an1[i] = ++an1[i] || 1;
  }

  for (let i of val2) {
    if (!an1[i]) return false;
    console.log(val2);

    //  in this case we are subsracting the values of the each key val
    // when it is zero we just want to return false
    // ^ !0 means true so exicicutes the false value

    an1[i] -= 1;

    // ^ Removing the value one by one in order to get the value of the index means the key value;
  }
  return true;
}
console.log(checker2("iam", "ami"));
