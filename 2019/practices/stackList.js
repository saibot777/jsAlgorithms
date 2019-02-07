class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null
        this.bottom = null;
        this.length = 0
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.pop) {
            return null;
        }

        if (this.pop === this.bottom) {
            this.bottom = null;
        }

        this.top = this.top.next;
        this.length--;
        return this;
    }

}

const myStack = new Stack();

console.log(myStack.push('google'));
console.log(myStack.push('udemy'));
console.log(myStack.push('course'));

console.log(myStack.peek());

console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
