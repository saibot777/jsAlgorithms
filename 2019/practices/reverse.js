// First Way
function reverse(str) {
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'Invalid Input'
    }

    const backwards = [];
    const totalItems = str.length - 1;

    for (let i = totalItems; i >= 0; i--) {
        backwards.push(str[i]);
    } 

    return backwards.join(' ');

}

console.log(reverse('Hej bro'))