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
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        }
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

const tree = new BinarySearchTree();
console.log(tree.insert(9));
console.log(traverse(tree.root));