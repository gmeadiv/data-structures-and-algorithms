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

const numberList = new LinkedList();

makeNode(1, numberList);
makeNode(3, numberList);
makeNode(8, numberList);
makeNode(2, numberList);

let kthFromEnd = (k, list) => {

  let nodeArray = [];
  let nodeValue = 'Exception';

  let makeNodeArray = (current) => {

    if (current) {

      if (current.value !== null) {
        nodeArray.push(current.value);
      }

      makeNodeArray(current.next);

    }
  };

  makeNodeArray(list.head);

  let index = nodeArray.length - 1;

  console.log(index, k);

  if (index < k - 1 || k < 0) { console.log('Exception'); }
  else if (k === nodeArray.length) { nodeValue = nodeArray[0]; }
  else { nodeValue = nodeArray[index - k]; }

  return nodeValue;
};

describe('Testing kthFromEnd function', () => {
  test('It should return exception when given a number greater than the length of the list', () => {

    const numberList = new LinkedList();

    makeNode(1, numberList);
    makeNode(3, numberList);
    makeNode(8, numberList);
    makeNode(2, numberList);

    expect(kthFromEnd(6, numberList)).toStrictEqual('Exception');

  });

  test('It should return the value of the head node when the value of k equals the length of the list', () => {

    const numberList = new LinkedList();

    makeNode(1, numberList);
    makeNode(3, numberList);
    makeNode(8, numberList);
    makeNode(2, numberList);

    expect(kthFromEnd(4, numberList)).toStrictEqual(1);

  });

  test('It should return exception when k is not a positive integer', () => {

    const numberList = new LinkedList();

    makeNode(1, numberList);
    makeNode(3, numberList);
    makeNode(8, numberList);
    makeNode(2, numberList);

    expect(kthFromEnd(-6, numberList)).toStrictEqual('Exception');

  });

  test('It should still function if the list contains only one node', () => {

    const onlyOneList = new LinkedList();

    makeNode(1, onlyOneList);

    expect(kthFromEnd(0, onlyOneList)).toStrictEqual(1);
    expect(kthFromEnd(1, onlyOneList)).toStrictEqual(1);
    expect(kthFromEnd(2, onlyOneList)).toStrictEqual('Exception');
    expect(kthFromEnd(-2, onlyOneList)).toStrictEqual('Exception');

  });

  test('It should return the value of the tail node when the value of k is zero', () => {

    const numberList = new LinkedList();

    makeNode(1, numberList);
    makeNode(3, numberList);
    makeNode(8, numberList);
    makeNode(2, numberList);

    expect(kthFromEnd(0, numberList)).toStrictEqual(2);

  });

  test('Happy Path: should return the value of the node which can be found kth places behind the tail of the list', () => {

    const numberList = new LinkedList();

    makeNode(1, numberList);
    makeNode(3, numberList);
    makeNode(8, numberList);
    makeNode(2, numberList);

    expect(kthFromEnd(2, numberList)).toStrictEqual(3);

  });

});
