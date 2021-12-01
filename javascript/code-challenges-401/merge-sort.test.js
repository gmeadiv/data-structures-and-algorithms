'use strict';

let mergeSort = (array) => {

  let n = array.length;

  if (n <= 1) {
    return array;
  }

  console.log(n, '<-- n --<<');

  let mid = Math.floor(n / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};

let merge = (left, right) => {

  let mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return mergedArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));

};

describe('Testing mergeSort function', () => {
  test('It should sort an array', () => {
    let testArray = [32, -27, 43, 3, 9, 82, -10];
    expect(mergeSort(testArray)).toStrictEqual([-27, -10, 3, 9, 32, 43, 82]);

  });
});
