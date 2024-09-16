function calc(str) {
  let myObj = {};
  for (let char of str.toLowerCase()) {
    if (setCode(char)) {
      myObj[char] = ++myObj[char] || 1;
    }
  }
  return myObj;
}

function setCode(char) {
  // ^ Important step to be considered in order to improve the code efficiency;
  const code = char.charCodeAt();
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return false;
  }
  return true;
}

const val = calc("Karthik ! hey thers@");
console.log(val);
