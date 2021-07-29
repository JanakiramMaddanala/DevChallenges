class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = { value, right: null, left: null };
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }

        currentNode = currentNode.left;
      }

      if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  lookup(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return value;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      }

      if (value > currentNode.value) {
        currentNode = currentNode.right;
      }
    }

    return null;
  }

  lookupRecursive(node, value) {
    let currentNode = node;
    if (value === currentNode.value) {
      return value;
    }

    if (value < currentNode.value && currentNode.left) {
      return this.lookupRecursive(currentNode.left, value);
    }

    if (value > currentNode.value && currentNode.right) {
      return this.lookupRecursive(currentNode.right, value);
    }

    return null;
  }

  bfs() {
    let currentNode = this.root;
    const list = [];
    const queue = [];
    queue.push(currentNode);
    while (queue.length > 0) {
      const currentNode = queue.shift();
      list.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return list;
  }

  bfsRecursive(queue, list) {
    if (queue.length === 0) {
      return list;
    }

    const currentNode = queue.shift();
    list.push(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    return this.bfsRecursive(queue, list);
  }

  dfsInOrder(node, list) {
    const value = this.traverseInOrder(node, list);
    console.log(value);
    return value;
  }

  traverseInOrder(node, list) {
    if (node.left) {
      this.traverseInOrder(node.left, list);
    }
    list.push(node.value);
    if (node.right) {
      this.traverseInOrder(node.right, list);
    }

    return list;
  }

  dfsPreOrder(node, list) {
    list.push(node.value);
    if (node.left) {
      this.dfsPreOrder(node.left, list);
    }

    if (node.right) {
      this.dfsPreOrder(node.right, list);
    }
    console.log(list);
  }

  dfsPostOrder(node, list) {
    if (node.left) {
      this.dfsPostOrder(node.left, list);
    }

    if (node.right) {
      this.dfsPostOrder(node.right, list);
    }
    list.push(node.value);

    console.log(list);
  }
}

const bst = new BinarySearchTree();
bst.insert(15);
bst.insert(10);
bst.insert(11);
bst.insert(1);
bst.insert(5);
bst.insert(9);
bst.insert(14);
console.log(bst.lookupRecursive(bst.root, 10));
console.log(bst.bfs());
console.log(bst.bfsRecursive([bst.root], []));
bst.dfsInOrder(bst.root, []);
bst.dfsPreOrder(bst.root, []);
bst.dfsPostOrder(bst.root, []);

//                 15
//              10
//           1     11
//             5       14
//               9
