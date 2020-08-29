import { Vertex, Graph } from '../DomainClasses';
import { DepthFirstSearch, VisitTimer, SortTopologically } from './DepthFirstSearch.Implementation';

// const vertexes = [
//     new Vertex('A', [{Id:'B', Distance: Infinity}, {Id:'E', Distance: Infinity}]),
//     new Vertex('B', [{Id:'A', Distance: Infinity}]),
//     new Vertex('C', [{Id:'D', Distance: Infinity}, {Id:'G', Distance: Infinity}, {Id:'H', Distance: Infinity}]),
//     new Vertex('D', [{Id:'C', Distance: Infinity}, {Id:'H', Distance: Infinity}]),
//     new Vertex('E', [{Id:'I', Distance: Infinity}, {Id:'J', Distance: Infinity}]),
//     new Vertex('F', []),
//     new Vertex('G', [{Id:'C', Distance: Infinity}, {Id:'H', Distance: Infinity}]),
//     new Vertex('H', [{Id:'C', Distance: Infinity}, {Id:'D', Distance: Infinity}]),
//     new Vertex('I', [{Id:'E', Distance: Infinity}, {Id:'J', Distance: Infinity}]),
//     new Vertex('J', [{Id:'E', Distance: Infinity}, {Id:'I', Distance: Infinity}]),    
//     new Vertex('K', [{Id:'G', Distance: Infinity}, {Id:'H', Distance: Infinity}]),
//     new Vertex('L', [{Id:'H', Distance: Infinity}]),
// ];

// Undirected graph from text (p. 86)
// const vertexes = [
//     new Vertex('A', [{Id:'B', Distance: Infinity}, {Id:'E', Distance: Infinity}]),
//     new Vertex('B', [{Id:'A', Distance: Infinity}]),
//     new Vertex('C', [{Id:'D', Distance: Infinity}, {Id:'G', Distance: Infinity}, {Id:'H', Distance: Infinity}]),
//     new Vertex('D', [{Id:'C', Distance: Infinity}, {Id:'H', Distance: Infinity}]),
//     new Vertex('E', [{Id:'I', Distance: Infinity}, {Id:'J', Distance: Infinity}]),
//     new Vertex('F', []),
//     new Vertex('G', [{Id:'C', Distance: Infinity}, {Id:'H', Distance: Infinity}, {Id:'K', Distance: Infinity}]),
//     new Vertex('H', [{Id:'C', Distance: Infinity}, {Id:'D', Distance: Infinity}, {Id:'G', Distance: Infinity}, {Id:'K', Distance: Infinity}, {Id:'L', Distance: Infinity}]),
//     new Vertex('I', [{Id:'E', Distance: Infinity}, {Id:'J', Distance: Infinity}]),
//     new Vertex('J', [{Id:'E', Distance: Infinity}, {Id:'I', Distance: Infinity}]),    
//     new Vertex('K', [{Id:'G', Distance: Infinity}, {Id:'H', Distance: Infinity}]),
//     new Vertex('L', [{Id:'H', Distance: Infinity}]),
// ];


// const vertexes = [
//     new Vertex('A', ['B', 'E']),
//     new Vertex('B', ['A', 'C', 'E']),
//     new Vertex('C', ['B', 'F']),
//     new Vertex('D', ['G', 'H']),
//     new Vertex('E', ['A', 'B', 'F']),
//     new Vertex('F', ['C', 'E']),
//     new Vertex('G', ['D', 'H']),
//     new Vertex('H', ['D', 'G']),
//     new Vertex('I', ['F'])    
// ];


// Directed graph from text (p. 88)
// const vertexes = [
//     new Vertex('A', ['B', 'C', 'F']),
//     new Vertex('B', ['E']),
//     new Vertex('C', ['D']),
//     new Vertex('D', ['A']),
//     new Vertex('E', ['F', 'G', 'H']),
//     new Vertex('F', ['G']),
//     new Vertex('G', []),
//     new Vertex('H', ['G'])
// ];

// const vertexes = [
//     new Vertex('A', ['B', 'H']),
//     new Vertex('B', ['F']),
//     new Vertex('C', ['B']),
//     new Vertex('D', ['C', 'E']),
//     new Vertex('E', []),
//     new Vertex('F', ['C', 'D', 'E']),
//     new Vertex('G', ['A', 'B', 'F']),
//     new Vertex('H', ['G'])
// ];


// Example for TopSort (p.90)
// const vertexes = [
//     new Vertex('A', ['C']),
//     new Vertex('B', ['A', 'D']),
//     new Vertex('C', ['E', 'F']),
//     new Vertex('D', ['C']),
//     new Vertex('E', []),
//     new Vertex('F', [])
// ];


const vertexes = [
    new Vertex('A', [{Id: 'C', Distance: Infinity}]),
    new Vertex('B', [{Id: 'C', Distance: Infinity}]),
    new Vertex('C', [{Id: 'D', Distance: Infinity}, {Id: 'E', Distance: Infinity}]),
    new Vertex('D', [{Id: 'F', Distance: Infinity}]),
    new Vertex('E', [{Id: 'F', Distance: Infinity}]),
    new Vertex('F', [{Id: 'G', Distance: Infinity}, {Id: 'H', Distance: Infinity}]),
    new Vertex('G', []),
    new Vertex('H', [])
];


const graph = new Graph(vertexes);
const visitTimer = new VisitTimer();
DepthFirstSearch(graph, visitTimer);
const searchData = visitTimer.ZipPreAndPostData();

console.log('\n');
console.log(searchData);

console.log('\n Topological Sort / Linearization');
console.log(SortTopologically(searchData));
