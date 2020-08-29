import { Graph, Vertex, IAdjacentVertex } from "../DomainClasses";

/** Inefficiently emulating a priority queue */
class NaivePriorityQueue {
    public _elements: IAdjacentVertex[];    

    constructor(startVertex: IAdjacentVertex) {
        this._elements = [startVertex];
    }

    public GetElements(): IAdjacentVertex[] {
        return this._elements;
    }

    /** Removes one element from the queue */
    public Eject(): IAdjacentVertex {
        // Sort by distance, and alphabetically(1b, 1c, 2a), and select the first element
        const currentlyVisited = this._elements.sort(
            (a, b) => {
                const aData = `${a.Distance.toString()}${a.Id}`;
                const bData = `${b.Distance.toString()}${b.Id}`;
                if (aData < bData) {
                    return -1;
                }
                if (aData > bData) {
                    return 1;
                }
                return 0;
            }
        )[0];
        const queueCopy = this._elements;
        this._elements = queueCopy.filter(
            el => {
                return el.Id !== currentlyVisited.Id 
            }
        );
        console.log('\nQUEUE AFTER EJECTION');
        console.log(this._elements);
        
        if (!currentlyVisited) { 
            throw new Error('INVARIANT VIOLATION: There should have been an element found'); 
        }
        return currentlyVisited;
    }

    /** Add element to the queue */
    public Inject(vertex: IAdjacentVertex): void {
        this._elements.push(vertex);
    }

    public GetCount(): number {
        return this._elements.length;
    }
}


/** Note that we set distance between all vertices to infinity in the Vertex constructor */
export const BreadthFirstSearch = (graph: Graph, startVertex: Vertex) => {
    let currentDistance = 0;
    const priorityQueue = new NaivePriorityQueue({
        Id: startVertex.VertexId,
        Distance: currentDistance
    }); 

    while (priorityQueue.GetCount() > 0) {
        const currentVertex = graph.GetVertexById(priorityQueue.Eject().Id);
        const availableEdges = currentVertex.AdjacentVertexList;

        console.log(`\nCURRENT VERTEX: ${currentVertex.VertexId}`);
        console.log(`NODES REACHABLE FROM ${currentVertex.VertexId}`);
        console.log(availableEdges);

        availableEdges.forEach(
            edge => {
                if (edge.Distance === Infinity) {
                    edge.Distance = currentDistance + 1;
                    priorityQueue.Inject(edge);
                }
            }
        );
        currentDistance++;
    }
};