const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'f'];

// First way
function containSameItem(arr1, arr2) {
    for (let i=0; i < arr1.length; i++) {
        for (let j=0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true
            }
        }
    }
    return false;
}

console.log(containSameItem(array1, array2))

// Second way
function containSameItem2(arr1, arr2) {
    let map = {};
    for (let i=0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            const item = array1[i];
            map[item] = true;
        }
    }

    for (let j=0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            return true;
        }
    }
    return false
}

console.log(containSameItem2(array1, array2))