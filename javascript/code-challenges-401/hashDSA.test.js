'use strict';

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value, list) {

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
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {

    let sum = 0;

    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }

    return (sum * 599) % this.size;
  }

  add(key, value) {

    let index = this.hash(key);
    let bucket = this.map[index];
    let payload = {
      [key]: value
    };

    if (bucket) {
      bucket.append(payload);
    } else {
      let list = new LinkedList();
      list.append(payload, list);
      this.map[index] = list;
    }

  }

  find(key) {
    let index = this.hash(key);
    let foundValue = this.map[index].head;

    return foundValue;
  }
}

let map = new HashTable(1024);

map.add('George', 'student');

console.log(map.find('George'));
