// import { default as c } from "./module2";
// console.log("From module 1");
// console.log(this);

// const a = 1;
// const b = 2;
// export default a;

// console.log(c);

export default function makeAdder(n) {
  var inc = 0;
  var sum = 0;

  return function () {
    inc = n;
    sum = sum + inc;
    return sum;
  };
}
