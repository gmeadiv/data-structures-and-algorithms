'use strict';

class Node {
  constructor(value, k=0) {
    this.value = value;
    this.children = new Array(k); [undefined, undefined];
  }
}

class BinaryTree {
  constructor(k) {
    this.k = k;
    this.root = null;
  }
}

function fizzBuzz(root) {

  const queue = [];
  let array = [];

  let current = root;

  queue.unshift(root);

  while(queue.length) {

    current = queue.pop();

    if (current.value % 3 === 0) {

      if (current.value % 5 === 0) {current.value = 'FIZZ BUZZ';} else {current.value = 'FIZZ';}

    } else if (current.value % 5 === 0) {current.value = 'BUZZ';}

    else {current.value = JSON.stringify(current.value);}

    array.push(current.value);

    for (let node of current.children) {
      queue.unshift(node);
    }
  }
}

describe('Testing by Fizz Buzz function', () => {

  test('It should return Fizz if value of node is divisible by three', () => {

    let tree = new BinaryTree();

    tree.root = new Node(5);
    tree.root.children.push(new Node(4), new Node(15));
    tree.root.children[0].children.push(new Node(3), new Node(8));
    tree.root.children[0].children[1].children.push(new Node(15), new Node(10));
    tree.root.children[1].children.push(new Node(9));
    tree.root.children[1].children[0].children.push(new Node(5));



    fizzBuzz(tree.root);

    expect(tree.root.children[0].children[0].value).toStrictEqual('FIZZ');

  });

  test('It should return Buzz if value of node is divisible by five', () => {

    let tree = new BinaryTree();

    tree.root = new Node(5);
    tree.root.children.push(new Node(4), new Node(15));
    tree.root.children[0].children.push(new Node(3), new Node(8));
    tree.root.children[0].children[1].children.push(new Node(15), new Node(10));
    tree.root.children[1].children.push(new Node(9));
    tree.root.children[1].children[0].children.push(new Node(5));



    fizzBuzz(tree.root);

    expect(tree.root.value).toStrictEqual('BUZZ');

  });

  test('It should return Fizz Buzz if value of node is divisible by three', () => {

    let tree = new BinaryTree();

    tree.root = new Node(5);
    tree.root.children.push(new Node(4), new Node(15));
    tree.root.children[0].children.push(new Node(3), new Node(8));
    tree.root.children[0].children[1].children.push(new Node(15), new Node(10));
    tree.root.children[1].children.push(new Node(9));
    tree.root.children[1].children[0].children.push(new Node(5));



    fizzBuzz(tree.root);

    expect(tree.root.children[1].value).toStrictEqual('FIZZ BUZZ');

  });
});
