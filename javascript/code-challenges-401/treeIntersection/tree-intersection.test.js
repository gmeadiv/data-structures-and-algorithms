'use strict';

class Node {
  constructor(value, k = 0) {
    this.value = value;
    this.children = new Array(k);[undefined, undefined];
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
}

const getCommonValues = (firstTree, secondTree) => {

  let comparisonArray = [];

  const fillArray = (root) => {
    let current = root;
    comparisonArray.push(current.value);

    if (current.left) {
      fillArray(current.left);
    }
    if (current.right) {
      fillArray(current.right);
    }
  };
  fillArray(firstTree.root);

  let commonValuesArray = [];

  let compareValues = (comparison, root) => {
    let current = root;

    comparison.forEach(number => {
      if (number === current.value) {
        commonValuesArray.push(current.value);
      }
    });

    if (current.left) {
      compareValues(comparisonArray, current.left);
    }

    if (current.right) {
      compareValues(comparisonArray, current.right);
    }

  };
  compareValues(comparisonArray, secondTree.root);

  return commonValuesArray;
};

describe('Testing get common values function', () => {
  it('should return the values common to inputted trees', () => {
    let tree1 = new BinaryTree();

    tree1.root = new Node(2);
    tree1.root.left = new Node(7);
    tree1.root.left.left = new Node(2);
    tree1.root.left.right = new Node(6);
    tree1.root.left.right.left = new Node(5);
    tree1.root.left.right.right = new Node(11);
    tree1.root.right = new Node(5);
    tree1.root.right.right = new Node(9);
    tree1.root.right.right.left = new Node(4);

    let tree2 = new BinaryTree();

    tree2.root = new Node(23);
    tree2.root.left = new Node(7);
    tree2.root.left.left = new Node(89);
    tree2.root.left.right = new Node(-6);
    tree2.root.left.right.left = new Node(15);
    tree2.root.left.right.right = new Node(11);
    tree2.root.right = new Node(6);
    tree2.root.right.right = new Node(-9);
    tree2.root.right.right.left = new Node(4);

    expect(getCommonValues(tree1, tree2)).toStrictEqual([7, 11, 6, 4]);
  });
});
