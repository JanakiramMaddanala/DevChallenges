// const person = {
//   id: 1,
//   name: "ram",
// };

// console.log(person.id);

// let arrayOf = Array.of(8, 39302, 9393, 3);
// let arrayFill = new Array(4).fill(0, 1, 3);
// console.log(Array.from([1, 2, 3].entries()));

// let v = void (() => false);

// const bob = { name: "Bob" };
// const alice = { name: "Alice" };
// const foundAt = [bob, alice].findIndex(({ name: { length: l } }) => l > 3);
// const value = {
//   0: "a",
//   1: "b",
//   2: "c",
//   length: 4,
// };

// console.log({ ...value });

// const arr = [, ,];
// const keys = [...arr.keys()];
// keys;

// console.log(String.raw`\n`);

// console.log(`\\n`);

// function sayHi(person) {
//   const name = person.name;
//   setTimeout(() => {
//     console.log("Hello, " + name);
//   }, 3000);
// }

// let someone = { name: "Dan" };
// sayHi(someone);

// someone.name = "Jim";
// sayHi(someone);

// someone.name = "Dominic";
// sayHi(someone);

const obj = {
  name: "ram",
  display: function () {
    console.log(this);
    return this.name;
  },
};

const display = obj.display;
display();

obj.display();

console.log(this);

var a = 50;

function variables() {
  let a = 1;

  if (true) {
    // console.log(a);
    let a = 10;
    console.log(a);
  }

  console.log(a);
}

variables();
console.log(a);

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...newArgs) {
        return curried(...args, ...newArgs);
      };
    }
  };
}

function sum(a, b, c, d) {
  return a + b + c + d;
}

const curriedSum = curry(sum);

let value = curriedSum(1)(2)(3)(4);
console.log(value);
value = curriedSum(1, 2, 3)(4);
console.log(value);

function Person() {
  this.name = "Ram";

  return {
    sayName: () => this.name,
  };
}

const person = new Person();
console.log(person);

console.log(Person.prototype);
Person.prototype.getFullName = () => this.name;

// console.log(person.getFullName());

class Employee {
  name;
  id;
  sex;

  constructor(name, id, sex) {
    console.log(this);
    this.name = name;
    this.id = id;
    this.sex = sex;
  }

  getName() {
    return this.name;
  }
}

let emp = new Employee("Ram", 1, "Male");
console.log(emp);
console.log(Employee.prototype);
console.log(emp.getName());

const info = {
  title: "Once Upon a Time",
  protagonist: {
    name: "Emma Swan",
    enemies: [
      { name: "Regina Mills", title: "Evil Queen" },
      { name: "Cora Mills", title: "Queen of Hearts" },
      { name: "Peter Pan", title: `The boy who wouldn't grow up` },
      { name: "Zelena", title: "The Wicked Witch" },
    ],
  },
};

const {
  title,
  protagonist: {
    name: protagonistName,
    enemies: [, , { title: enemyTitle, name: enemyName }],
  },
} = info;

console.log(
  `${enemyName} (${enemyTitle}) is an enemy to ${protagonistName} in "${title}"`
);

const Greeting = function () {
  return "Hello";
};

console.log(new Greeting());

var acd = 2;

const involvement = null;

console.log(involvement === null || involvement.name !== "OFFENDER");

const a1 = {
  id: Symbol("id"),
  name: "ram",
  name2: "",
};

console.log(JSON.stringify(a1));

let id, name2;
({ id, name2 } = a1);

let salary = { low: "32000", average: "50000", high: "75000" };
let newLow, newAverage, newHigh;
({ low: newLow, average: newAverage, high: newHigh } = salary);
console.log(newHigh);

const objNew = {
  id: 1,
  [Symbol.toStringTag]: "obj",
  // toString: () => "Object New",
  [Symbol.toPrimitive](hint) {
    console.log(`${hint}`);

    return this.id;
  },
};

console.log(objNew.toString());
console.log(String(objNew));

const promise = new Promise((resolve, reject) => {
  resolve("Hello in promise");
}).then((res) => console.log(res));

console.log("Hello outside ");

const MyUser = class {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length === 0) {
      throw new Error("Invalid Name set");
    }

    this._name = value;
  }
};

let user = new MyUser("Ram");
// user.name = "";
console.log(user);

const a11 = { x: "x", y: "y" };
var b = Object.freeze(a11);
console.log(a11, b, a11 === b);
b.x = "xy";
console.log(a11, b, a11 === b);

var moveZeroes = function (nums) {
  let zeroIndexes = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroIndexes.unshift(i);
    }
    console.log(zeroIndexes);

    if (nums[i] !== 0) {
      nums[zeroIndexes.pop()] = nums[i];
      nums[i] = 0;
      zeroIndexes.unshift(i);
    }

    console.log(nums);
  }

  console.log(nums);
};

moveZeroes([0, 1, 0, 3, 12]);
