class MyArray {
  constructor() {
    this.data = {};
    this._index = 0;
  }

  push(value) {
    this.data[this._index++] = value;
  }

  pop() {
    if (this.length > 0) {
      this._index--;
      const value = this.data[this._index];
      delete this.data[this._index];
      return value;
    }
  }

  get length() {
    return this._index;
  }

  unshift(value) {
    for (let i = this._index; i >= 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = value;
    this._index++;
  }

  shift() {
    if (this.length > 0) {
      for (let i = 0; i < this._index; i++) {
        this.data[i] = this.data[i + 1];
      }
      delete this.data[this._index];
      this._index--;
    }
  }
}

const array = new MyArray();
array.pop();
array.shift();
array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.unshift(10);
console.log(array.length, array);
