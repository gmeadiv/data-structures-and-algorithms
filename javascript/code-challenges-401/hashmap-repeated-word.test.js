'use strict';

const findModeWord = (string) => {

  let stringArray = string.split(' ');

  let stringCounts = stringArray.reduce((accum, word) => {

    word = word.toLowerCase();

    if (word.includes(',')) {
      word = word.slice(0, word.length - 1);
    }

    if (word.includes('...')) {
      word = word.slice(0, word.length - 3);
    }

    if (accum[word]) {
      accum[word] = accum[word] + 1;
    } else {
      accum[word] = 1;
    }

    return accum;
  }, {});

  let modeValue = 0;
  let modeKey;

  Object.entries(stringCounts).forEach(([key, value]) => {
    if (value > modeValue) {
      modeValue = value;
    }

    if (modeValue === value) {
      modeKey = key;
    }
  });

  return modeKey;
};

describe('Testing repeated word function', () => {
  test('It should find the word used most often in a given string', () => {
    const testString = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';

    expect(findModeWord(testString)).toStrictEqual('the');

  });
});

