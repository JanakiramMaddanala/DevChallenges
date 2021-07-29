// Array.prototype.reduce = function (fn, initialValue) {
//   console.log(this);
//   let accumulator = initialValue;
//   Array.from(this).forEach((item) => {
//     accumulator = fn(accumulator, item);
//   });

//   return accumulator;
// };

// let output = [1, 2, 3].reduce((acc, curr) => (acc += curr), 0);

// console.log(output);

let f;
for (let i = 0; i < 101; console.log(i % 5 ? f || i : f + "Buzz")) {
  f = i % 3 ? "" : "Fizz";
}
