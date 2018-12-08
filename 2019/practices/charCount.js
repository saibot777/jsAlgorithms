// Write a function which takes in a string and returns counts of each character in the string.

// example: charCount("hello"); -- {h:1, e:1, l:2, o:1}

function charCount(str) {
    const result = {};

    for(let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase()

        if (/[a-z0-9]/.test(char)) {
            if (result[char] > 0) {
                result[char]++;
            } else {
                result[char] = 1
            }
        }
        
    }

    return result;

}

console.log(charCount('Hello 123333'));