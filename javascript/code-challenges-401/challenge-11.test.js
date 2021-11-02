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
    if (this.top !== null) {
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

class Pseudoqueue {
  constructor() {
    this.front = null;
    this.frontStack = new Stack();
    this.back = new Stack();
  }

  enqueue(value) {

    let currentBack = this.back;

    if (currentBack) {
      currentBack.next = value;
    }
    this.back.push(value);

    if (this.front === null) {
      this.front = value;
    } else {
      let tempValue = this.front;
      this.front = value;
      this.frontStack.push(tempValue);
    }

    let pop = this.frontStack.pop();
    this.back.push(pop);

    console.log('FRONT -->', this.front, 'BACK -->', this.back);
  }

  dequeue() {

    let tempArray = [];

    for (let i = 1; i < this.contents.length; i++) {
      tempArray.push(this.contents.pop());
    }

    this.contents.push(tempArray[0]);

  }
}

describe('Testing Queue functions', () => {
  test('It should push four values into the pseudoqueue', () => {

    const initialQueue = new Pseudoqueue();

    initialQueue.enqueue(10);
    initialQueue.enqueue(15);
    initialQueue.enqueue(20);

    const testQueue = initialQueue;

    testQueue.enqueue(5);

    expect(testQueue.front).toStrictEqual({top: 5});

  });

  // test('It should pop values off of the queue', () => {

  //   const pseudoqueue = new Pseudoqueue();

  //   pseudoqueue.enqueue(1);
  //   pseudoqueue.enqueue(2);
  //   pseudoqueue.enqueue(3);
  //   pseudoqueue.enqueue(4);

  //   let first = pseudoqueue.dequeue();

  //   console.log(first);

  //   expect(first).toStrictEqual(1);

  // });

});
