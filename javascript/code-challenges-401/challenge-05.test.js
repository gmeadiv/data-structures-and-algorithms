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

const list = new LinkedList();

list.head = new Node(10);
list.head.next = new Node(25);
list.head.next.next = new Node(22);
list.head.next.next.next = new Node(13);

let findNode = (current, value) => {

  let hasNode;

  if (current) {

    findNode(current.next, value);

    if (current.value === value) {

      hasNode = true;
      return hasNode;

    } else {

      hasNode = false;
      return hasNode;

    }

  }
};

findNode(list.head, 22);

let stringTheseNodes = (LinkedList) => {

  let nodeArray = [];

  let makeNodeArray = (current) => {

    if (current) {

      if (current.value !== null) {
        nodeArray.push(current.value);
      }

      makeNodeArray(current.next);

    }
  };

  makeNodeArray(LinkedList.head);

  let stringedNodeArray = [];

  let stringifyNodes = (array) => {

    for (let i = 0; i < array.length; i++) {

      if (i === 0) {
        stringedNodeArray.push(`{ ${array[i]} } -->`);
      } else if (i > 0 && i < array.length - 1) {
        stringedNodeArray.push(` { ${array[i]} } -->`);
      } else if (i === (array.length - 1)) {
        stringedNodeArray.push(` { ${array[i]} } --> NULL`);
      }

    }

  };

  stringifyNodes(nodeArray);

  let stringedNodes = stringedNodeArray.join('');

  return stringedNodes;
};

stringTheseNodes(list);


describe('Testing Find Node', () => {
  test('It should return true if the linked list contains the input value, and false if not', () => {
    const testList = new LinkedList();

    testList.head = new Node(12);
    testList.head.next = new Node('string');
    testList.head.next.next = new Node(8);

    const falseValue = 404;
    const trueValue = 12;

    expect(findNode(testList, falseValue)).toBeFalsy();
    expect(findNode(testList, trueValue)).toBeTruthy();
  });
});

describe('Testing Stringify Nodes', () => {
  test('It should return a string containing the values of the linked list', () => {
    const testList = new LinkedList();

    testList.head = new Node(12);
    testList.head.next = new Node('string');
    testList.head.next.next = new Node(8);

    expect(stringTheseNodes(testList)).toStrictEqual('{ 12 } --> { string } --> { 8 } --> NULL');
    // expect(firstLetters(['a', 'b', 'c', 'd'])).toStrictEqual(['a', 'b', 'c', 'd']);
    // expect(firstLetters([])).toStrictEqual([]);
  });
});
