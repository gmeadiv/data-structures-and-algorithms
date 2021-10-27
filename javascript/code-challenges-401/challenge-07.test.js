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

  if (index < k) { console.log('Exception'); }
  else { nodeValue = nodeArray[index - k]; }

  return nodeValue;
};

describe('Testing kthFromEnd function', () => {
  test('It should return the value of the node which can be found kth places behind the tail of the list', () => {

    const numberList = new LinkedList();

    makeNode(1, numberList);
    makeNode(3, numberList);
    makeNode(8, numberList);
    makeNode(2, numberList);

    expect(kthFromEnd(0, numberList)).toStrictEqual(2);
    expect(kthFromEnd(2, numberList)).toStrictEqual(3);
    expect(kthFromEnd(6, numberList)).toStrictEqual('Exception');

  });
});
