function removeDuplicates(numbers) {
  let i = 0;
  do {
    const lastIndexOfI = numbers.lastIndexOf(numbers[i]);
    numbers.splice(i + 1, lastIndexOfI - i);
    i++;
  } while (i < numbers.length);
  console.log(numbers);
}

removeDuplicates([1, 1, 1, 1, 2, 3, 3, 4, 4, 4, 5, 5, 6, 6, 6, 6, 7]);
