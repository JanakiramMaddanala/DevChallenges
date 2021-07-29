function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    let isFound = false;
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        input[i] = [input[i], j];
        isFound = true;
        break;
      }
    }

    if (!isFound) {
      input[i] = -1;
    }
  }

  console.log(input);

  for (let i = 0; i < input.length; i++) {
    let small = input[i][1];
    let index = i;
    for (let j = i + 1; j < input.length; j++) {
      const element = input[j][1];

      if (element !== -1 && element < small) {
        small = element;
        index = j;
      }
    }

    return input[index][0];
  }

  return undefined;
}

console.log(firstRecurringCharacter([2, 1, 2, 1, 3, 5, 1, 2, 4]));
