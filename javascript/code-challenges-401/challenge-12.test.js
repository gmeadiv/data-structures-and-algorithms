'use strict';

class Node {
  constructor(type) {
    this.type = type;
    this.next = null;
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
}

describe('Testing Stack functions', () => {

  // test('It should put animals into the Animal Shelter', () => {

  //   let animalShelter = new Queue();

  //   const dog1 = {
  //     name: 'Tate R. Tot',
  //     type: 'dog'
  //   };

  //   const cat1 = {
  //     name: 'Pookie',
  //     type: 'cat'
  //   };

  //   const dog2 = {
  //     name: 'Hot Dog',
  //     type: 'dog'
  //   };

  //   animalShelter.enqueue(dog1);
  //   animalShelter.enqueue(cat1);
  //   animalShelter.enqueue(dog2);

  //   console.log(JSON.stringify(animalShelter.front));

  //   expect(JSON.stringify(animalShelter.front)).toStrictEqual('{"type":{"name":"Tate R. Tot","type":"dog"},"next":{"type":{"name":"Pookie","type":"cat"},"next":{"type":{"name":"Hot Dog","type":"dog"},"next":null}}}');
  //   expect(JSON.stringify(animalShelter.back)).toStrictEqual('{"type":{"name":"Hot Dog","type":"dog"},"next":null}');

  // });

  test('It should put animals into the Animal Shelter', () => {

    let animalShelter = new Queue();

    const dog1 = {
      name: 'Tate R. Tot',
      type: 'dog'
    };

    const cat1 = {
      name: 'Pookie',
      type: 'cat'
    };

    const dog2 = {
      name: 'Hot Dog',
      type: 'dog'
    };

    animalShelter.enqueue(dog1);
    animalShelter.enqueue(cat1);
    animalShelter.enqueue(dog2);

    console.log(JSON.stringify(animalShelter.dequeue));

    expect(JSON.stringify(animalShelter.front)).toStrictEqual();
    expect(JSON.stringify(animalShelter.back)).toStrictEqual();

  });

});
