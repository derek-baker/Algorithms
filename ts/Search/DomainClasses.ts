export interface IAdjacentVertex {
    Id: string, 
    Distance: number
}


export class Vertex {
    public VertexId: string;
    public Visited: boolean;
    /** Edges are implied by adjacency */
    public readonly AdjacentVertexList: IAdjacentVertex[];

    constructor(id: string, adjacentVertexIdList: IAdjacentVertex[]) {
        adjacentVertexIdList.map(vertex => vertex.Distance = Infinity);

        this.VertexId = id;
        this.Visited = false;
        this.AdjacentVertexList = adjacentVertexIdList;     
    }
}


/** 
 * Can model both directed and undirected graphs as 
 * the Vertex class can model both unilateral and bilateral edge connectivity.
 */
export class Graph {
    public readonly Vertices: Vertex[]

    /** TODO: Sort vertices */
    constructor(vertices: Vertex[]) {
        this.Vertices = vertices        
    }    


    public GetVertexById(vertexId: string): Vertex {
        const result = this.Vertices.find(
            x => x.VertexId === vertexId
        );
        if (!result) { throw 'INVARIANT VIOLATION'; }
        return result;
    }

    // public GetVertexesById(vertexIdList: string[]): Vertex[] {
    //     const result = this.Vertices.filter(
    //         // NOTE: This is very hacky...
    //         x => vertexIdList.join('').includes(x.VertexId)
    //     );
    //     if (!result) { throw 'INVARIANT VIOLATION'; }
    //     return result;
    // }
}
