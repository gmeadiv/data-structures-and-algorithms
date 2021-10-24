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

console.log(list, '<-- LIST --<<');

// const traverseIterative = (head) => {
//   console.log(head);

//   let current = head;

//   console.log(head.next);

//   while (current) {
//     current = current.next;
//   }
// };

// traverseIterative(list.head);

let findNode = (current, value) => {

  let hasNode = false;

  if (current && current.value === value) {

    hasNode = true;

    console.log(hasNode);

  } else {

    findNode(current.next, value);

    console.log(hasNode);

  }
};

findNode(list.head, 22);


let nodeArray = [];

let makeNodeArray = (current) => {

  if (current) {

    if (current.value !== null) {
      nodeArray.push(current.value);
    }

    makeNodeArray(current.next);

  }
};

makeNodeArray(list.head);

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
