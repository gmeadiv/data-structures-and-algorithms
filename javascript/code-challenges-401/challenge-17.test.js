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

function byBreadth(root) {

  const queue = [];

  let current = root;
  queue.unshift(root);
  while(queue.length) {
    // take a node off the queue
    current = queue.pop();

    // read it's value
    console.log(current.value);

    // push all children into queue.
    for (let node of current.children) {
      queue.unshift(node);
    }
  }
}

describe('Testing by breadth function', () => {

  test('It should return the highest value in the tree', () => {

    let tree = new BinaryTree();

    tree.root = new Node(2);
    tree.root.children.push(new Node(7), new Node(5));
    tree.root.children[0].children.push(new Node(2), new Node(6));
    tree.root.children[0].children[1].children.push(new Node(5), new Node(11));
    tree.root.children[1].children.push(new Node(9));
    tree.root.children[1].children[0].children.push(new Node(4));



    let breadthArray = byBreadth(tree.root);

    expect(breadthArray).toStrictEqual();

  });
});
