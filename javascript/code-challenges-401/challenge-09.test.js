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

const reverseLinkedList = (list) => {
  let current = list.head;

  const reversedList = new LinkedList();

  let iterator = (current) => {
    if (current) {
      if (current.value !== null) {
        iterator(current.next);
      }

      makeNode(current.value, reversedList);
    }
  };
  iterator(current);

  return reversedList;
};

describe('Testing reverse list function', () => {
  test('It should return a list whose values are reversed', () => {

    const testList = new LinkedList();
    const resultsList = new LinkedList();


    makeNode(1, testList);
    makeNode(2, testList);
    makeNode(3, testList);
    makeNode(4, testList);
    makeNode(5, testList);


    makeNode(5, resultsList);
    makeNode(4, resultsList);
    makeNode(3, resultsList);
    makeNode(2, resultsList);
    makeNode(1, resultsList);


    expect(reverseLinkedList(testList)).toStrictEqual(resultsList);

  });

});
