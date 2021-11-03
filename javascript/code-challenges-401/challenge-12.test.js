'use strict';

class Node {
  constructor(animal) {
    this.value = animal;
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

  dequeue(preference) {

    let foundAnimal = null;

    if (preference === this.front.value.name) {

      foundAnimal = this.front;

      this.front = foundAnimal.next;

      return foundAnimal.value;

    } else {

      let foundAnimal = this.front.next;

      while (foundAnimal.value.name !== preference) {

        foundAnimal = foundAnimal.next;

      }

      return foundAnimal;

    }
  }
}

describe('Testing Stack functions', () => {

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

    expect(JSON.stringify(animalShelter.front)).toStrictEqual('{"value":{"name":"Tate R. Tot","type":"dog"},"next":{"value":{"name":"Pookie","type":"cat"},"next":{"value":{"name":"Hot Dog","type":"dog"},"next":null}}}');
    expect(JSON.stringify(animalShelter.back)).toStrictEqual('{"value":{"name":"Hot Dog","type":"dog"},"next":null}');

  });

  test('It should find and remove a specific animal from the shelter', () => {

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

    expect(JSON.stringify(animalShelter.dequeue('Hot Dog'))).toStrictEqual('{"value":{"name":"Hot Dog","type":"dog"},"next":null}');

  });

});
