'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

const makeNode = (value, list) => {

  if (!list.head) {

    list.head = new Node(value);

  } else if (list.head) {

    let current = list.head;

    if (!current.next) {

      current.next = new Node(value);

    } else if (current.next) {

      while (current.next !== null) {

        current = current.next;

      }

      current.next = new Node(value);

    }
  }
};

const zipLists = (list1, list2) => {

  if (!list1.head || !list2.head) { console.log('can\'t zip an empty list!') }

  let current1 = list1.head;
  let current2 = list2.head;

  let tempArray = [];

  let makeNodeArray = (current1, current2) => {

    if (current1 && current2) {
      tempArray.push(current1.value, current2.value);
    }

    else if (current1 && !current2) {
      tempArray.push(current1.value);
    }

    else if (!current1 && current2) {
      tempArray.push(current2.value);
    }

    if (current1 !== null && current2 !== null) {
      makeNodeArray(current1.next, current2.next);
    }

    else if (current1 !== null && current2 === null) {
      makeNodeArray(current1.next, null);
    }

    else if (current1 === null && current2 !== null) {
      makeNodeArray(null, current2.next);
    }

  };

  makeNodeArray(current1, current2);

  const zippedList = new LinkedList();

  tempArray.map(value => {
    makeNode(value, zippedList);
  });

  return zippedList;
};

describe('Testing zipper function', () => {
  test('It zip lists of equal length together', () => {

    const list1 = new LinkedList();
    const list2 = new LinkedList();
    const testList = new LinkedList();

    makeNode(1, list1);
    makeNode(3, list1);
    makeNode(2, list1);

    makeNode(5, list2);
    makeNode(9, list2);
    makeNode(4, list2);

    makeNode(1, testList);
    makeNode(5, testList);
    makeNode(3, testList);
    makeNode(9, testList);
    makeNode(2, testList);
    makeNode(4, testList);

    expect(zipLists(list1, list2)).toStrictEqual(testList);

  });

  test('It should zip a short list with a long list', () => {

    const list1 = new LinkedList();
    const list2 = new LinkedList();
    const testList = new LinkedList();

    makeNode(1, list1);
    makeNode(3, list1);

    makeNode(5, list2);
    makeNode(9, list2);
    makeNode(4, list2);

    makeNode(1, testList);
    makeNode(5, testList);
    makeNode(3, testList);
    makeNode(9, testList);
    makeNode(4, testList);

    expect(zipLists(list1, list2)).toStrictEqual(testList);

  });

  test('It should zip a long list with a short list', () => {

    const list1 = new LinkedList();
    const list2 = new LinkedList();
    const testList = new LinkedList();

    makeNode(1, list1);
    makeNode(3, list1);
    makeNode(2, list1);

    makeNode(5, list2);
    makeNode(9, list2);

    makeNode(1, testList);
    makeNode(5, testList);
    makeNode(3, testList);
    makeNode(9, testList);
    makeNode(2, testList);

    expect(zipLists(list1, list2)).toStrictEqual(testList);

  });

});
