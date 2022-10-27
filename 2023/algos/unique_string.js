console.log(
  isUnique("abcdef"), // -> true
  isUnique("89%df#$a^x"), // -> true
  isUnique("abcAdef"), // -> true
  isUnique("abcdaef") // -> false
);

function isUnique(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) !== i) {
      return false;
    }
  }

  return true;
}
