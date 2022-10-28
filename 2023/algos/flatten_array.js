// flatten(['abc', ['def', ['ghi']]])
function flatten(nestedArray) {
  const newArray = [];

  for (let i = 0; i < nestedArray.length; i++) {
    const thisItem = nestedArray[i];

    if (Array.isArray(thisItem)) {
      const flatArray = flatten(thisItem);
      for (let j = 0; j < flatArray.length; j++) {
        newArray.push(flatArray[j]);
      }
    } else {
      newArray.push(thisItem);
    }
  }

  return newArray;
}

console.log(flatten([1, 2, 3, [4, 5]]));
console.log(flatten([1, 2, 3, [4, 5], [[[7]]]]));
