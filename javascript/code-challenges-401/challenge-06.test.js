'use strict';

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

const makeNode = (value) => {

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

describe('Testing if list has a node', () => {
  test('It should create three nodes', () => {

    expect(makeNode(1)).toBe();
    expect(makeNode(2)).toBe();
    expect(makeNode(3)).toBe();


  });
});

xdescribe('Testing if function strings nodes together', () => {
  test('It should return a string containing the values of the linked list', () => {

    const testList = new LinkedList();

    testList.head = new Node(12);
    testList.head.next = new Node('string');
    testList.head.next.next = new Node(8);

    expect(stringTheseNodes(testList)).toStrictEqual('{ 12 } --> { string } --> { 8 } --> NULL');

  });
});