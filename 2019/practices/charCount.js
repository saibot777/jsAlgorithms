// Write a function which takes in a string and returns counts of each character in the string.

// example: charCount("hello"); -- {h:1, e:1, l:2, o:1}

function charCount(str) {
    const result = {};

    for(let char of str) {

        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            result[char] = ++result[char] || 1;
        }
        
    }

    return result;

}

function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);

    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
    }
    return true;
}



console.log(charCount('Hello 123333 FFFD'));