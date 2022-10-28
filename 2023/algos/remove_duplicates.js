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

console.log(
  removeDupes2("abcd"),
  removeDupes2("aabbccdd"),
  removeDupes2("abababcdcdcd")
);

function removeDupes2(str) {
  const chars = new Set(str);
  return Array.from(chars).join("");
}
