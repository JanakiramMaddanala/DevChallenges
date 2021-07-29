class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const currentTop = this.top;
      this.top = newNode;
      this.top.next = currentTop;
    }
    this.length++;
  }

  pop() {
    if (this.length > 0) {
      this.top = this.top.next;
    } else {
      return null;
    }
    this.length--;
  }

  peek() {
    return this.top;
  }

  print() {
    const values = [];
    let currentNode = this.top;
    while (currentNode !== null) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(values.join("\n"));
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(4);
stack.push(202);
stack.push(5);
console.log(stack.peek());
stack.print();
