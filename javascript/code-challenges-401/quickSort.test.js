let swap = (array, i, low) => {
  let temp;

  temp = array[i];
  array[i] = array[low];
  array[low] = temp;
};

let partition = (array, left, right) => {
  let pivot = array[right];

  let low = left - 1;

  for (let i = low; i < right; i++) {
    if (array[i] < pivot) {
      swap(array, i, low + 1);
    }
  }

  swap(array, right, low + 1);

  return low + 1;
}

let quickSort = (array) => {
  let left = array[0];
  let right = array[array.length - 1];

  if (left < right) {
    let position = partition(array, left, right);

    quickSort(array, left, position - 1);
    quickSort(array, position + 1, right);
  }

  return array;
};

console.log(quickSort([8, 4, 23, 42, 16, 15]));
