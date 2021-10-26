'use strict';

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