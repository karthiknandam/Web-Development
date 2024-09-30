class Graph{
    constructor(){
        this.allNodes = {}
    }
    addVertex(vertex){
        if(!this.allNodes[vertex])
        this.allNodes[vertex] = [];
        return this.allNodes;
    }
    addEdge(vertex1 , vertex2){
        this.allNodes[vertex1].push(vertex2);
        this.allNodes[vertex2].push(vertex1);
        return this.allNodes;
    }
    
    removeEdge(vertex1 , vertex2){
        // Make sure to reassign the array itself rather than calling the value directly it wont work like that:
        this.allNodes[vertex1] = this.allNodes[vertex1].filter(v => v !== vertex2);
        this.allNodes[vertex2] = this.allNodes[vertex2].filter(v => v !== vertex1);
        return this.allNodes;
    }
    removeVertex(vertex){
        // const vertex = this.allNodes[value];
        // for(let i = 0 ; i< vertex.length ; i++){
        //     let key = this.allNodes[value][i];
        //     this.allNodes[key] = this.allNodes[key].filter(v => v !== value);
        // }
        // delete this.allNodes[value];
        // return this.allNodes;


        while(this.allNodes[vertex].length){
            const adjVertex = this.allNodes[vertex].pop();
            this.removeEdge(vertex , adjVertex)
        }
        delete this.allNodes[vertex];
    }

    DFSRecursion(vertex){
        let storage = {} ;  
        let arr = [];
        const nodes = this.allNodes;
        (function DFSCall(vertex){
            if(!vertex) return;
            if(storage[vertex]) return ;
            storage[vertex] = true;
            arr.push(vertex);
            for(let element of nodes[vertex] ){
                if(!storage[element])  DFSCall(element);
            }
        })(vertex);
        return arr;
    }
    DFSLoopThrough(vertex){
        let storage = {};
        let stack = [vertex];
        let arr = [];
        let currentVertex;
        storage[vertex] = true;
        while(stack.length){
            currentVertex = stack.pop();
            arr.push(currentVertex);
            for(let el of this.allNodes[currentVertex]){
                if(!storage[el]){
                    storage[el] = true;
                    stack.push(el);
                }
            }
        }
        return arr;
    }
    BFSUsingRecursion(vertex){
        let arr = [];
        let stack = [vertex];
        let storage = {};
        let currentVertex ;
        storage[vertex] = true;
        while(stack.length){
            currentVertex = stack.shift();
            arr.push(currentVertex);
            for(let el of this.allNodes[currentVertex]){
                if(!storage[el]){
                    storage[el] = true;
                    stack.push(el);
                }
            }
        }
        return arr;
    }
    
}
// const g = new Graph();
// g.addVertex('A');
// g.addVertex('B');
// g.addVertex('C');
// g.addVertex('D');
// g.addVertex('E');
// g.addVertex('F');

// g.addEdge('A', 'B');
// g.addEdge('A', 'C');
// g.addEdge('B', 'D');
// g.addEdge('C', 'E');
// g.addEdge('D', 'E');
// g.addEdge('D', 'F');

// g.addEdge('E', 'F');

const g = new Graph();

g.addVertex('1');
g.addVertex('2');
g.addVertex('3');
g.addVertex('4');
g.addVertex('5');
g.addVertex('6');
g.addVertex('7');
g.addVertex('8');
g.addVertex('9');
g.addVertex('10');

// Adding edges in a BFS-like manner
g.addEdge('1', '2');
g.addEdge('1', '3');
g.addEdge('2', '4');
g.addEdge('2', '5');
g.addEdge('3', '6');
g.addEdge('3', '7');
g.addEdge('4', '8');
g.addEdge('5', '9');
g.addEdge('6', '10');

// Additional edges to ensure full connectivity
g.addEdge('7', '8');
g.addEdge('8', '9');
g.addEdge('9', '10');

