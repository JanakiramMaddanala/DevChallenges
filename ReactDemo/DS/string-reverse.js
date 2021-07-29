function reverse(str) {
  let reverseStringArr = [];
  let j = 0;
  for (let index = str.length - 1; index >= 0; index--) {
    const element = str[index];
    reverseStringArr[j] = element;
    j++;
  }

  console.log(reverseStringArr.join(""));
}

reverse("Hello World!");
