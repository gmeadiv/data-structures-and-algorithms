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

      console.log(vertex, '<-- error --<<')
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

    const visitedNodesArray = []
    visitedNodes.forEach(value => { visitedNodesArray.push(value) })

    return visitedNodesArray;
  }

  getMatrix(startVertex) {

    let columns = [];

    const matrix = this.depthFirst(startVertex).reduce((accum, vertex, index) => {

      let neighbors = this.getNeighbors(vertex).map(edge => {
        return edge.vertex.value
      })

      columns[index] = vertex.value
      columns.sort()
      accum[vertex.value] = neighbors
      
      return accum
    }, {}, 0)
    
    for (let [vertex, neighbors] of Object.entries(matrix)) {

      let index = 0
      let row = []

      neighbors.map(neighbor => {
        columns.map(column => {

          if (neighbor === column) {
            row[index] = 1
          } else {

            if (!row[index]) {
              row[index] = 0;
            }
          }

          console.log(neighbor, '(neighbor equals column)', column, `vertex ${vertex}: `, row)
          index ++
        })

        index = 0
      })

      matrix[vertex] = row;
    }

    console.log(matrix, '<-- matrix --<<')
  }
}

let graph = new Graph();

let A = graph.addVertex('A');
let B = graph.addVertex('B');
let C = graph.addVertex('C');
let D = graph.addVertex('D');
let E = graph.addVertex('E');

graph.addDirectedEdge(A, B);
graph.addDirectedEdge(A, E);
graph.addDirectedEdge(B, C);
graph.addDirectedEdge(B, D);
graph.addDirectedEdge(C, D);
graph.addDirectedEdge(C, E);
graph.addDirectedEdge(D, E);

describe('Testing graph implementation', () => {

  test('It should be able to return all the nodes in the graph', () => {

    let results = graph.getMatrix(A);

    console.log(JSON.stringify(results), '<-- result --<<');

    expect(JSON.stringify(results)).toBe('[{"value":"A"},{"value":"B"},{"value":"C"},{"value":"G"},{"value":"D"},{"value":"E"},{"value":"F"},{"value":"H"}]');

  });
});
