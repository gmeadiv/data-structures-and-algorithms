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

describe('Testing if list has a node', () => {
  test('It should create three nodes', () => {

    const testList = new LinkedList;


    expect(makeNode(1, testList)).toBe();
    expect(makeNode(2, testList)).toBe();
    expect(makeNode(3, testList)).toBe();

  });
});

describe('Testing if list has a node', () => {
  test('It should return true if the linked list contains the input value, and false if not', () => {

    const testList = new LinkedList;

    makeNode(12, testList);
    makeNode('true', testList);
    makeNode(8, testList);

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

    const testList = new LinkedList;

    makeNode('string', testList);
    makeNode('these', testList);
    makeNode(4, testList);
    makeNode('nodes', testList);

    expect(stringTheseNodes(testList)).toStrictEqual('{ string } --> { these } --> { 4 } --> { nodes } --> NULL');

  });
});
