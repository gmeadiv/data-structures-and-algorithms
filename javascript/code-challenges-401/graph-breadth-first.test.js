'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(value) {
    let payload = new Vertex(value);
    this.adjacencyList.set(payload, []);

    return payload;
  }

  addDirectedEdge(startVertex, endVertex, weight = 0) {

    if (!this.adjacencyList.has(startVertex) && !this.adjacencyList.has(endVertex)) {
      throw new Error('vertex error');
    }

    let neighbors = this.adjacencyList.get(startVertex);
    let newEdge = new Edge(endVertex, weight);
    neighbors.push(newEdge);

  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error('get neighbor error');
    }

    return [...this.adjacencyList.get(vertex)];
  }

  breadthFirst(startVertex) {

    const queue = [];
    const visitedNodes = new Set();

    queue.push(startVertex);
    visitedNodes.add(startVertex);

    while (queue.length) {
      const current = queue.shift();

      let neighbors = this.getNeighbors(current);

      for (let edge of neighbors) {

        let neighbor = edge.vertex;

        if (!visitedNodes.has(neighbor)) {
          queue.push(neighbor);
          visitedNodes.add(neighbor);
        } else { continue }
      }
    }

    let visitedNodesArray = []

    visitedNodes.forEach(value => {visitedNodesArray.push(value)})
    return visitedNodesArray;
  }
}

let graph = new Graph();

let A = graph.addVertex('Pandora');
let B = graph.addVertex('Arendelle');
let C = graph.addVertex('Metroville');
let D = graph.addVertex('Monstropolis');
let E = graph.addVertex('Narnia');
let F = graph.addVertex('Naboo');


graph.addDirectedEdge(A, B);
graph.addDirectedEdge(B, C);
graph.addDirectedEdge(B, D);
graph.addDirectedEdge(C, D);
graph.addDirectedEdge(C, E);
graph.addDirectedEdge(C, F);
graph.addDirectedEdge(D, F);
graph.addDirectedEdge(F, E);

describe('Testing graph implementation', () => {

  test('It should be able to return all the nodes in the graph', () => {

    let results = graph.breadthFirst(A);

    console.log(JSON.stringify(results), '<-- log');

    expect(JSON.stringify(results)).toBe('[{"value":"Pandora"},{"value":"Arendelle"},{"value":"Metroville"},{"value":"Monstropolis"},{"value":"Narnia"},{"value":"Naboo"}]');

  });
});
