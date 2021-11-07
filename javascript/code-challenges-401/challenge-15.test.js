'use strict';

console.log = jest.fn();

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
}

function preOrder(current) {

  console.log(current.value);

  if (current.left) {
    preOrder(current.left);
  }
  if (current.right) {
    preOrder(current.right);
  }
}

function inOrder(current) {

  if (current.left) {
    inOrder(current.left);
  }

  console.log(current.value);

  if (current.right) {
    inOrder(current.right);
  }
}

function postOrder(current) {

  if (current.left) {
    postOrder(current.left);
  }

  if (current.right) {
    postOrder(current.right);
  }

  console.log(current.value);
}

describe('Testing Stack functions', () => {

  test('It should return a collection from a preorder traversal', () => {

    let tree = new BinaryTree();

    tree.root = new Node('1');
    tree.root.left = new Node('2');
    tree.root.left.left = new Node('3');
    tree.root.left.left.left = new Node('4');
    tree.root.left.left.right = new Node('5');
    tree.root.right = new Node('6');
    tree.root.right.right = new Node('7');
    tree.root.right.right.left = new Node('8');
    tree.root.right.right.left.right = new Node('9');

    preOrder(tree.root);

    expect(console.log).toHaveBeenCalledTimes(9);

  });

  test('It should return a collection from an inorder traversal', () => {

    let tree = new BinaryTree();

    tree.root = new Node('1');
    tree.root.left = new Node('2');
    tree.root.left.left = new Node('3');
    tree.root.left.left.left = new Node('4');
    tree.root.left.left.right = new Node('5');
    tree.root.right = new Node('6');
    tree.root.right.right = new Node('7');
    tree.root.right.right.left = new Node('8');
    tree.root.right.right.left.right = new Node('9');

    inOrder(tree.root);

    expect(console.log).toHaveBeenCalledTimes(18);

  });

  test('It should return a collection from an postorder traversal', () => {

    let tree = new BinaryTree();

    tree.root = new Node('1');
    tree.root.left = new Node('2');
    tree.root.left.left = new Node('3');
    tree.root.left.left.left = new Node('4');
    tree.root.left.left.right = new Node('5');
    tree.root.right = new Node('6');
    tree.root.right.right = new Node('7');
    tree.root.right.right.left = new Node('8');
    tree.root.right.right.left.right = new Node('9');

    postOrder(tree.root);

    expect(console.log).toHaveBeenCalledTimes(27);

  });
});
