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
      return 'Exception';
    }
  }

  isEmpty() {
    if (this.front === null) {
      return true;
    } else { return false; }
  }
}

describe('Testing Stack functions', () => {

  function validateBrackets(string) {

    let validateStack = new Stack();

    let splitString = [];
    splitString.push(...string.split(''));
    splitString.map(bracket => {
      validateStack.push(bracket);
    });

    let validator = false;
    let top = validateStack.top;

    if (top.value === '}' || top.value === ']' || top.value === ')') {

      let current = top;
      while (current.next) {
        current = current.next;
      }

      if (current.value === '{' || current.value === '['|| current.value === '(' && top.value === '}' || top.value === ']' || top.value === ')') {
        validator = true;
        return validator;
      }

    } else {return validator;}

  }

  test('It should return true if each opening bracket has a closing bracket', () => {

    expect(validateBrackets('{}(){}')).toStrictEqual(true);
    expect(validateBrackets('()[[Extra Characters]]')).toStrictEqual(true);

  });

  test('It should return false if each opening bracket has a closing bracket', () => {

    expect(validateBrackets('(](')).toStrictEqual(false);
    expect(validateBrackets('[({}]')).toStrictEqual(false);

  });
});

// if (splitString[0] === '{' || splitString[0] === '[' || splitString[0] === '(') {

//   if (splitString[0] === '{' && splitString[lastIndex] === '}') {
//     validator = true;
//     return validator;
//   } else if (splitString[0] === '[' && splitString[lastIndex] === ']') {
//     validator = true;
//     return validator;
//   } else if (splitString[0] === '(' && splitString[lastIndex] === ')') {
//     validator = true;
//     return validator;
//   } else { return validator; }

// } else { return validator; }