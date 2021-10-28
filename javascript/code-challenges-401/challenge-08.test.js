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

const list1 = new LinkedList();
const list2 = new LinkedList();

makeNode(1, list1);
makeNode(3, list1);
makeNode(2, list1);

makeNode(5, list2);
makeNode(9, list2);
makeNode(4, list2);

const zipLists = (list1, list2) => {

  if (!list1.head || !list2.head) { console.log('can\'t zip an empty list!') }

  let current1 = list1.head;
  let current2 = list2.head;

  let tempArray = [];

  let makeNodeArray = (current1, current2) => {

    if (current1.value !== null && current2.value !== null) {

      tempArray.push(current1.value, current2.value);

    }

    else if (current1.value !== null && current2.value === null) {

      tempArray.push(current1.value);

    }

    else if (current1.value === null && current2.value !== null) {

      tempArray.push(current2.value);

    }

    if (current1.next !== null && current2.next !== null) {
      makeNodeArray(current1.next, current2.next);
    }
  }

  makeNodeArray(current1, current2);

  console.log(tempArray);

};

zipLists(list1, list2);
