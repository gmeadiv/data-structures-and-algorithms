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

  depthFirst(startVertex, visitedNodes = new Set()) {

    visitedNodes.add(startVertex);

    const values = this.adjacencyList.get(startVertex);

    for (const value of values) {

      const neighbor = value.vertex;
      this.depthFirst(neighbor, visitedNodes);

    }

    let visitedNodesArray = []

    visitedNodes.forEach(value => { visitedNodesArray.push(value) })
    return visitedNodesArray;
  }
}

let graph = new Graph();

let A = graph.addVertex('A');
let B = graph.addVertex('B');
let C = graph.addVertex('C');
let D = graph.addVertex('D');
let E = graph.addVertex('E');
let F = graph.addVertex('F');
let G = graph.addVertex('G');
let H = graph.addVertex('H');



graph.addDirectedEdge(A, B);
graph.addDirectedEdge(A, D);
graph.addDirectedEdge(B, C);
graph.addDirectedEdge(B, D);
graph.addDirectedEdge(C, G);
graph.addDirectedEdge(D, E);
graph.addDirectedEdge(D, F);
graph.addDirectedEdge(D, H);
graph.addDirectedEdge(F, H);

describe('Testing graph implementation', () => {

  test('It should be able to return all the nodes in the graph', () => {

    let results = graph.depthFirst(A);

    console.log(JSON.stringify(results), '<-- log');

    expect(JSON.stringify(results)).toBe('[{"value":"A"},{"value":"B"},{"value":"C"},{"value":"G"},{"value":"D"},{"value":"E"},{"value":"F"},{"value":"H"}]');

  });
});
