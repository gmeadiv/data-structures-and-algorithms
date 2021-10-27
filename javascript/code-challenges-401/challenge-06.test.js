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

const insertNodeBefore = (valueToInsert, node, list) => {

  if (list.head.value === node) {

    list.head.value = valueToInsert;

  } else {

    let current = list.head;

    if (current.next.value === node) {

      current.next.value = valueToInsert;

    } else {

      while (current.next.value !== node) {
        current = current.next;
      }

      let tempValue = current.next.value;

      current.next.value = valueToInsert;

      makeNode(tempValue, list);
    }
  }
};

xdescribe('Testing Append', () => {
  test('It should create three nodes, appending new nodes to the end of the list', () => {

    const testList = new LinkedList;

    expect(makeNode(1, testList)).toBe();
    expect(makeNode(2, testList)).toBe();
    expect(makeNode(3, testList)).toBe();

  });
});


describe('Testing inserting a node before a specified node', () => {
  test('It should insert a new node in front of the specified node', () => {

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
            stringedNodeArray.push(`${array[i]} `);
          } else if (i > 0 && i < array.length - 1) {
            stringedNodeArray.push(`${array[i]} `);
          } else if (i === (array.length - 1)) {
            stringedNodeArray.push(`${array[i]}`);
          }
        }
      };
      stringifyNodes(nodeArray);
      let stringedNodes = stringedNodeArray.join('');
      return stringedNodes;
    };

    const testList = new LinkedList();

    makeNode('happy', testList);
    makeNode('halloween', testList);
    makeNode('trick', testList);
    makeNode('treat', testList);

    insertNodeBefore('or', 'treat', testList);

    expect(stringTheseNodes(testList)).toStrictEqual('happy halloween trick or treat');

  });
});