class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null,
    };

    this.tail = this.head;
    this.length = 1;
  }
  z;

  append(value) {
    const newNode = { value, next: null, prev: null };
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = { value, next: null, prev: null };
    const temp = this.head;
    this.head = newNode;
    this.head.next = temp;
    temp.prev = this.head;
    this.length++;
  }

  insert(index, value) {
    if (index >= this.length) {
      this.append(value);
      return;
    }

    const nodeBeforeIndex = this.traverseTo(index - 1);
    const newNode = { value, next: null };
    const nodeAtIndex = nodeBeforeIndex.next;
    nodeBeforeIndex.next = newNode;
    newNode.next = nodeAtIndex;
    newNode.prev = nodeBeforeIndex;
    nodeAtIndex.prev = newNode;
    this.length++;
  }

  traverseTo(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  remove(index) {
    if (index >= this.length) {
      index = this.length - 1;
    }

    if (index === 0) {
      const headNext = this.head.next;
      this.head = headNext;
      this.head.prev = null;
      return;
    }
    const nodeBeforeIndex = this.traverseTo(index - 1);
    const nodeAtIndex = nodeBeforeIndex.next;
    const nodeAfterIndex = nodeAtIndex.next;
    nodeBeforeIndex.next = nodeAfterIndex;
    nodeAfterIndex.prev = nodeBeforeIndex;
    nodeAtIndex.prev = nodeAtIndex.next = null;
    this.length--;
  }

  reverse() {
    let firstNode = this.head;
    let secondNode = this.head.next;
    this.tail = this.head;

    while (secondNode !== null) {
      const nextNode = secondNode.next;
      secondNode.next = firstNode;
      firstNode.prev = secondNode;
      firstNode = secondNode;
      secondNode = nextNode;
    }

    this.head = firstNode;
    this.tail.next = null;
  }

  printList() {
    const values = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(values.join(" ==> "));
  }
}

const linkedList = new DoublyLinkedList(10);
linkedList.append(2);
linkedList.append(3);
linkedList.append(5);
linkedList.append(12);
linkedList.prepend(0);
linkedList.prepend(-1);
linkedList.insert(300, 100);
linkedList.printList();
linkedList.reverse();
linkedList.printList();
linkedList.append(32);
linkedList.printList();
linkedList.remove(3);
linkedList.printList();
