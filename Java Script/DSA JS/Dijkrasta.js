class PriorityQueue {
    constructor() {
        this.nodes = [];
    }

    enqueue(node, priority) {
        this.nodes.push({ node, priority });
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.nodes.length - 1;
        const element = this.nodes[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.nodes[parentIndex];
            if (element.priority >= parent.priority) break;
            this.nodes[index] = parent;
            this.nodes[parentIndex] = element;
            index = parentIndex;
        }
    }

    dequeue() {
        if (this.nodes.length === 0) return false;
        const min = this.nodes[0];
        const end = this.nodes.pop();
        if (this.nodes.length > 0) {
            this.nodes[0] = end;
            this.sinkDown();
        }
        return min;
    }

    sinkDown() {
        let index = 0;
        const length = this.nodes.length;
        const element = this.nodes[0];
        while (true) {
            let leftChildIdx = 2 * index + 1;
            let rightChildIdx = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.nodes[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.nodes[rightChildIdx];
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.nodes[index] = this.nodes[swap];
            this.nodes[swap] = element;
            index = swap;
        }
    }
}


class WeightedGraph{
    constructor(){
        this.values = {};
    }
    addVertex(vertex){
        if(!this.values[vertex]) this.values[vertex] = [];
    }
    addEdge(vertex1 , vertex2 , weight){
        this.values[vertex1].push({node : vertex2 , weight});
        this.values[vertex2].push({node : vertex1 , weight});
        return this.values;
    }
    Dijkrasta(start , finish){
        let distances = {};
        let previous = {};
        let path = [];
        let swap;
        const queue = new PriorityQueue();
        for(let el in this.values){
            if(start === el){
                distances[el] = 0;
                queue.enqueue(el , 0);
            }
            else{
                distances[el] = Infinity;
                queue.enqueue(el , Infinity);
            }
            previous[el] = null;
        }
        
        console.log(distances)
        while(queue.nodes.length){
            swap = queue.dequeue().node;
            
            if(swap === finish){
                while(previous[swap]){
                    path.push(swap);
                    swap = previous[swap];
                }
                break;
            }
            
            if(swap || distances[swap] !== Infinity){
                
               for( let next of this.values[swap]){
                   
                   let current = next.weight + distances[swap];
                   if(current < distances[next.node]){
                       distances[next.node] = current;
                       previous[next.node] = swap;
                       queue.enqueue(next.node , current);
                   }
               } 

            }
        }
    

        return path.concat(start).reverse();
    }
}
const g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);