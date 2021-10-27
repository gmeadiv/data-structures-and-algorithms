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

xdescribe('Testing if list has a node', () => {
  test('It should create three nodes', () => {

    const testList = new LinkedList;

    expect(makeNode(1, testList)).toBe();
    expect(makeNode(2, testList)).toBe();
    expect(makeNode(3, testList)).toBe();

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