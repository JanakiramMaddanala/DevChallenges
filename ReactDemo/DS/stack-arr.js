class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.data = [];
  }

  push(value) {
    this.data.unshift(value);
    this.length++;
  }

  pop() {
    const value = this.data.shift();
    this.length--;
    return value;
  }

  peek() {
    return this.data[0];
  }

  print() {
    console.log(this.data.join(" "));
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(4);
stack.push(202);
stack.push(5);
stack.pop();
stack.pop();
stack.pop();
console.log(stack.peek());
stack.print();
