console.log(
  isUnique("abcdef"), // -> true
  isUnique("89%df#$a^x"), // -> true
  isUnique("abcAdef"), // -> true
  isUnique("abcdaef") // -> false
);

// time complexity O(n^2))
function isUnique(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) !== i) {
      return false;
    }
  }

  return true;
}

console.log(
  isUnique2("abcdef"), // -> true
  isUnique2("89%df#$a^x"), // -> true
  isUnique2("abcAdef"), // -> true
  isUnique2("abcdaef") // -> false
);

// even better time complexity O(n)
function isUnique2(str) {
  const chars = {};
  for (let i = 0; i < str.length; i++) {
    const thisChar = str[i];

    if (chars[thisChar] === true) {
      return false;
    }

    chars[thisChar] = true;
  }

  return true;
}
