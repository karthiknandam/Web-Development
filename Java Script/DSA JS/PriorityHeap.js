class node{
    constructor(val , priority){
        this.val = val;
        this.priority = priority;
    }
}

class PriorityHeap {
    constructor(){
        this.values = [];
    }

    enqueue(val , priority){
        const newNode = new node(val , priority)
        this.values.push(newNode);
        this.bubble();
        return this.values;
    }
    bubble(){
        let idx = this.values.length - 1;
        let element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1) / 2);
            let parentValue = this.values[parentIdx];
            if(element.priority >= parentValue.priority) break;
            this.values[idx] = parentValue;
            this.values[parentIdx] = element;
            idx = parentIdx;
        }
    }
    dequeue(){
        if(this.values.length === 0) return false;
        let min = this.values[0];
        let popElement = this.values.pop();
        if(this.values.length > 0) {
        this.values[0] = popElement;
        this.sinkDown(); 
        }
        return {
            min ,
            array : this.values
            };
    }
    sinkDown(){
        let parentIdx = 0;
        let parent = this.values[0];
        let length = this.values.length;
        while(true){
            let leftIdx = 2 * parentIdx + 1;
            let rightIdx = 2 * parentIdx + 2;
            let left , right;
            let swapIdx = null;
            if(leftIdx < length ) {
              left =  this.values[leftIdx] ;
                if(left.priority < parent.priority) swapIdx = leftIdx;
            }
            if(rightIdx < length ){
                right = this.values[rightIdx]
                if(
                    (swapIdx === null && right.priority < parent.priority) || 
                    (swapIdx !== null && right.priority < left.priority)
                  )
             swapIdx = rightIdx;
            }
            if(swapIdx === null) break;
            let child = this.values[swapIdx];
            this.values[swapIdx] = parent;
            this.values[parentIdx] = child;
            parentIdx = swapIdx;
        }
    }
}
const Hospital = new PriorityHeap();
