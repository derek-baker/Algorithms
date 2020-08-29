import { Vertex, Graph } from '../DomainClasses'


interface IOrderingInfo {
    vertexId: string; 
    clockValue: number
}


export class VisitTimer {
    private readonly _clockObj = { value: 1 };
    public readonly PrevisitTimes: IOrderingInfo[] = [];
    public readonly PostvisitTimes: IOrderingInfo[] = [];

    PreVisit(
        vertexId: string,
        pre: IOrderingInfo[] = this.PrevisitTimes,
        clock: { value: number } = this._clockObj
    ) {
        pre.push({vertexId: vertexId, clockValue: clock.value});
        clock.value++;
    };    
    

    PostVisit(
        vertexId: string,
        post: IOrderingInfo[] = this.PostvisitTimes,
        clock: { value: number } = this._clockObj
    ) {
        post.push({vertexId: vertexId, clockValue: clock.value});
        clock.value++;
    };


    /** Zip up arrays on vertexId */
    ZipPreAndPostData() {
        const result = this.PrevisitTimes.map(
            (element) => {
                const postVisitTime = this.PostvisitTimes.find(x => x.vertexId === element.vertexId);
                if (!postVisitTime) { throw 'INVARIANT VIOLATION'; }
                return {
                    node: element.vertexId, 
                    previsitTime: element.clockValue,
                    postVisitTime: postVisitTime.clockValue
                };
            }
        );
        if (!result) { throw 'INVARIANT VIOLATION'; }
        return result;
    }
}


const Explore = (
    graph: Graph, 
    vertex: Vertex,
    visitTimer: VisitTimer
): void => {
    vertex.Visited = true;    
    console.log('Visiting: ' + vertex.VertexId);
    visitTimer.PreVisit(vertex.VertexId);
    vertex.AdjacentVertexList.forEach(
        (adjVertex) => {
            const newVertex = graph.GetVertexById(adjVertex.Id);
            console.log(vertex.VertexId + ' is adjacent to: ' + newVertex.VertexId);
            if (newVertex.Visited === false) {
                Explore(graph, newVertex, visitTimer);
                console.log(
                    'Returning previous to node (' + vertex.VertexId + ') via CallStack.pop()'
                );
            }
        }
    );
    visitTimer.PostVisit(vertex.VertexId);    
};


export const DepthFirstSearch = (
    graph: Graph,
    visitTimer: VisitTimer
) => {
    for (const vertex of graph.Vertices) {
        vertex.Visited = false;        
    }

    for (const currentVertex of graph.Vertices) {
        if (currentVertex.Visited === false) {
            Explore(graph, currentVertex, visitTimer);
        }
    }
};


/** Using intersection type because I'm lazy... */
export const SortTopologically = (data: {postVisitTime: number}[] | any[]) => {
    /**
     * Sort in desc order
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Examples
     */
    return data.sort((a, b) => {
        return b.postVisitTime - a.postVisitTime;
    });
};