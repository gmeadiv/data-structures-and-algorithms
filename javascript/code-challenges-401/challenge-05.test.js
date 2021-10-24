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

let hasNode = (list, value) => {

  let hasNode = false;

  let findNode = (current, value) => {

    let status;

    if (current) {

      findNode(current.next, value);

      if (current.value === value) {

        status = current.value;

      }
    }

    if (status === value) {
      hasNode = true;
    }

  };

  findNode(list.head, value);

  return hasNode;
};

hasNode(list, 22);


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

describe('Testing if list has a node', () => {
  test('It should return true if the linked list contains the input value, and false if not', () => {

    const testList = new LinkedList();

    testList.head = new Node(12);
    testList.head.next = new Node('true');
    testList.head.next.next = new Node(8);

    const falseValueOne = 404;
    const falseValueTwo = 'false';

    const trueValueOne = 12;
    const trueValueTwo = 'true';
    const trueValueThree = 8;


    expect(hasNode(testList, falseValueOne)).toBeFalsy();
    expect(hasNode(testList, falseValueTwo)).toBeFalsy();

    expect(hasNode(testList, trueValueOne)).toBeTruthy();
    expect(hasNode(testList, trueValueTwo)).toBeTruthy();
    expect(hasNode(testList, trueValueThree)).toBeTruthy();

  });
});

describe('Testing if function strings nodes together', () => {
  test('It should return a string containing the values of the linked list', () => {

    const testList = new LinkedList();

    testList.head = new Node(12);
    testList.head.next = new Node('string');
    testList.head.next.next = new Node(8);

    expect(stringTheseNodes(testList)).toStrictEqual('{ 12 } --> { string } --> { 8 } --> NULL');

  });
});
