'use strict';

let insertionSort = (arrOfNums) => {

  for (let i = 1; i < arrOfNums.length; i++) {

    let j = i - 1;
    let tempValue = arrOfNums[i];

    while (j >= 0 && tempValue < arrOfNums[j]) {
      arrOfNums[j+1] = arrOfNums[j];
      j = j - 1;

    }

    arrOfNums[j+1] = tempValue;
  }

  return arrOfNums;

};

describe('Testing insertionSort function', () => {
  test('It should sort an array of integers smallest --> biggest', () => {

    const testArray = [8,4,23,42,16,15];

    expect(insertionSort(testArray)).toStrictEqual([4, 8, 15, 16, 23, 42]);

  });
});
