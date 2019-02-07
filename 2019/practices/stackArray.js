class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.array = [];
    }

    peek() {
        return this.array[this.array.length - 1];
    }

}

const myStack = new Stack();

// console.log(myStack.push('google'));
// console.log(myStack.push('udemy'));
// console.log(myStack.push('course'));

// console.log(myStack.peek());

// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.pop());
