// First function version
const data = ['nemo'];

function find(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
        }
    }
}

find(data);