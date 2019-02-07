class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {

    }

    lookup(value) {

    }
}

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null :
    traverse(node.left);
    tree.right = node.right === null ? null :
    traverse(node.right)
    return tree; 
}

const tree = new BinarySearchTree()