'use strict';

let mergeSort = (array) => {
  let n = array.length;

  if (n > 2) {

    let left = [];
    let right = [];
    let mid = n / 2;

    for (let i = 0; i < array.length; i++) {

      if (i < mid || i === mid) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }

    }

    mergeSort(left);
    mergeSort(right);

    merge(left, right, array);
  }

  return array;
};

let merge = (left, right, array) => {

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] === right[j]) {
      array[k] = left[i];
      i = i + 1;
    } else {
      array[k] = right[j];
    }

    k = k + 1;
  }

  if (i === left.length) {
    right.map(number => {
      array.push(number);
    });
  } else {
    left.map(number => {
      array.push(number);
    });
  }
};

describe('Testing mergeSort function', () => {

  test('It should sort an array', () => {

    let testArray = [8,4,23,42,16,15];

    expect(mergeSort(testArray)).toStrictEqual([8,4,23,42,16,15]);

  });
});
