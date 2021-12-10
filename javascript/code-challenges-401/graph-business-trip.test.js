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

    visitedNodes.forEach(value => { visitedNodesArray.push(value) })
    return visitedNodesArray;
  }

  getFlightInfo([startVertex, endVertex], costCeiling = null) {

    let flightInfo = '';

    this.adjacencyList.get(startVertex).map(edge => {

      Object.values(edge).map((value) => {
        if (costCeiling >= edge.weight) {
          if (value.value === endVertex.value) {
            flightInfo = `True, $${edge.weight}`;
          }
        } else {
          flightInfo = `False, $${edge.weight}`;
        }
      });

    });

    return flightInfo;
  }
}

let graph = new Graph();

let A = graph.addVertex('Pandora');
let B = graph.addVertex('Arendelle');
let C = graph.addVertex('Metroville');
let D = graph.addVertex('Monstropolis');
let E = graph.addVertex('Narnia');
let F = graph.addVertex('Naboo');


graph.addDirectedEdge(A, B, 150);
graph.addDirectedEdge(A, C, 82);
graph.addDirectedEdge(B, C, 99);
graph.addDirectedEdge(B, D, 42);
graph.addDirectedEdge(C, D, 105);
graph.addDirectedEdge(C, E, 37);
graph.addDirectedEdge(C, F, 26);
graph.addDirectedEdge(D, F, 73);
graph.addDirectedEdge(E, F, 250);

describe('Testing business trip function', () => {

  test('It should be able to return true and the price of a ticket', () => {

    let results = graph.getFlightInfo([A, B], 200);

    expect(results).toBe('True, $150');

  });

  test('It should be able to return false and the price of a ticket', () => {

    let results = graph.getFlightInfo([A, B], 100);

    expect(results).toBe('False, $150');

  });
});
