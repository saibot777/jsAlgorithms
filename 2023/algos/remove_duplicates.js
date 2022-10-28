console.log(
  removeDupes("abcd"),
  removeDupes("aabbccdd"),
  removeDupes("abababcdcdcd")
);

function removeDupes(str) {
  const uniqueChars = [];

  for (let i = 0; i < str.length; i++) {
    const thisChar = str[i];
    if (uniqueChars.includes(thisChar)) {
      continue;
    } else {
      uniqueChars.push(thisChar);
    }
  }

  return uniqueChars.join("");
}
