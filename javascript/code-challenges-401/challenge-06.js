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

  if (!list.head) {list.head = new Node(value);}

  else if (list.head) {

    let current = list.head;

    if (!current.next) {current.next = new Node(value);}

    else {

      let nodeArray = [];

      let makeNodeArray = (node) => {

        if (node.value) {
          nodeArray.push(node.value);
          }

          makeNodeArray(node.next);
        }
      }; 
      
      makeNodeArray(current.next);

      let nodeCount = nodeArray.length;

      current[nodeCount].next = new Node(value);
      
    }

  } 
  
  else {console.log('something went wrong with making a node');}
;

// list.head = new Node(10);
// list.head.next = new Node(25);
// list.head.next.next = new Node(22);
// list.head.next.next.next = new Node(13);

const hasNode = (list, value) => {

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
