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
    if (this.map[index]) {
      let foundValue = this.map[index].head;
      return foundValue;
    }

  }
}

const makeThesaurus = (table1, table2) => {
  let thesaurus = [];

  for (let i = 0; i < table1.map.length; i++) {

    if (table1.map[i]) {

      Object.entries(table1.map[i].head.value).forEach(([key, value]) => {
        let entry = [key, value];
        thesaurus.push(entry);
      });

    }

  }

  thesaurus.map(entry => {

    if (table2.find(`${entry[0]}`)) {
      let newEntry = table2.find(`${entry[0]}`).value;
      Object.values(newEntry).forEach(value => { entry.push(value) });
    }

  });

  return thesaurus;
};

describe('Testing my join function with hash tables', () => {
  it('Should return an array with a word and its synonyms and antonyms', () => {

    let synonyms = new HashTable(10);
    let antonyms = new HashTable(10);

    synonyms.add('fond', 'enamored');
    synonyms.add('wrath', 'anger');
    synonyms.add('diligent', 'employed');
    synonyms.add('outfit', 'garb');
    synonyms.add('guide', 'usher');

    antonyms.add('fond', 'averse');
    antonyms.add('wrath', 'delight');
    antonyms.add('diligent', 'idle');
    antonyms.add('guide', 'follow');
    antonyms.add('something else', 'jam');

    let answer = makeThesaurus(synonyms, antonyms);

    expect(answer).toStrictEqual([["wrath", "anger", "delight"], ["diligent", "employed", "idle"], ["outfit", "garb"], ["guide", "usher", "follow"], ["fond", "enamored", "averse"]]);

  });
});