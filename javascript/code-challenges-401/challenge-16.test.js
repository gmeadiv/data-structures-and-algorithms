'use strict';

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

function getMax(current) {
  let tempValue = current.value;

  if (current.left) {
    let leftValue = getMax(current.left);
    if (leftValue > tempValue) {
      tempValue = leftValue;
    }
  }

  if (current.right) {
    let rightValue = getMax(current.right);

    if (rightValue > tempValue) {
      tempValue = rightValue;
    }
  }

  return tempValue;
}

describe('Testing getMax function', () => {

  test('It should return the highest value in the tree', () => {

    let tree = new BinaryTree();

    tree.root = new Node(2);
    tree.root.left = new Node(7);
    tree.root.left.left = new Node(2);
    tree.root.left.right = new Node(6);
    tree.root.left.right.left = new Node(5);
    tree.root.left.right.right = new Node(11);
    tree.root.right = new Node(5);
    tree.root.right.right = new Node(9);
    tree.root.right.right.left = new Node(4);

    let maxValue = getMax(tree.root);

    expect(maxValue).toStrictEqual(11);

  });
});
