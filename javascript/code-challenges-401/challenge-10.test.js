'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let previousTop = this.top;
    let nodeToAdd = new Node(value);
    nodeToAdd.next = previousTop;
    this.top = nodeToAdd;
  }

  pop() {
    if (this.top.value !== null) {
      let temp = this.top;
      this.top = temp.next;
      return temp.value;
    } else {
      return 'Exception';
    }
  }

  peek() {
    if (this.top !== null) {
      let tempValue = this.top.value;
      return tempValue;
    } else {
      return 'Exception';
    }
  }

  isEmpty() {
    if (this.top === null) {
      return true;
    } else { return false; }
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let nodeToAdd = new Node(value);

    let currentBack = this.back;

    if (currentBack) {
      currentBack.next = nodeToAdd;
    }
    this.back = nodeToAdd;

    if (!this.front) {
      this.front = nodeToAdd;
    }
  }

  dequeue() {
    let nodeToRemove = this.front;
    this.front = nodeToRemove.next;

    if (this.back === nodeToRemove) {
      this.back = nodeToRemove.next;
    }

    return nodeToRemove.value;
  }

  peek() {
    if (this.front !== null) {
      let tempValue = this.front.value;
      return tempValue;
    } else {
      console.log('Exception');
    }
  }

  isEmpty() {
    if (this.front === null) {
      return true;
    } else { return false; }
  }
}

xdescribe('Testing Stack functions', () => {
  test('It should push four values into the stack', () => {

    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);


    expect(JSON.stringify(stack)).toStrictEqual('{"top":{"value":4,"next":{"value":3,"next":{"value":2,"next":{"value":1,"next":null}}}}}');

  });

  test('It should pop values off of the stack', () => {

    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    stack.pop();

    expect(JSON.stringify(stack)).toStrictEqual('{"top":{"value":1,"next":null}}');

    stack.pop();


    expect(JSON.stringify(stack)).toStrictEqual('{"top":null}');

  });

  test('It should peek into the Stack and return the top\'s value', () => {

    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);

    stack.peek();

    expect(stack.peek()).toStrictEqual(4);

  });

  test('It should peek into the stack and return Exception if it\'s empty', () => {

    const stack = new Stack();

    stack.peek();

    expect(stack.peek()).toStrictEqual('Exception');

  });

  test('It should return true if it\'s empty', () => {

    const stack = new Stack();

    stack.isEmpty();

    expect(stack.isEmpty()).toStrictEqual(true);

  });

  test('It should return false if not empty', () => {

    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);

    stack.isEmpty();

    expect(stack.isEmpty()).toStrictEqual(false);

  });
});

describe('Testing Queue functions', () => {
  test('It should push four values into the stack', () => {

    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);


    expect(JSON.stringify(queue)).toStrictEqual('{"top":{"value":4,"next":{"value":3,"next":{"value":2,"next":{"value":1,"next":null}}}}}');

  });

  test('It should pop values off of the stack', () => {

    const stack = new Stack();

    stack.push(1);
    stack.push(2);

    stack.pop();

    expect(JSON.stringify(stack)).toStrictEqual('{"top":{"value":1,"next":null}}');

    stack.pop();


    expect(JSON.stringify(stack)).toStrictEqual('{"top":null}');

  });

  test('It should peek into the Stack and return the top\'s value', () => {

    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);

    stack.peek();

    expect(stack.peek()).toStrictEqual(4);

  });

  test('It should peek into the stack and return Exception if it\'s empty', () => {

    const stack = new Stack();

    stack.peek();

    expect(stack.peek()).toStrictEqual('Exception');

  });

  test('It should return true if it\'s empty', () => {

    const stack = new Stack();

    stack.isEmpty();

    expect(stack.isEmpty()).toStrictEqual(true);

  });

  test('It should return false if not empty', () => {

    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);

    stack.isEmpty();

    expect(stack.isEmpty()).toStrictEqual(false);

  });
});
