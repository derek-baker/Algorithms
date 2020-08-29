import { BreadthFirstSearch } from "./BreadFirstSearch.Implementation";
import { Graph, Vertex } from "../DomainClasses";

// Graph from text(p. 106)
// const vertexes = [
//     new Vertex('S', [{Id: 'A', Distance: Infinity}, {Id: 'C', Distance: Infinity}, {Id: 'D', Distance: Infinity}, {Id: 'E', Distance: Infinity}]),
//     new Vertex('A', [{Id: 'B', Distance: Infinity}]),
//     new Vertex('B', []),
//     new Vertex('C', []),
//     new Vertex('D', []),
//     new Vertex('E', [])
// ];

// GRAPH FROM HERE: https://www.tutorialspoint.com/data_structures_algorithms/breadth_first_traversal.htm
const vertexes = [
    new Vertex('S', [{Id: 'A', Distance: Infinity}, {Id: 'B', Distance: Infinity}, {Id: 'C', Distance: Infinity}]),
    new Vertex('A', [{Id: 'D', Distance: Infinity}]),
    new Vertex('B', [{Id: 'E', Distance: Infinity}]),
    new Vertex('C', [{Id: 'F', Distance: Infinity}]),
    new Vertex('D', [{Id: 'G', Distance: Infinity}]),
    new Vertex('E', [{Id: 'F', Distance: Infinity}]),
    new Vertex('F', [{Id: 'G', Distance: Infinity}]),
];

const graph = new Graph(vertexes);
const startVertex = vertexes[0];

BreadthFirstSearch(graph, startVertex);