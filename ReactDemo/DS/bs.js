function binarySearch(arr, value) {
  const middle = parseInt(arr.length / 2);

  if (arr[middle] === value) {
    return value;
  } else if (arr[middle] < value && middle !== arr.length - 1) {
    return binarySearch(arr.slice(middle + 1), value);
  } else if (arr[middle] > value && middle !== 0) {
    return binarySearch(arr.slice(0, middle), value);
  } else {
    return null;
  }
}

console.log(binarySearch([1, 5, 6, 18, 20, 90], 60));
