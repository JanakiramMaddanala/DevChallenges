function mergeSortedArrays(arr1, arr2) {
  if (!arr1 || arr1.length === 0) {
    return arr2;
  }

  if (!arr2 || arr2.length === 0) {
    return arr1;
  }

  let newArr = [];
  let j = 0;
  let k = 0; //[1,4] [2,4,5]
  for (let i = 0; i < arr1.length + arr2.length; i++) {
    if (arr1[j] <= arr2[k]) {
      newArr.push(arr1[j]);
      j++;
    }

    if (arr1[j] > arr2[k]) {
      newArr.push(arr2[k]);
      k++;
    }

    if (!arr1[j] && arr2[k]) {
      newArr.push(arr2[k]);
      k++;
    }

    if (!arr2[k] && arr1[j]) {
      newArr.push(arr1[j]);
      j++;
    }
  }

  return newArr;
}

console.log(mergeSortedArrays([10, 13], [2, 4, 5]));
